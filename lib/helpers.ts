import prisma from "@/prisma";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";

export const connectToDb = async () => {
  try {
    await prisma.$connect();
  } catch (error: any) {
    throw new Error(error);
  }
};

export const generateSuccessMessage = (data: any, status: number) => {
  return NextResponse.json(
    {
      message: "Success",
      ...data,
    },
    {
      status,
      statusText: "Okay",
    },
  );
};

export const generateErrorMessage = (data: any, status: number) => {
  return NextResponse.json(
    {
      message: "Error",
      ...data,
    },
    {
      status,
      statusText: "Error",
    },
  );
};

export const getAllBlogs = async (count?: number) => {
  const res = await fetch("http://localhost:3000/api/blogs");

  const data = await res.json();

  if (count) {
    return data.blogs.slice(0, count);
  }
  return data.blogs;
};

export const getBlogById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`);

  const data = await res.json();

  return data.blog;
}