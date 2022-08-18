import Link from "next/link";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

function ListPlanner() {
    return (
        <div className="h-[80vh] pt-10">
            <div className="flex flex-row pr-14">
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
                    <Link href="/planner/add" passHref={true}>
                        <a className="btn btn-primary ml-5 text-black rounded-full">
                            Add+
                        </a>
                    </Link>
                </div>

            </div>
            <div className="overflow-x-auto py-14 px-14 ">
                <table className="table w-full ">
                    <thead >
                        <tr className="underline underline-offset-8 decoration-secondary-content text-2xl font-bold ">
                            <th></th>
                            <th>Wedding Date</th>
                            <th>Budget</th>
                            <th>Location</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <th>1</th>
                            <td>08/15/2022</td>
                            <td>Rp. 50.000.000</td>
                            <td>Jakarta</td>
                            <td>
                                <Link href="/auth/planners/Budget" passHref={true}>
                                    <button className="bg-primary hover:primary text-black  py-2 px-4 rounded-full">
                                        Detail
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <div>
                                    <label htmlFor="my-modals" className="">
                                        <MdDeleteOutline className="text-center text-2xl" />
                                    </label>
                                    <input type="checkbox" id="my-modals" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box ">
                                            <h3 className="font-bold text-lg">Delete Planner</h3>
                                            <p className="py-6">Are you sure?</p>
                                            <div className="modal-action flex justify-center gap-2">
                                                <label
                                                    htmlFor="my-modals"
                                                    className="btn btn-error rounded-full text-white tracking-wider px-10"
                                                >
                                                    Delete
                                                </label>
                                                <label
                                                    htmlFor="my-modals"
                                                    className="btn btn-success rounded-full text-white tracking-wider px-10"
                                                >
                                                    Cancel
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className=" text-center">
                <label
                    htmlFor="my-modalss"
                    className="btn px-10  shadow-lg capitalize tracking-wide text-lg font-medium text-white transition-colors duration-200 border-0 transform bg-secondary rounded-full hover:bg-secondary-focus focus:outline-none focus:bg-secondary focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                    Delete All
                </label>
                <input type="checkbox" id="my-modalss" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box ">
                        <h3 className="font-bold text-lg">Delete All Planner</h3>
                        <p className="py-6">Are you sure?</p>
                        <div className="modal-action flex justify-center gap-2">
                            <label
                                htmlFor="my-modalss"
                                className="btn btn-error rounded-full text-white tracking-wider px-10"
                            >
                                Delete
                            </label>
                            <label
                                htmlFor="my-modalss"
                                className="btn btn-success rounded-full text-white tracking-wider px-10"
                            >
                                Cancel
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ListPlanner;
