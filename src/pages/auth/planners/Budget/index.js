import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/Bs";
import beauty from "@/public/images/budget-1.png";
import music from "@/public/images/budget-2.png";
import catering from "@/public/images/budget-3.png";
import flowers from "@/public/images/budget-4.png";
import ceremony from "@/public/images/budget-5.png";
import transportation from "@/public/images/budget-6.png";
import invitation from "@/public/images/budget-7.png";
import jewelry from "@/public/images/budget-8.png";
import venue from "@/public/images/budget-9.png";
import attire from "@/public/images/budget-10.png";
import photo from "@/public/images/budget-11.png";
import souvernir from "@/public/images/budget-12.png";
import Image from "next/image";
import { FaRegStickyNote } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TbTag } from "react-icons/tb";
import Link from "next/link";

const Budget = () => {
  const [name, Name] = useState("Beauty Salon");
  const [money, setMoney] = useState(2000000);
  const [note, setNote] = useState("Unpaid");

  const menu = [
    {
      id: 1,
      name: "Health & Beauty",
      image: beauty,
      estimasi: " Estimasi : ",
      budget: 2000000,
    },
    {
      id: 2,
      name: "Music & Show",
      image: music,
      estimasi: " Estimasi : ",
      budget: 5000000,
    },
    {
      id: 3,
      name: "Catering",
      image: catering,
      estimasi: " Estimasi : ",
      budget: 3000000,
    },
    {
      id: 4,
      name: "Flowers & Decor",
      image: flowers,
      estimasi: " Estimasi : ",
      budget: 5000000,
    },
    {
      id: 5,
      name: "Ceremony",
      image: ceremony,
      estimasi: " Estimasi : ",
      budget: 2000000,
    },
    {
      id: 6,
      name: "Transportation",
      image: transportation,
      estimasi: " Estimasi : ",
      budget: 1000000,
    },
    {
      id: 7,
      name: "Invitation Cards",
      image: invitation,
      estimasi: " Estimasi : ",
      budget: 2000000,
    },
    {
      id: 8,
      name: "Jewelry",
      image: jewelry,
      estimasi: " Estimasi : ",
      budget: 4000000,
    },
    {
      id: 9,
      name: "Venue",
      image: venue,
      estimasi: " Estimasi : ",
      budget: 13000000,
    },
    {
      id: 10,
      name: "Attire & Accessories",
      image: attire,
      estimasi: " Estimasi : ",
      budget: 8000000,
    },
    {
      id: 11,
      name: "Photo & Video",
      image: photo,
      estimasi: " Estimasi : ",
      budget: 2000000,
    },
    {
      id: 12,
      name: "Souvernir",
      image: souvernir,
      estimasi: " Estimasi : ",
      budget: 3000000,
    },
  ];

  const DataWedding = () => {
    return (
      <>
        {menu.map((item) => (
          <div key={item.id}>
            <label htmlFor="my-modal-3" className="">
              <div className="">
                <div className="border py-6 rounded-lg ">
                  <div className="flex ml-5 items-center">
                    <div className="mr-2">
                      <Image src={item.image} width={70} height={70} alt="" />
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">{item.name}</h1>
                      <p>
                        {item.estimasi}Rp.
                        {item.budget}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>

                <form>
                  <div>
                    <div className="mt-6">
                      <label className="block mb-0 text-md text-gray-600 dark:text-black">
                        Name
                      </label>
                      <label className="relative block">
                        <span className="sr-only">Name</span>
                        <span className="absolute inset-y-0 left-0 -top-7 flex items-center pl-4">
                          <MdOutlineDriveFileRenameOutline className="h-5 w-5 text-slate-500" />
                        </span>

                        <input
                          type="name"
                          name="name"
                          placeholder={name}
                          className="block w-full py-3 pl-12 pr-3 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer"
                        />
                        <p className="mt-2 ml-5 invisible peer-invalid:visible text-pink-600 text-sm">
                          Please provide a valid email address.
                        </p>
                      </label>
                    </div>

                    <div className="mt-6">
                      <label className="block mb-0 text-md text-gray-600 dark:text-black">
                        Estimasi Amount
                      </label>
                      <label className="relative block">
                        <span className="sr-only">Estimasi Amount</span>
                        <span className="absolute inset-y-0 left-0 -top-7 flex items-center pl-4">
                          <TbTag className="h-5 w-5 text-slate-500" />
                        </span>

                        <input
                          type="number"
                          name="number"
                          placeholder={money}
                          className="block w-full py-3 pl-12 pr-3 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer"
                        />
                        <p className="mt-2 ml-5 invisible peer-invalid:visible text-pink-600 text-sm">
                          Please provide a valid email address.
                        </p>
                      </label>
                    </div>

                    <div>
                      <label className="text-md text-gray-600 dark:text-black">
                        Location
                      </label>
                      <label className="relative block">
                        <span className="sr-only">Location</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                          <FaRegStickyNote className="h-5 w-5 text-slate-500" />
                        </span>
                        <input
                          type="name"
                          name="name"
                          placeholder={note}
                          className="block w-full py-3 pl-12 pr-3 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        />
                      </label>
                    </div>

                    <div className="flex flex-row-reverse mt-8">
                      <Link href="/auth/planners/Budget" passHref={true}>
                        <button className="btn px-10  shadow-lg capitalize tracking-wide text-lg font-medium text-white transition-colors duration-200 border-0 transform bg-secondary rounded-full hover:bg-secondary-focus focus:outline-none focus:bg-secondary focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                          Next
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="pb-20 pt-10">
      <div className=" container mx-auto  lg:left-10 p-7 lg:p-7 z-10 ">
        <div className="relative pl-16 lg:pl-20">
          <span className="inline-block w-40 lg:w-48 h-6 bg-primary "></span>
          <div className=" absolute -top-6 -left-0">
            <div className="flex items-center ...">
              <div>
                <Link href="/auth/planners/Main" passHref={true}>
                  <BsArrowLeft className="lg:text-4xl text-3xl font-bold mr-4" />
                </Link>
              </div>
              <div>
                <h1 className="z-40 lg:text-4xl text-3xl font-bold">
                  Your Planner
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-4xl font-bold underline decoration-secondary underline-offset-8 ... ">
            Budget
          </p>
          <h1 className="text-4xl pt-7">Rp. 50.000.000</h1>
        </div>

        <div className="p-3 card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  pt-10">
          <DataWedding />
        </div>

        <div className="text-center mt-8">
          <Link href="/auth/planners/Todo" passHref={true}>
            <button className="btn px-10  shadow-lg capitalize tracking-wide text-lg font-medium text-white transition-colors duration-200 border-0 transform bg-secondary rounded-full hover:bg-secondary-focus focus:outline-none focus:bg-secondary focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Budget;
