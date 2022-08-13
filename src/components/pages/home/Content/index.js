import React from "react";
import write from "@/public/images/home-content-satu.png";
import money from "@/public/images/home-content-dua.png";
import users from "@/public/images/home-content-tiga.png";
import bgcontent from "@/public/images/home-bg-one.png";
import bgwhy from "@/public/images/home-bg-two.png";

import Image from "next/image";

const menu = [
  {
    id: 1,
    name: "Create your Plan Wedding",
    image: write,
    width: 100,
  },
  {
    id: 2,
    name: "Manage your Budget",
    image: money,
  },
  {
    id: 3,
    name: "Organize your Guest List",
    image: users,
  },
];

const Content = () => {
  return (
    <div className="bg-white ">
      <div className="container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 lg:p-36 relative md:bottom-28 lg:bottom-56">
          {menu.map((item) => (
            <div
              key={item.id}
              className="flex justify-center rounded-xl p-6 bg-base-100 z-10"
            >
              <div className="text-center p-5">
                <Image src={item.image} alt="" width={100} height={100} />
                <h1 className="text-2xl mt-5">{item.name}</h1>
              </div>
            </div>
          ))}
          <div className="absolute bottom-0 top-0 p-5 lg:p-11 z-0">
            <Image src={bgcontent} alt="" />
          </div>
          <div className="hero container mx-auto absolute top-3/4 lg:top-full  p-5 lg:p-11 z-0">
            <Image src={bgwhy} width={170} height={400} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
