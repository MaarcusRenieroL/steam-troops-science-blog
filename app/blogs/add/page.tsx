"use client";

import { categories } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState, useRef } from "react";
import { Editor } from "react-draft-wysiwyg";
import { useForm } from "react-hook-form";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { Toaster, toast } from "react-hot-toast";

export default function Page() {
	const { data: session } = useSession();

	const [imageUrl, setImageUrl] = useState("");
	const headingRef = useRef<HTMLHeadingElement | null>(null);
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const convertEditorToHTML = () => {
		return draftToHtml(convertToRaw(editorState.getCurrentContent()));
	};

	const handleEditorStateChange = (event: any) => {
		setEditorState(event);
	};

	const handlePost = async (data: any) => {
		const formData = new FormData();
		const postData = JSON.stringify({
			title: headingRef.current?.innerText,
			description: convertEditorToHTML(),
			location: data.location,
			userId: session?.user.id,
			categoryId: data.category,
		});

		formData.append("postData", postData);
		formData.append("image", data.image[0]);

		console.log(formData.get("postData"));
		console.log(formData.get("image"));

		try {
			toast.loading("Sending your post to your world", { id: "postData" });

			await fetch("http://localhost:3000/api/blogs", {
				method: "POST",
				body: formData,
				cache: "no-store",
			});

			toast.success("Sent successfully", { id: "postData" });

		} catch (error) {
			toast.error("Sending Failed", { id: "postData" });
			return console.log(error);
		}
	};

	return (
		<section className="w-full">
			<Toaster position="bottom-center" />
			<div className="flex items-center justify-between p-4">
				<div className="w-1/4">
					<span className="font-extrabold mx-3">Author</span>
					<span className="font-semibold m-3 uppercase">
						{session?.user?.name}
					</span>
				</div>
				<button
					onClick={handleSubmit(handlePost)}
					className="bg-violet-600 text-white px-6 focus:ring-violet-950 py-3 rounded-xl font-semibold shadow-lg hover:bg-violet-700"
				>
					Publish
				</button>
			</div>
			{imageUrl && (
				<Image
					src={imageUrl}
					alt="banner"
					width={500}
					height={500}
					className="mx-auto my-20 rounded-lg shadow-lg border-[3px] border-slate-900"
				/>
			)}
			<h1
				ref={headingRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="outline-none border-none font-serif m-auto px-24 text-2xl text-center font-semibold w-full h-28 focus:border-none"
			>
				Enter Title
			</h1>
			<div className="w-full flex my-5">
				<input
					type="file"
					className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl font-semibold"
					{...register("image", {
						required: true,
						onChange(event) {
							setImageUrl(URL.createObjectURL(event.target.files[0]));
						},
					})}
				/>
			</div>
			<div className="w-full flex my-5">
				<input
					placeholder="Enter your Location"
					type="text"
					className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl font-semibold"
					{...register("location", { required: true })}
				/>
			</div>
			<div className="w-full flex my-5">
				<select
					className="md:w-[500px] sm:w-[300px] m-auto text-slate-900 bg-gray-100 p-4 rounded-xl font-semibold"
					{...register("category", { required: true })}
				>
					{categories.map((category) => (
						<option key={category.id}>{category.name}</option>
					))}
				</select>
			</div>
			<div className="my-5 p-10">
				<Editor
					editorState={editorState}
					onEditorStateChange={handleEditorStateChange}
					editorStyle={{
						minHeight: "50vh",
						height: "auto",
						alignItems: "center",
						border: "1px solid black",
						padding: "10px",
					}}
				/>
			</div>
		</section>
	);
}
