import Link from "next/link";
import React, { useState, useEffect } from "react";
import AddPlanner from "@/components/pages/planner/AddPlanner";
import { getAllPlan } from "@/lib/fetchApi";
import { setPlan } from "src/store/plan";
import { useDispatch, useSelector } from "react-redux";
import List from "../List";
import { RootState } from "src/store";


type Props = {
    key: number;
    date: string;
    total_budget: string;
    location: string;

}

function ListPlanner() {
    const dispatch = useDispatch();
    const { plan } = useSelector((state: RootState) => state.plan);

    useEffect(() => {
        getAllPlan().then((response) => {
            dispatch(setPlan(response.data))
        })
    }, [dispatch])

    console.log(plan)
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
                            <th>Wedding Date</th>
                            <th>Budget</th>
                            <th>Location</th>
                            <th>Detail</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            plan.length ? plan.map((item: any) =>
                                <List key={0} date={item.date} total_budget={item.total_budget} location={item.location} />
                            ) :
                                null
                        }
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
