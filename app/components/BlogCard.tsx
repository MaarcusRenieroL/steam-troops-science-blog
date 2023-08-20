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

type Props = BlogItemType;

function getTextFromHTML(html: string) {
  const element = document.createElement("span");
  element.innerHTML = html;

  return element.innerText.slice(0, 300);
}

const BlogCard = (props: Props) => {
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
      <CardContent className="w-full text-slate-900">
        <p className="tracking-wide w-full px-2 py-1 text-left">
          {getTextFromHTML(props.description)}
        </p>
      </CardContent>
      <CardFooter className="w-full h-full p-3">
        <Link href={`/blogs/view/${props.id}`} className="ml-auto mt-auto border-[1px] p-3 rounded-lg hover:bg-violet-600 hover:text-violet-100 duration-500">
          View More
        </Link>{" "}
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
