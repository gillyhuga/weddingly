import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/images/footer-logo.png";
import Link from "next/link";

const menu = [
  {
    name: "Instagram",
    icons: FaInstagram,
    href: "https://www.instagram.com/",
  },
  {
    name: "Twitter",
    icons: FaTwitter,
    href: "https://twitter.com/",
  },
  {
    name: "Youtube",
    icons: FaYoutube,
    href: "https://www.youtube.com/",
  },
  {
    name: "Tiktok",
    icons: FaTiktok,
    href: "https://www.tiktok.com/",
  },
];

const FooterBar = () => {
  return (
    <div className="hero w-sceen min-h-fit bg-[url('../../public/images/footer-bg.png')] bg-white">
      <footer className="footer footer-center  ">
        <div className="grid grid-flow-col gap-4  "></div>
        <div>
          <div className="pt-28">
            <Image src={logo} width={350} height={350} alt="" />
          </div>
          <div className="grid grid-flow-col gap-4">
            {menu.map((item) => {
              const Icon = item.icons;
              return (
                <Link href={item.href} key={item.name}>
                  <a className="rounded-full bg-secondary h-10 w-10 flex justify-center items-center">
                    <Icon className="text-3xl h-6 w-6 text-white " />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="text-medium pb-10">
          <p>Weddingly Wedding Planner 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterBar;
