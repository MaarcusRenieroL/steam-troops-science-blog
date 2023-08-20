import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categories = [
  {
    id: "64e08739d43a18e826d249f1",
    name: "Education",
  },
  {
    id: "64e08740d43a18e826d249f3",
    name: "Technology",
  },
  {
    id: "64e0e04c8ba34588946fcc94",
    name: "Healthcare",
  },
  {
    id: "64e0e04f8ba34588946fcc96",
    name: "Food",
  },
  {
    id: "64e0e0558ba34588946fcc98",
    name: "Politics",
  },
];