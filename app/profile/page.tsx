import Image from "next/image";
import { MdAttachEmail } from "react-icons/md";

import BlogCard from "../components/BlogCard";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getUserById } from "@/lib/helpers";

import { UserItemType } from "@/lib/types";
import { blogs } from "@/lib/utils";

const ProfilePage = async () => {
  const sessionData = await getServerSession(authOptions);
  const userData: UserItemType = await getUserById(sessionData?.user.id ?? "");

  return (
    <section className="flex flex-col w-full h-full">
      <div className="mx-auto my-5">
        <Image
          src={sessionData?.user.image ?? "/user.png"}
          alt="profile-pic"
          width={200}
          height={200}
          className="w-20"
        />
      </div>
      <div className="mx-auto my-2">
        <h1 className="text-4xl font-semibold bg-slate-100 px-4 py-2">
          {sessionData?.user.name}
        </h1>
      </div>
      <div className="mx-auto my-2 flex w-auto items-center gap-3">
        <span>
          <MdAttachEmail size={30} />
        </span>
        <p className="text-xl font-semibold bg-slate-100 p-3">
          {" "}
          {sessionData?.user.email}
        </p>
      </div>
      <hr className="p-3" />
      <div className="w-full h-full flex flex-col">
        <div className="mx-auto">
          <p className="text-center bg-slate-100 p-3 rounded-md">
            Blog Count : 10
          </p>
        </div>
        <div className="flex flex-wrap justify-center p-4 my-5">
          {blogs.map((blog) => (
            <BlogCard {...blog} key={blog.id} isProfile={true} />
          ))}
        </div>
      </div>
      {JSON.stringify(userData)}
    </section>
  );
};

export default ProfilePage;
