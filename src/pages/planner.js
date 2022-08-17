import React from "react";
import status from "@/public/images/planner-status.png";
import Image from "next/image";
import Link from "next/link";

const menu = [
  {
    id: 1,
    name: "To Start make wedding planner ‘Add Planner’",
    image: status,
  },
];

const Hero = () => {
  return (
    <div className="bg-white pt-3 pb-10 lg:pt-10">
      <div className=" container mx-auto  lg:left-10 p-7 lg:p-7">
        <div className="relative pl-6">
          <span className="inline-block w-40 lg:w-48 h-6 bg-primary "></span>
          <div className="absolute -top-6 -left-0">
            <h1 className="z-40 lg:text-4xl text-3xl font-bold">
              Your Planner
            </h1>
          </div>
        </div>
      </div>

      <div className="hero mx-auto">
        <div className="pt-4 lg:pt-8 pb-0 lg:pb-5">
          <div className="text-center max-w-screen-md">
            {menu.map((item) => (
              <div key={item.id}>
                <div className="pb-3">
                  <Image src={item.image} alt="" className="" />
                </div>
                <h1 className="py-6 text-2xl  lg:text-3xl font-bold mb-2">
                  {item.name}
                </h1>
              </div>
            ))}

            <Link href="/auth/planners/Main" passHref={true}>
              <button className="btn btn-primary rounded-full px-5 lg:px-8 p-2 lg:p-3 shadow-md  text-black">
                Add Planner
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
