"use client";

import Link from "next/link";
import Logo from "./Logo";
import { signOut, useSession } from "next-auth/react";

const authLinks = [
  {
    id: "1",
    name: "Blogs",
    url: "/blogs",
  },
  {
    id: "2",
    name: "Write",
    url: "/blogs/add",
  },
  {
    id: "3",
    name: "Profile",
    url: "/profile",
  },
  {
    id: "4",
    name: "Search",
    url: "/search",
  },
];

const nonAuthLinks = [
  {
    id: "1",
    name: "Blogs",
    url: "/blogs",
  },
  {
    id: "2",
    name: "Login",
    url: "/login",
  },
  {
    id: "3",
    name: "Register",
    url: "/register",
  },
];

const Header = () => {
  const { status } = useSession();

  return (
    <section className="sticky w-full bg-gray-100">
      <nav className="flex items-center justify-between px-8 py-4 bg-transparent">
        <div>
          <Logo />
        </div>
        <div className="flex items-center gap-4 p-2">
          {(status === "authenticated" ? authLinks : nonAuthLinks).map(
            (item) => (
              <Link
                href={item.url}
                key={item.id}
                className="text-gray-900 text-lg font-semibold hover:text-violet-600 duration-300"
              >
                {item.name}
              </Link>
            ),
          )}
          <button className="text-gray-900 text-lg font-semibold hover:text-violet-600 duration-300" onClick={() => signOut()}>Logout</button>
        </div>
      </nav>
    </section>
  );
};

export default Header;
