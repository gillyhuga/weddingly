import Link from "next/link";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";


type Props = {
    date: string;
    total_budget: string;
    location: string;

}

function List({ date, total_budget, location }: Props) {
    return (
        <tr>
            <td>{date}</td>
            <td>{total_budget}</td>
            <td>{location}</td>
            <td>
                <Link href="/planner/detail" passHref={true}>
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
    );
}

export default List;
