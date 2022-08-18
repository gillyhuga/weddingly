import React from "react";

type Props = {
    email: (e: React.ChangeEvent<HTMLInputElement>) => void;
    password: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
}

const LoginForm = ({ onSubmit, email, password }: Props) => {
    return (
        // <form onSubmit={onSubmit}>
        //     <div className="mt-6">
        //         <label className="block mb-0 text-md text-gray-600 dark:text-black">Email Address</label>
        //         <div className="relative block">
        //             <span className="absolute inset-y-0 left-0 -top-7 flex items-center pl-4">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        //                 </svg>
        //             </span>
        //             <input onChange={email} type="email" name="email" placeholder="example@example.com" className="block w-full py-3 pl-12 pr-3 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer" />
        //             <p className="mt-2 ml-5 invisible peer-invalid:visible text-pink-600 text-sm">
        //                 Please provide a valid email address.
        //             </p>
        //         </div>
        //     </div>
        //     <div>
        //         <label className="text-md text-gray-600 dark:text-black">Password</label>
        //         <div className="relative block">
        //             <span className="absolute inset-y-0 left-0 flex items-center pl-4">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        //                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        //                 </svg>
        //             </span>
        //             <input onChange={password} type="password" name="password" placeholder="Input Password" className="block w-full py-3 pl-12 pr-3 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
        //         </div>
        //     </div>

        //     <div className="flex mt-6">
        //         <button
        //         type="submit"
        //             className="btn mx-auto px-24 py-3 shadow-lg tracking-wide text-lg font-medium text-black transition-colors duration-200 border-0 transform bg-primary rounded-full hover:bg-primary-focus focus:outline-none focus:bg-primary-focus focus:ring focus:ring-blue-300 focus:ring-opacity-50">
        //             Log In
        //         </button>
        //     </div>

        // </form>
        <div className="card max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Input Email" className="input input-bordered" onChange={email} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Input Password" className="input input-bordered" onChange={password} />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;