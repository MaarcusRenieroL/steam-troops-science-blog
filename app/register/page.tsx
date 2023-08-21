"use client";

import { MdLogout } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Logo from "../components/Logo";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

export default function RegisterPage() {

    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit } = useForm();

    const signUpWithCreds = async (data: any) => {
        try {
            toast.loading("Registering....", { id: "signin"});
            await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                body: JSON.stringify({...data})
            })
            toast.success("Successfully Registered", { id: "signin"});
        } catch (error) {
            console.log(error);
            toast.error("Invalid Credentials", { id: "signin"});
        }
    }

    return (
        <section className="w-full h-full flex flex-col">
            <div className="mx-auto rounded-xl bg-slate-200 my-10 px-10 py-5">
                <div className="m-auto p-4 text-center">
                    <span className="font-extrabold text-xl">
                        Register Here </span><Logo />
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-2xl text-center text-slate-900" htmlFor="name">Name</label>
                    <div className="flex items-center justify-between bg-gray-100 my-4 px-6 py-4 rounded-xl text-gray-900 font-semibold">
                        <input type="name" className="bg-transparent p-1 border-none outline-none" {...register("name")}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-2xl text-center text-slate-900" htmlFor="email">Email</label>
                    <div className="flex items-center justify-between bg-gray-100 my-4 px-6 py-4 rounded-xl text-gray-900 font-semibold">
                        <input type="email" className="bg-transparent p-1 border-none outline-none" {...register("email")}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold text-2xl text-center text-slate-900" htmlFor="password">Password</label>
                    <div className="flex items-center justify-between bg-gray-100 my-4 px-6 py-4 rounded-xl text-gray-900 font-semibold">
                        <input type={showPassword ? "text" : "password"} className="bg-transparent p-1 border-none outline-none" {...register("password")}/>
                        {showPassword ? <FiEye onClick={() => setShowPassword(!showPassword)} size={30} className="ml-3 hover:bg-gray-200 cursor-pointer rounded-full p-2" /> : <FiEyeOff onClick={() => setShowPassword(!showPassword)} size={30} className="ml-3 hover:bg-gray-200 cursor-pointer rounded-full p-2" />}
                    </div>
                </div>
                <div>
                    <button onClick={handleSubmit(signUpWithCreds)} className="w-full px-6 py-3 flex items-center justify-center my-2 font-bold border-[1px] bg-violet-500 hover:bg-violet-600 text-white rounded-xl gap-3 ">
                        Register{" "}
                        <span>
                            <MdLogout size={20} />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}