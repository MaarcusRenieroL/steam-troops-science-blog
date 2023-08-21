"use client";

import Image from "next/image";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { BlogItemType } from "@/lib/types";
import Link from "next/link";
import toast from "react-hot-toast";

type Props = BlogItemType;

function getTextFromHTML(html: string) {
	if (process.browser) {
		const element = document.createElement("span");
	element.innerHTML = html;

	return element.innerText.slice(0, 300);
	}
}

const deleteBlog = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        cache: "no-store",
        method: "DELETE",
    });
}

export default function BlogCard (props: Props) {

	const handleDelete = async () => {
		try {
			toast.loading("Deleting Blog", { id: "deleteBlog"})
			await deleteBlog(props.id);
			toast.success("Deleted Successfully", { id: "deleteBlog"})
		} catch(error) {
			toast.error("Failed to Delete" , { id: "deleteBlog"})
			return console.log(error);

		}
	}

	return (
		<Card className="hover:border-slate-950 duration-500 flex flex-col w-[400px] h-[550px] mx-4 my-2 rounded-lg">
			<CardHeader>
				<Image
					width={400}
					height={100}
					className="h-48 rounded-sm"
					alt={props.title}
					src={
						props.imageUrl ??
						"https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
					}
				/>
			</CardHeader>
			<CardTitle className="p-3">{props.title}</CardTitle>
			<hr className="p-2"/>
			<CardContent className="w-full text-slate-900">
				<div className="flex justify-end gap-2 p-2 items-center font-semibold">

					<p className="font-mono">
						{props.location}
					</p>
				</div>
				<p className="tracking-wide w-full px-2 py-1 text-left">
					{getTextFromHTML(props.description)}
				</p>
			</CardContent>
			<CardFooter className="w-full h-full p-3 flex justify-between items-center">
				<Link href={`/blogs/view/${props.id}`} className="mr-auto mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 hover:text-violet-100 duration-500">
					View More
				</Link>
				{props.isProfile && <Link href={`/blogs/edit/${props.id}`} className="mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 hover:text-violet-100 duration-500">
					Edit Blog
				</Link>}
				{props.isProfile && <button onClick={handleDelete} className="mt-auto ml-5 border-[1px] p-3 rounded-lg hover:bg-violet-600 hover:text-violet-100 duration-500">
					Delete Blog
				</button>}
			</CardFooter>
		</Card>
	);
};

