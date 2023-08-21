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
      "id": "64e2b70902806758683e8a02",
      "title": "React",
      "description": "<p style=\"text-align:start;\"></p>\n<p></p>\n<p style=\"margin-left:auto;\"></p>\n<h1 style=\"margin-left:0px;\"><span style=\"color: rgb(353947/var(--tw-text-opacity));font-size: 40px;font-family: Optimistic Display\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">Quick Start</span></h1>\n<p style=\"text-align:start;\"></p>\n<p style=\"margin-left:auto;\"></p>\n<p style=\"margin-left:auto;\"></p>\n<p></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(353947/var(--tw-text-opacity));font-size: 20px;font-family: Optimistic Display\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</span></p>\n<p></p>\n<h3 style=\"margin-left:0px;\"><span style=\"color: rgb(353947/var(--tw-text-opacity));background-color: rgb(246247249/var(--tw-bg-opacity));font-size: 17px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">You will learn</span></h3>\n<ul>\n<li><span style=\"color: rgb(647186/var(--tw-text-opacity));background-color: rgb(246247249/var(--tw-bg-opacity));font-size: 15px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">How to create and nest components</span></li>\n<li><span style=\"color: rgb(647186/var(--tw-text-opacity));background-color: rgb(246247249/var(--tw-bg-opacity));font-size: 15px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">How to add markup and styles</span></li>\n<li><span style=\"color: rgb(647186/var(--tw-text-opacity));background-color: rgb(246247249/var(--tw-bg-opacity));font-size: 15px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">How to display data</span></li>\n<li><span style=\"color: rgb(647186/var(--tw-text-opacity));background-color: rgb(246247249/var(--tw-bg-opacity));font-size: 15px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">How to render conditions and lists</span></li>\n<li><span style=\"color: rgb(647186/var(--tw-text-opacity));background-color: rgb(246247249/var(--tw-bg-opacity));font-size: 15px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">How to respond to events and update the screen</span></li>\n<li><span style=\"color: rgb(647186/var(--tw-text-opacity));background-color: rgb(246247249/var(--tw-bg-opacity));font-size: 15px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">How to share data between components</span></li>\n</ul>\n<h2 style=\"margin-left:0px;\"><span style=\"color: rgb(353947/var(--tw-text-opacity));font-size: 28px;font-family: Optimistic Display\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">Creating and nesting components</span>&nbsp;</h2>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(35,39,47);font-size: 17px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">React apps are made out of <em>components</em>. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(35,39,47);font-size: 17px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">React components are JavaScript functions that return markup:</span></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<pre style=\"margin-left:0px;\"></pre>\n<p><span style=\"color: var(--sp-syntax-color-keyword);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>function</code></span> <span style=\"color: var(--sp-syntax-color-definition);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>MyButton</code></span><span style=\"color: var(--sp-syntax-color-punctuation);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>()</code></span> <span style=\"color: var(--sp-syntax-color-punctuation);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>{</code></span><br></p>\n<p>&nbsp;<span style=\"color: var(--sp-syntax-color-keyword);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: var(--sp-font-size);font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\"><code>return</code></span> <span style=\"color: var(--sp-syntax-color-punctuation);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: var(--sp-font-size);font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\"><code>(</code></span><br></p>\n<p>&nbsp;<span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>&lt;</code></span><span style=\"color: var(--sp-syntax-color-tag);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>button</code></span><span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>&gt;I'm a button&lt;/</code></span><span style=\"color: var(--sp-syntax-color-tag);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>button</code></span><span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>&gt;</code></span><br></p>\n<p>&nbsp;<span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>);</code></span><br></p>\n<p><span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>}</code></span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(35,39,47);font-size: 17px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">Now that you’ve declared <code>MyButton</code>, you can nest it into another component:</span></p>\n<p></p>\n<p></p>\n<p></p>\n<p></p>\n<pre style=\"margin-left:0px;\"></pre>\n<p><span style=\"color: var(--sp-syntax-color-keyword);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>export</code></span> <span style=\"color: var(--sp-syntax-color-keyword);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>default</code></span> <span style=\"color: var(--sp-syntax-color-keyword);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>function</code></span> <span style=\"color: var(--sp-syntax-color-definition);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>MyApp</code></span><span style=\"color: var(--sp-syntax-color-punctuation);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>()</code></span> <span style=\"color: var(--sp-syntax-color-punctuation);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>{</code></span><br></p>\n<p>&nbsp;<span style=\"color: var(--sp-syntax-color-keyword);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: var(--sp-font-size);font-family: var(--sp-font-body);\"><code>return</code></span> <span style=\"color: var(--sp-syntax-color-punctuation);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: var(--sp-font-size);font-family: var(--sp-font-body);\"><code>(</code></span><br></p>\n<p>&nbsp;<span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\"><code>&lt;div&gt;</code></span><br></p>\n<p>&nbsp;<span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>&lt;</code></span><span style=\"color: var(--sp-syntax-color-tag);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>h1</code></span><span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>&gt;Welcome to my app&lt;/</code></span><span style=\"color: var(--sp-syntax-color-tag);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>h1</code></span><span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>&gt;</code></span><br></p>\n<p>&nbsp;<span style=\"color: var(--sp-syntax-color-punctuation);background-color: rgb(255251221/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>&lt;</code></span><span style=\"color: var(--sp-syntax-color-definition);background-color: rgb(255251221/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>MyButton</code></span> <span style=\"color: var(--sp-syntax-color-punctuation);background-color: rgb(255251221/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>/&gt;</code></span><br></p>\n<p>&nbsp;<span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 17px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\"><code>&lt;/div&gt;</code></span><br></p>\n<p>&nbsp;<span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>);</code></span><br></p>\n<p><span style=\"color: rgb(35,39,47);background-color: rgb(255255255/var(--tw-bg-opacity));font-size: 1em;font-family: var(--sp-font-body);\"><code>}</code></span></p>\n<p style=\"margin-left:0px;\"><span style=\"color: rgb(35,39,47);font-size: 17px;font-family: Optimistic Text\", -apple-system, ui-sans-serif, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji;\">Notice that <code>&lt;MyButton /&gt;</code> starts with a capital letter. That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.</span></p>\n",
      "imageUrl": null,
      "userId": "64e06b2e4d8df41e177c8b1d",
      "createdAt": "2023-08-21T00:59:53.242Z",
      "updatedAt": "2023-08-21T00:59:53.242Z",
      "location": "India",
      "categoryId": "64e0e0558ba34588946fcc98"
  }
]