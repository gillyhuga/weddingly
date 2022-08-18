import React from "react";

type Props = {
    name: (e: React.ChangeEvent<HTMLInputElement>) => void;
    email: (e: React.ChangeEvent<HTMLInputElement>) => void;
    password: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}

const RegisterForm = ({ onSubmit, name, email, password }: Props) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label className="block mb-2 text-md text-gray-600 dark:text-black">Name</label>
                <label className="relative block">
                    <span className="sr-only">Name</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <input onChange={name} placeholder="Your name" type="text" name="name" className="block w-full py-3 pl-12 pr-3 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"  />
                </label>
            </div>

            <div className="mt-6">
                <label className="block mb-0 text-md text-gray-600 dark:text-black">Email Address</label>
                <label className="relative block">
                    <span className="sr-only">Email Address</span>
                    <span className="absolute inset-y-0 left-0 -top-7 flex items-center pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <input onChange={email} type="email" name="email" id="email" placeholder="example@example.com" className="block w-full py-3 pl-12 pr-3 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer" />
                    <p className="mt-2 ml-5 invisible peer-invalid:visible text-pink-600 text-sm">
                        Please provide a valid email address.
                    </p>
                </label>
            </div>

            <div>
                <label className="text-md text-gray-600 dark:text-black">Password</label>
                <label className="relative block">
                    <span className="sr-only">Password</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                        </svg>
                    </span>
                    <input onChange={password} type="password" name="password" id="password" placeholder="Input Password" className="block w-full py-3 pl-12 pr-3 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                </label>
            </div>

            <div className="flex mt-6">
                <button
                    className="btn mx-auto px-16 py-3 shadow-lg tracking-wide text-lg font-medium text-black transition-colors duration-200 border-0 transform bg-primary rounded-full hover:bg-primary-focus focus:outline-none focus:bg-primary-focus focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Create Account
                </button>
            </div>

        </form>
    )
}

export default RegisterForm;