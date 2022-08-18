import React from "react";
import Image from "next/image";
import ImagePlanner from "@/public/images/planner-status.png";
import ImageLogo from "@/public/images/footer-logo.png";
import Link from "next/link";

const AuthPlanner = () => {
    return (
        <>
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
                            <div >
                                <div className="pb-3">
                                    <Image src={ImagePlanner} alt="" className="" />
                                </div>
                                <h1 className="py-6 text-2xl  lg:text-3xl font-bold mb-2">
                                    To Start make wedding planner ‘Add Planner’
                                </h1>
                            </div>
                            <label htmlFor="my-modal-3" className="btn btn-primary rounded-full px-5 lg:px-8 p-2 lg:p-3 shadow-md  text-black modal-button">Add Planner</label>
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <div>
                                        <Image src={ImageLogo} width={300} height={300} alt="" />
                                    </div>
                                    <h1 className="text-3xl font-bold">Register now, it&apos;s free!</h1>
                                    <p className="py-4">This feautures available only for registered user. Please, log in or register to get full access to all our tools. It&apos;s free!</p>
                                    <Link href={"/auth/register"}>
                                        <a
                                            className="btn mx-auto px-24 py-3 shadow-lg tracking-wide text-lg text-white font-medium transition-colors duration-200 border-0 transform bg-secondary rounded-full hover:bg-primary-focus focus:outline-none focus:bg-primary-focus focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Register Now
                                        </a>
                                    </Link>
                                    <div className="py-4">
                                        <Link href={"/auth/login"} passHref >
                                            <a className="text-xl text-secondary font-bold">Already have an account?</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPlanner;
