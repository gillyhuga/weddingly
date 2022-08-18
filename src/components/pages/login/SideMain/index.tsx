import React from 'react';
import Link from 'next/link';

const SideMain = () => {
    return (
        <>
            <div className="hidden bg-cover lg:block lg:w-2/5 bg-[url('../../public/images/login-image.png')]">
                <div className="flex relative items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <Link href="/" passHref={true}>
                            <a className="text-4xl font-bold text-white -m-8">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                                </svg>
                                Hello!
                            </a>
                        </Link>
                        <p className="max-w-xl mt-6 text-gray-300 ml-6">First time visiting here? Let’s start your wedding plan with us.</p>
                        <Link href="/auth/registrasi" passHref={true}>
                            <button className="btn bg-white text-black rounded-full ml-6 mt-6 pb-7 pt-4 px-12 border-white hover:bg-slate-100 hover:border-white">Create Account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideMain;
