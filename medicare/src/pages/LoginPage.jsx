import React from 'react'
import mainLogo from '/medicare.svg';
import Animated, { Animated2 } from '../components/Animated';
import { useState } from 'react';

function LoginPage() {

    const [customLoaders, setCustomLoaders] = useState(false);

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setCustomLoaders(true);
            setMessage('Kindly wait while we process your dashboard');
        }, 2000)}; // Simulate a network request

    return (
        <div className='h-screen bg-[#E9E4F0] relative'>

            {/* company logo */}
            <img src={mainLogo} alt="Medicare Logo" className='w-52' />

            {/* text container */}
            <div className='w-full absolute top-0 mt-10 p-5 '>
                <h2 className='text-5xl font-bold text-center text-black leading-15'>Kindly Login With <br /> Your Credentials</h2>
                <p className='text-[#747272] text-center'>Please enter your credentials to log in to your account.</p>
            </div>

            {/* custom form */}
            <div className=' mt-20'>
                {/* <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Custom Form</h2> */}
                <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Submit</button>
                </form>
                {/* <p className="text-center text-gray-600 mt-4">Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login here</a></p>
        <p className="text-center text-gray-600 mt-2">Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register here</a></p> */}
                {customLoaders && (
                    <>
                        <div className='w-full flex justify-center mx-auto mt-3'>
                            <Animated2 />
                        </div>
                        <div>
                            {message && <p className="text-center text-gray-600 mt-4">{message}</p>}
                        </div>
                    </>
                )}

            </div>

            {/* animated icon */}
            <div className='w-32 h-24 absolute top-5 rounded right-0'>
                <Animated color='primary:#656d4a' />
            </div>
        </div>
    )
}

export default LoginPage