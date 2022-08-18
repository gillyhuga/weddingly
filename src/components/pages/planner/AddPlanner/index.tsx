import React, { useState } from "react";
import { BsCalendarRange } from "react-icons/bs";
import { TbTag } from "react-icons/tb";
import { TbLocation } from "react-icons/tb";
import BannerImage from "@/public/images/planner-main.png";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BgPlanner from "@/public/images/addplanner-bg.png";

const AddPlanner = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="pt-10">
      <div className="absolute -right-0">
        <Image src={BgPlanner} height={1200} width={900} alt="" />
      </div>
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

      <div>
        <div className=" hero mx-auto ">
          <div className="hero-content grid grid-cols-1 md:grid-cols-2">
            <div className=" grid-cols-12">
              <Image src={BannerImage} alt="" />
            </div>
            <div className="grid-cols-12">
              <div className="flex justify-center align-middle">
                <div className="mt-8">
                  <form>
                    <div>
                      <div>
                        <label className="block mb-2 text-md text-gray-600 dark:text-black">
                          Wedding Date
                        </label>
                        <label className="relative block">
                          <span className="sr-only">Wedding Date</span>
                          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                            <div className="flex">
                              <BsCalendarRange className="h-5 w-5 text-slate-500" />
                              <DatePicker
                                className="pl-4"
                                selected={selectedDate}
                                placeholderText="08/15/2022"
                                onChange={(date) => setSelectedDate(date)}
                              />
                            </div>
                          </span>

                          <input className="block lg:w-96 md:w-80 w-full py-3 pl-12 pr-3 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"></input>
                        </label>
                      </div>

                      <div className="mt-6">
                        <label className="block mb-0 text-md text-gray-600 dark:text-black">
                          Total Budget
                        </label>
                        <label className="relative block">
                          <span className="sr-only">Total Budget</span>
                          <span className="absolute inset-y-0 left-0 -top-7 flex items-center pl-4">
                            <TbTag className="h-5 w-5 text-slate-500" />
                          </span>

                          <input
                            type="number"
                            name="number"
                            placeholder="50000000"
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
                            <TbLocation className="h-5 w-5 text-slate-500" />
                          </span>
                          <input
                            type="name"
                            name="name"
                            placeholder="Jakarta"
                            className="block w-full py-3 pl-12 pr-3 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                          />
                        </label>
                      </div>

                      <div className="flex flex-row-reverse mt-8">
                        <button className="btn px-10  shadow-lg capitalize tracking-wide text-lg font-medium text-white transition-colors duration-200 border-0 transform bg-secondary rounded-full hover:bg-secondary-focus focus:outline-none focus:bg-secondary focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                          Next
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlanner;
