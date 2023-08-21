"use client";

import { useSession } from "next-auth/react";
import { useState, useRef, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { toast } from "react-hot-toast";
import { BlogItemType } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

const getBlogById = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        cache: "no-store"
    });

    const data = await res.json();

    return data.blog;
}

const updateBlogById = async (id: string, postData: any) => {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
        cache: "no-store",
        method: "PUT",
        body: JSON.stringify({ ...postData })
    });

    const data = await res.json();

    return data.blog;
}


export default function EditBlogPage({ params }: { params: { id: string } }) {
    const { data: session } = useSession();

    const [imageUrl, setImageUrl] = useState("");
    const headingRef = useRef<HTMLHeadingElement | null>(null);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [isLoading, setIsLoading] = useState(false)

    const convertEditorToHTML = () => {
        return draftToHtml(convertToRaw(editorState.getCurrentContent()));
    };

    const handleEditorStateChange = (event: any) => {
        setEditorState(event);
    };

    useEffect(() => {
        setIsLoading(true);
        toast.loading("Filling in Blog Details", { id: "loading" })
        getBlogById(params.id).then((data: BlogItemType) => {
            const contentBlocks = convertFromHTML(data.description);

            const contentState = ContentState.createFromBlockArray(contentBlocks.contentBlocks);

            const initialState = EditorState.createWithContent(contentState);

            setEditorState(initialState);

            if (headingRef && headingRef.current) {
                headingRef.current.innerText = data.title;
            }
            setIsLoading(false);
            toast.success("Blog Post Updated", { id: "loading" })
        }).catch((error) => {
            console.log(error);
            toast.error("Updated Blog Details", { id: "loading" });
        }).finally(() => {
            setIsLoading(false);

        });
    }, [])

    const handlePost = async () => {
        const postData = {
            title: headingRef.current?.innerText,
            description: convertEditorToHTML()
        };

        try {
            toast.loading("Sending updated post to your world", { id: "postUpdate" })

            await updateBlogById(params.id, postData);

            toast.success("Updated Successfully", { id: "postUpdate" })
        } catch (error) {
            toast.error("Sending Failed", { id: "postUpdate" })
            return console.log(error);
        }
    };

    return (
        <section className="w-full">
            <div className="flex items-center justify-between p-4">
                <div className="w-1/4">
                    <span className="font-extrabold mx-3">Author</span>
                    <span className="font-semibold m-3 uppercase">
                        {session?.user?.name}
                    </span>
                </div>
                <button
                    onClick={handlePost}
                    className="bg-violet-600 text-white px-6 focus:ring-violet-950 py-3 rounded-xl font-semibold shadow-lg hover:bg-violet-700"
                >
                    Publish
                </button>
            </div>
            {isLoading && <p>
                <Skeleton className="w-[300px] rounded-xl mx-auto text-center h-[50px]" /></p>}
            <h1
                ref={headingRef}
                contentEditable={true}
                suppressContentEditableWarning={true}
                className="outline-none border-none font-serif m-auto px-24 text-2xl text-center font-semibold w-full h-28 focus:border-none"
            >
                Enter Title
            </h1>
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
