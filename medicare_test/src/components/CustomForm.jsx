import React, { useState } from 'react'
import Animated from './Animated';

function CustomForm() {
    const [customLoader, setCustomLoader] = useState(false);

    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setCustomLoader(true);
            setMessage('Kindly wait while we process your dashboard');
        }, 2000); // Simulate a network request

    }

  return (
    <div>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Custom Form</h2>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Enter your password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Submit</button>
        </form>
        {/* <p className="text-center text-gray-600 mt-4">Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login here</a></p>
        <p className="text-center text-gray-600 mt-2">Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register here</a></p> */}
        {customLoader && (
            <>
            <div className='w-full flex justify-center mx-auto mt-3'>
                <Animated />
            </div>
            <div>
                {message && <p className="text-center text-gray-600 mt-4">{message}</p>}
            </div>
            </>
        )}
    </div>
  )
}

export default CustomForm