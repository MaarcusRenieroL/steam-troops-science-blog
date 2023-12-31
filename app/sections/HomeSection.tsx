import { getAllBlogs } from "@/lib/helpers";

import BlogCard from "../components/BlogCard";

import Image from "next/image";
import Link from "next/link";
import { BlogItemType } from "@/lib/types";

const HomeSection = async () => {
  
  const blogs = await getAllBlogs();

  return (
    <section className="w-full my-4">
      <div className="w-full flex xs:flex-col md:flex-row justify-center items-center">
        <div className="p-8 w-3/4 flex flex-col gap-3">
          <p className="tracking-wide lg:text-6xl md:text-3xl sm:text-2xl font-semibold md:w-2/4 xs:w-4/4 text-start text-gray-700">
            Learn from the best and become the best.
          </p>
          <p className="tracking-wider md:text-2xl xs:text-md font-semibold md:w-3/4 xs:w-full text-start text-gray-900">
            Learn it by doing it for free with practical step by step guide
          </p>
        </div>
        <div className="md:w-2/4 xs:w-3/4 md:mx-2 xs:my-2">
          <Image
            className="w-full rounded-2xl drop-shadow-2xl"
            alt="Carousel Image"
            width={300}
            height={200}
            src={
        "/lab.jpg"
            }
          />
        </div>
      </div>
      <hr className="p-3 my-4" />
      <div className="flex flex-col justify-center items-center">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Recent Articles</h2>
        </div>
        <div className="flex w-full flex-wrap justify-center">
          {blogs.map((blog: BlogItemType) => (
            <BlogCard {...blog} key={blog.id} />
          ))}
        </div>
        <div className="w-full p-4 text-center">
          <Link href={"/blogs"}>
            <button className="mx-auto mt-auto rounded-lg border-[1px] p-3 hover:bg-violet-600 hover:text-violet-100 duration-500">
              Explore more blogs
            </button>
          </Link>
        </div>
        <hr className="p-3 my-4" />
      </div>
    </section>
  );
};

export default HomeSection;
