import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import logo from '@/public/images/navbar-logo.png';
import { useRouter } from 'next/router';

const menu = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Planner',
        href: '/planner',
    },
    {
        name: 'Guest',
        href: '/guest',
    },
]

const NavigationBarLogin = () => {
    const router = useRouter()
    return (
        <div className="navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                passHref={true}
                            >
                                <li><a>{item.name}</a></li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <a className="btn btn-ghost ">
                    <Image
                        src={logo}
                        alt="Weddingly"
                        width={200}
                        height={50}
                    />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            passHref={true}
                        >
                            <li>
                                <a className={`before:block before:absolute before:-inset-0 before:w-2/5 before:h-0.5 before:translate-y-[34px] before:translate-x-6 relative inline-block z-0 ${router.route === item.href.toLowerCase() ? "before:bg-primary text-black" : "before:bg-base-300 text-gray-400"}`}>
                                    {item.name}
                                </a>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar mr-6">
                        <div className="w-10 bg-[url('../../public/images/avatar-image.jpg')] rounded-full"></div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/planner">
                                <a>Profile</a>
                            </Link>
                        </li>
                        <li>
                            <label htmlFor="my-modal" className="btn modal-button border-0 hover:bg-gray-200 text-sm normal-case font-normal justify-start min-h-[36px] h-[36px]">Logout</label>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavigationBarLogin;
