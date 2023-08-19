import { IconType } from "react-icons";
import Logo from "./Logo";

import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-gray-100 w-full h-fit">
      <hr className="p-3" />
      <div className="flex flex-col p-20 xs:gap-8 md:gap-6">
        <div className="flex md:flex-row xs:flex-col md:justify-between xs:justify-start items-center space-y-0 xs:space-y-5">
          <div>
            <Logo />
          </div>
          <p className="md:text-xl xs:text-md">
            <span>{new Date().getFullYear()}</span>
            <span>© Copyright</span>{" "}
            <span className="font-bold">Steam Troops</span>
          </p>

          <div className="flex p-2 gap-6">
            <FaInstagram size={25} className="cursor-pointer" />
            <FaLinkedin size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
}
