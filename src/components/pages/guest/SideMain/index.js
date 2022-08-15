import React from "react";
import Link from "next/link";

function SideMain() {
    return (
        <div className="w-full h-screen pt-6 px-11">
            <div className="flex justify-between">
                <div className="relative">
                    <h1 className="relative text-2xl font-bold z-20">
                        Guest List
                    </h1>
                    <span className="absolute w-24 h-4 bg-primary z-10 top-5 left-6"></span>
                </div>
                <p className="font-bold text-lg">Total: 0</p>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="table w-full text-center">
                    <thead className="">
                        <tr className="text-secondary tracking-wide">
                            <th className="bg-white">Name</th>
                            <th className="bg-white">Relation</th>
                            <th className="bg-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="bg-white">Cy Ganderton</td>
                            <td className="bg-white">Quality Control Specialist</td>
                            <td className="flex justify-around items-center bg-white">
                                <Link href="/">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </a>
                                </Link>
                                <label htmlFor="my-modal" className="btn modal-button border-0 hover:bg-transparent text-gray-700 normal-case font-normal">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="bg-white">Cy Ganderton</td>
                            <td className="bg-white">Quality Control Specialist</td>
                            <td className="flex justify-around items-center bg-white">
                                <Link href="/">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </a>
                                </Link>
                                <label htmlFor="my-modal" className="btn modal-button border-0 hover:bg-transparent text-gray-700 normal-case font-normal">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="bg-white">Cy Ganderton</td>
                            <td className="bg-white">Quality Control Specialist</td>
                            <td className="flex justify-around items-center bg-white">
                                <Link href="/">
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </a>
                                </Link>
                                <label htmlFor="my-modal" className="btn modal-button border-0 hover:bg-transparent text-gray-700 normal-case font-normal">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex mt-10 items-center justify-end">
                    <button
                        className="btn px-9 shadow-lg tracking-wide text-base font-medium text-white transition-colors duration-200 border-0 transform bg-secondary rounded-full hover:bg-secondary-focus focus:outline-none focus:bg-secondary-focus focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Delete All
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SideMain;
