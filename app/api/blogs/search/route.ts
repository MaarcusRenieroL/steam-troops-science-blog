import prisma from "@/prisma";
import {
  generateErrorMessage,
  generateSuccessMessage,
  connectToDb,
} from "@/lib/helpers";

export const GET = async (req: Request) => {
  const searchedTitle = new URL(req.url).searchParams.get("title");

  try {
    await connectToDb();

    const blog = await prisma.blog.findMany({
      where: {
        title: {
          contains: searchedTitle ?? "",
        },
      },
    });

    return generateSuccessMessage({ blog }, 200);
  } catch (error) {
    return generateErrorMessage({ error }, 500);
  } finally {
    await prisma.$disconnect();
  }
};
