import NextAuth, { AuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "@/lib/helpers";
import prisma from "@/prisma";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          type: "text",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        try {
          await connectToDb();

          const user = await prisma.user.findFirst({
            where: { email: credentials.email },
          });

          if (!user) {
            return null;
          }

          if (!user.password) {
            return null;
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password,
          );

          if (!isPasswordCorrect) {
            return null;
          }

          return { ...user, id: user.id };
        } catch (error) {
          return null;
        } finally {
          await prisma.$disconnect();
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session({ session, token }) {
        if (session.user && token.sub) {
          session.user.id = token.sub;
        }

        return session;
    }, async redirect(params) {
        return "/";
    },
  }, pages: {
    signIn: "/login",
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
