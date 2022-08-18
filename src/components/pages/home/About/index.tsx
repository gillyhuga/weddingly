import React from "react";
import Image from "next/image";
import about from "@/public/images/home-about.png";

const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" grid-cols-12">
            <Image src={about} alt="" width={900} height={900} />
          </div>
          <div>
            <a className="rounded-full ... bg-primary font-bold px-7 p-2">
              ABOUT WEDDINGLY
            </a>
            <h1 className="text-3xl font-bold pt-6">
              The place to create the best wedding plan and make your dream
              wedding possible.
            </h1>
            <p className="py-6">
              The simple website to plan your perfect wedding and make it easy:
              create your plan wedding, manage your budget, and organize your
              guest list.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
