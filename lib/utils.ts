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

export const blogs = [
  {
    "id": "64e0d8d5d10f8d6d2c1a5ec8",
    "title": "Hello2",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T14:59:33.056Z",
    "updatedAt": "2023-08-19T14:59:33.056Z",
    "location": "China",
    "categoryId": "64e08739d43a18e826d249f1"
},
{
    "id": "64e0d90cd10f8d6d2c1a5ecb",
    "title": "Maarcus",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T15:00:28.334Z",
    "updatedAt": "2023-08-19T15:00:28.334Z",
    "location": "India",
    "categoryId": "64e08740d43a18e826d249f3"
},
{
    "id": "64e0d917d10f8d6d2c1a5ece",
    "title": "Maarcus",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T15:00:39.911Z",
    "updatedAt": "2023-08-19T15:00:39.911Z",
    "location": "India",
    "categoryId": "64e08740d43a18e826d249f3"
},
{
    "id": "64e0d917d10f8d6d2c1a5ecf",
    "title": "Maarcus",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T15:00:39.997Z",
    "updatedAt": "2023-08-19T15:00:39.997Z",
    "location": "India",
    "categoryId": "64e08740d43a18e826d249f3"
},
{
    "id": "64e0d918d10f8d6d2c1a5ed1",
    "title": "Maarcus",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T15:00:40.548Z",
    "updatedAt": "2023-08-19T15:00:40.548Z",
    "location": "India",
    "categoryId": "64e08740d43a18e826d249f3"
},
{
    "id": "64e0d919d10f8d6d2c1a5ed3",
    "title": "Maarcus",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T15:00:41.250Z",
    "updatedAt": "2023-08-19T15:00:41.250Z",
    "location": "India",
    "categoryId": "64e08740d43a18e826d249f3"
},
{
    "id": "64e0d919d10f8d6d2c1a5ed4",
    "title": "Maarcus",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T15:00:41.668Z",
    "updatedAt": "2023-08-19T15:00:41.668Z",
    "location": "India",
    "categoryId": "64e08740d43a18e826d249f3"
},
{
    "id": "64e0d91bd10f8d6d2c1a5ed6",
    "title": "Maarcus",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T15:00:43.024Z",
    "updatedAt": "2023-08-19T15:00:43.024Z",
    "location": "India",
    "categoryId": "64e08740d43a18e826d249f3"
},
{
    "id": "64e0d91bd10f8d6d2c1a5ed8",
    "title": "Maarcus",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T15:00:43.874Z",
    "updatedAt": "2023-08-19T15:00:43.874Z",
    "location": "India",
    "categoryId": "64e08740d43a18e826d249f3"
},
{
    "id": "64e0d91dd10f8d6d2c1a5eda",
    "title": "Maarcus",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T15:00:45.142Z",
    "updatedAt": "2023-08-19T15:00:45.142Z",
    "location": "India",
    "categoryId": "64e08740d43a18e826d249f3"
},
{
    "id": "64e0d91ed10f8d6d2c1a5edc",
    "title": "Maarcus",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T15:00:46.250Z",
    "updatedAt": "2023-08-19T15:00:46.250Z",
    "location": "India",
    "categoryId": "64e08740d43a18e826d249f3"
},
{
    "id": "64e0d91fd10f8d6d2c1a5ede",
    "title": "Maarcus",
    "description": "<p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is a test2. </p><p>This is also a test2</p><p>This is also a test2</p>",
    "imageUrl": null,
    "userId": "64e06b1e4d8df41e177c8b1b",
    "createdAt": "2023-08-19T15:00:47.462Z",
    "updatedAt": "2023-08-19T15:00:47.462Z",
    "location": "India",
    "categoryId": "64e08740d43a18e826d249f3"
}
]