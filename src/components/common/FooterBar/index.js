import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import logofooter from "@/public/images/logofooter.png";

const FooterBar = () => {
  return (
    <div className="hero w-sceen min-h-[calc(75vh-4rem)] bg-[url('../../public/images/Footer.png')] bg-white">
      <footer class="footer footer-center  ">
        <div class="grid grid-flow-col gap-4  "></div>
        <div>
          <div className="pt-28">
            <Image src={logofooter} width={500} height={500} />
          </div>
          <div class="grid grid-flow-col gap-4">
            <a className="rounded-full bg-secondary h-14 w-14 flex justify-center items-center">
              <FaInstagram className="text-3xl h-7 w-7 text-white " />
            </a>
            <a className="rounded-full bg-secondary h-14 w-14 flex justify-center items-center">
              <FaTwitter className="text-3xl h-7 w-7 text-white " />
            </a>
            <a className="rounded-full bg-secondary h-14 w-14 flex justify-center items-center">
              <FaYoutube className="text-3xl h-7 w-7 text-white " />
            </a>
            <a className="rounded-full bg-secondary h-14 w-14 flex justify-center items-center">
              <FaTiktok className="text-3xl h-7 w-7 text-white " />
            </a>
          </div>
        </div>
        <div className=" pb-12">
          <p>Weddingly Wedding Planner 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterBar;
