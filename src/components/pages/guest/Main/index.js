import React from "react";
import Image from "next/image";

function Main() {
    return (
        <div className="w-[70%] bg-primary-content pt-6 px-11 h-screen">
            <div className="relative">
                <h1 className="relative text-2xl font-bold z-20">
                    Add Guest
                </h1>
                <span className="absolute w-[110px] h-4 bg-primary z-10 top-5 left-6"></span>
            </div>
            <div className="mt-12">
                <form>
                    <div>
                        <label className="block mb-0 text-md font-semibold text-gray-600 dark:text-black">Name</label>
                        <input type="text" name="name" id="name" placeholder="Guest Name" className="block w-full py-3 px-6 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                    </div>

                    <div className="mt-6">
                        <label className="text-md font-semibold text-gray-600 dark:text-black">Relation</label>
                            <input type="text" name="relation" id="relation" placeholder="Your relationship" className="block w-full py-3 px-6 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                    </div>

                    <div className="flex mt-10 items-center justify-end">
                        <button
                            className="btn px-11 shadow-lg tracking-wide text-base font-medium text-white transition-colors duration-200 border-0 transform bg-secondary rounded-full hover:bg-secondary-focus focus:outline-none focus:bg-secondary-focus focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Add Guest
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Main;
