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
