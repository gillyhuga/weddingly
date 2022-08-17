import Image from "next/image"
export default function Profile() {
    return (
        <div className="flex justify-center h-screen bg-primary-content">
            <div className="hidden lg:block lg:w-2/5 bg-white">
                <div className="flex flex-col items-center h-full w-full px-20 pt-20 ">
                    <div className="avatar">
                        <div className="w-32 rounded-full">
                            <Image src="https://placeimg.com/192/192/people" alt="" />
                        </div>
                    </div>
                    <label className="block pt-6">
                        <input type="file" accept="image/png, image/jpg, image/jpeg"
                            className="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-black hover:file:bg-primary-focus" />
                    </label>
                    <h1 className="pt-6 text-4xl font-medium text-black">Emma Julie Suh</h1>
                    <h1 className="pt-6 text-3xl font-thin text-black">emmajuliesuh@gmail.com</h1>
                </div>

            </div>

            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 ">
                <div className="flex-1">
                    <div className="relative pl-6">
                        <span className=" inline-block w-44 h-6 bg-primary "></span>
                        <div className="absolute -top-6 -left-2">
                            <h1 className="text-4xl font-bold text-black">Your Profile</h1>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="block sm:hidden">

                            <div className=" flex flex-col items-center xl:mx-8 ">
                                <div className=" items-center h-full px-20">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <Image src="https://placeimg.com/192/192/people" alt="" />
                                        </div>
                                    </div>

                                </div>
                                <label className="block pt-6">
                                    <input type="file" accept="image/png, image/jpg, image/jpeg"
                                        className="block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-black hover:file:bg-primary-focus" />
                                </label>
                            </div>

                        </div>
                        <form>
                            <div>
                                <label className="block mb-2 text-md text-gray-600 dark:text-black">Name</label>
                                <label className="relative block">
                                    <span className="sr-only">Name</span>
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    <input type="text" name="name" placeholder="Your Name" value="Emma Julie Suh" className="block w-full py-3 pl-12 pr-3 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
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
                                    <input type="email" name="email" placeholder="example@example.com" value="emmajuliesuh@gmail.com" className="block w-full py-3 pl-12 pr-3 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer" />
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
                                    <input type="password" name="password" placeholder="Input Password" value="Johnny Sheeran" className="block w-full py-3 pl-12 pr-3 mt-2 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                                </label>
                            </div>

                            <div className="mt-6">
                                <label className="block mb-2 text-md text-gray-600 dark:text-black">Partner Name</label>
                                <label className="relative block">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    <input type="text" name="partner-name" placeholder="Partner Name" value="Johnny Sheeran" className="block w-full py-3 pl-12 pr-3 text-gray-700 placeholder-gray-400 bg-white shadow rounded-full dark:bg-white dark:text-black dark:border-gray-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" />
                                </label>
                            </div>
                            <div className="flex flex-row-reverse mt-6">
                                <button
                                    className="btn px-6 shadow-lg capitalize tracking-wide text-lg font-medium text-white transition-colors duration-200 border-0 transform bg-secondary rounded-full hover:bg-secondary-focus focus:outline-none focus:bg-secondary focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Edit Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}