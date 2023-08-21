import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categories = [
  {
    "id": "64e36f6f1dece49dbe928366",
    "name": "Physics"
},
{
    "id": "64e36f741dece49dbe928368",
    "name": "Chemistry"
},
{
    "id": "64e36f7a1dece49dbe92836a",
    "name": "Biology"
},
{
    "id": "64e370401dece49dbe928373",
    "name": "Botany"
}
];