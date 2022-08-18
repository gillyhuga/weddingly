import RegisterForm from '@/components/pages/registrasi/RegisterForm';
import SideMain from '@/components/pages/registrasi/SideMain';
import { getAccount } from '@/lib/fetchApi';
import Link from 'next/link';
import router from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Register() {

    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleFormChange = (e: any) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        getAccount(registerForm.name, registerForm.email, registerForm.password).then((data) => {
            toast.success('Register Succesful!')
            router.push('/auth/login')
        })
    }

    return (
        <div className="bg-white dark:bg-white">
            <div className="flex justify-center h-screen">
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-secondary dark:text-secondary">Create Weddingly Account</h2>

                            <p className="mt-3 text-gray-300 dark:text-slate-800">Create your account to your wedding plan</p>
                        </div>

                        <div className="mt-8">
                            <RegisterForm
                                name={handleFormChange}
                                email={handleFormChange}
                                password={handleFormChange}
                                onSubmit={handleSubmit}
                            />

                            <Link href="/auth/login" passHref={true}>
                                <p className="mt-6 text-sm text-center text-gray-400">You have an account? <a href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Log In</a>.</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <SideMain />
            </div>
        </div>
    )
}
