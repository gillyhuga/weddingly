import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

function Todo() {
  return (
    <div className="h-[80vh]">
      <div className=" container mx-auto  lg:left-10 p-7 lg:p-7 z-10">
        <div className=" container mx-auto  lg:left-10 p-7 lg:p-7 z-10">
          <div className="relative pl-16 lg:pl-20">
            <span className="inline-block w-40 lg:w-48 h-6 bg-primary "></span>
            <div className=" absolute -top-6 -left-0">
              <div className="flex items-center ...">
                <div>
                  <Link href="/auth/planners/Budget" passHref={true}>
                    <BsArrowLeft className="lg:text-4xl text-3xl font-bold mr-4" />
                  </Link>
                </div>
                <div>
                  <h1 className="z-40 lg:text-4xl text-3xl font-bold">
                    Your Planner
                  </h1>
                </div>

                <div>
                  <Link href="/auth/planners/Budget" passHref={true}>
                    <button className="btn btn-primary ml-5 text-black rounded-full">
                      Add+
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" card grid grid-cols-5  gap-4 text-center pt-20 items-center">
          <div className="">
            <h1 className="underline underline-offset-8 decoration-secondary-content text-2xl font-bold">
              Wedding Date
            </h1>
          </div>
          <div className="">
            <h1 className="underline underline-offset-8 decoration-secondary-content text-2xl font-bold">
              Budget
            </h1>
          </div>
          <div className="">
            <h1 className="underline underline-offset-8 decoration-secondary-content text-2xl font-bold">
              Location
            </h1>
          </div>
          <div className="">
            <h1 className="underline underline-offset-8 decoration-secondary-content text-2xl font-bold">
              Detail
            </h1>
          </div>
          <div className="">
            <h1 className="underline underline-offset-8 decoration-secondary-content text-2xl font-bold">
              Delete
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 text-center pt-10 items-center">
          <div className="">
            <h1>08/15/2022</h1>
          </div>
          <div className="">
            <span className="flex justify-center ">
              Rp. <h1 className="text-center ml-1">50.000.000</h1>
            </span>
          </div>
          <div className="">
            <h1>Jakarta</h1>
          </div>
          <div className="">
            <Link href="/auth/planners/Budget" passHref={true}>
              <button className="bg-primary hover:primary text-black  py-2 px-4 rounded-full">
                Detail
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
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
          </div>
        </div>

        <div className=" text-center pt-52">
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
    </div>
  );
}

export default Todo;
