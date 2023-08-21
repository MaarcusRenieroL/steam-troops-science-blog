"use client";

import { BlogItemType } from "@/lib/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import BlogCard from "../components/BlogCard";

export default function SearchPage() {

    const { handleSubmit, register } = useForm();

    const [blogs, setBlogs] = useState<BlogItemType[]>([]);

    const handleSearch = async ({ search }: { search: string }) => {
        let str = search;

        if (search.includes(" ")) {
            str = search.split(" ").join("%20");
        }

        try {
            toast.loading("Searching", { id: "SEARCH" })
            const res = await fetch(`http://localhost:3000/api/blogs/search?title=${str}`, {
                cache: "no-store",
            });

            const data = await res.json();

            setBlogs(data.blog);  
            toast.success("Fetched Successfully", { id: "SEARCH" })
        } catch (error) {
            toast.error("Failed to fetch", { id: "SEARCH" })
            return console.log(error)
        }
    };

    return (
        <section className="w-full h-full">
            <h2 className="text-3xl text-center font-bold font-serif">Search from Blogs Database</h2>
            <div className="md:w-2/4 xs:w-3/4 mx-auto flex items-center justify-between bg-slate-100 m-4 px-6 py-4 rounded-xl text-gray-900 font-semibold">
                <input type="text" className="bg-transparent border-none outline-none p-1 w-full" {...register("search", { required: true })} />
                {/* @ts-ignore */}
                <FaSearch onClick={handleSubmit(handleSearch)} size={40} className="bg-slate-300 hover:bg-slate-500 p-2 rounded-full cursor-pointer" />
            </div>
            <div>
                {blogs?.map((blog) => (
                    <BlogCard {...blog} key={blog.id} />
                ))}
            </div>
        </section>
    )
}
