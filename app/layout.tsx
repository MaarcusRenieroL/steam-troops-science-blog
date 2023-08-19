import "./globals.css";
import type { Metadata } from "next";

import Provider from "./components/Provider";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Steam Troops Science Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Provider>
          <Header />
          <main className="flex-1">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
