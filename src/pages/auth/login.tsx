import SideMain from '@/components/pages/login/SideMain';
import LoginForm from '@/components/pages/login/LoginForm';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from 'next/link';
import { getToken } from '@/lib/fetchApi';
import { setToken } from 'src/store/auth';
import toast, { Toaster } from "react-hot-toast";
import router from 'next/router';

export default function Login() {
    const [authForm, setAuthForm] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();


    const handleFormChange = (e: any) => {
        setAuthForm({
            ...authForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        getToken(authForm.email, authForm.password).then((data) => {
            dispatch(setToken(data))
            localStorage.setItem("token", data)
            toast.success('Login Succesful!')
            router.push('/planner')
        })
    }

    return (
        <div className="bg-white dark:bg-white">
            <div className="flex justify-center h-screen">
                <SideMain />
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-secondary dark:text-secondary">Log In Weddingly</h2>
                            <p className="mt-3 text-gray-300 dark:text-slate-800">Log in to access your account</p>
                        </div>
                        <div className="mt-8">
                            <LoginForm
                                email={handleFormChange}
                                password={handleFormChange}
                                onSubmit={handleSubmit}
                            />
                            <Link href="/auth/registrasi" passHref={true}>
                                <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
