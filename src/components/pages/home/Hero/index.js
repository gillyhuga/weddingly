import React from 'react';

const Hero = () => {
    return (
        <>
            <div className="hero min-h-[calc(100vh-4rem)] bg-[url('../../public/images/hero-image.png')]" >
                <div className="p-20 min-w-full">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Make your dream</h1>
                        <h1 className="text-5xl font-bold">wedding possible</h1>
                        <p className="py-6">Create an organized & easy wedding planning here.</p>
                        <a className="btn btn-primary">Plan Your Wedding</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
