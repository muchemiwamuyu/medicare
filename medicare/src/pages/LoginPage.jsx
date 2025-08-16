import React, { useState } from "react";
import {motion, AnimatePresence } from "framer-motion";
import mainLogo from "/medicare.svg";
import Animated, { Animated2 } from "../components/Animated";

function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("Kindly wait while we process your dashboard");

    // Simulate async request
    setTimeout(() => {
      setMessage("Redirecting to dashboard...");
    }, 3000);
  };

  return (
    <div className=" min-h-screen relative py-8 flex flex-col items-center overflow-hidden">
      {/* Logo */}
      <img src={mainLogo} alt="Medicare Logo" className="w-48 mb-6" />

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Kindly Login With <br /> Your Credentials
        </h2>
        <p className="text-[#747272] mt-2">
          Please enter your credentials to log in to your account.
        </p>
      </div>

      {/* Form animation */}
      <AnimatePresence>
        {!isSubmitting && (
          <motion.form
            key="login-form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
            className="max-w-md w-full bg-white p-6 rounded-lg shadow-md space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Loader animation */}
      <AnimatePresence>
        {isSubmitting && (
          <motion.div
            key="loader"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }}
            exit={{ opacity: 0, y: -50 }}
            className="flex flex-col items-center mt-10"
          >
            <Animated2 />
            <motion.p
              key="message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
              className="text-gray-600 mt-4"
            >
              {message}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Icon */}
      <div className="absolute top-5 right-5 w-32 h-24">
        <Animated color="primary:#10002b" />
      </div>
    </div>
  );
}

export default LoginPage;
