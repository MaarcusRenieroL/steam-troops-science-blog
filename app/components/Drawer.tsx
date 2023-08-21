"use client";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MdMenu } from "react-icons/md"
import Logo from "./Logo";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

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

export default function Drawer() {

    const { status } = useSession();

    return (
        <Sheet>
            <SheetTrigger>
                <MdMenu size={40} className="p-2 hover:bg-gray-200 rounded-full" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="mx-auto my-5">
                        <Logo />
                    </SheetTitle>
                    <div className="flex flex-col w-full justify-start items-center space-y-5">
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
                        {status === "authenticated" && <button className="text-gray-900 text-lg font-semibold hover:text-violet-600 duration-300" onClick={() => signOut()}>Logout</button>}
                    </div>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
