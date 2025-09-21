import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import avatar from '../assets/avatar.PNG'; // Ensure you have an avatar image in assets folder


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!"); // Replace with API call or email service
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left side - Avatar / Illustration */}
                <motion.div
                    className="flex justify-center items-center lg:justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-80 h-80 ">
                        <img
                            src={avatar}
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 animate-pulse rounded-full" />
                    </div>
                </motion.div>

                {/* Right side - Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 space-y-6 shadow-lg relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">
                        Contact Me
                    </h2>

                    {/* Name */}
                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="peer w-full min-h-[60px] py-5 px-4 rounded-sm bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                            placeholder="Your Name"
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-cyan-400 transition-all"
                        >
                            Your Name
                        </label>
                        <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-cyan-400 transition-colors" />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="peer w-full min-h-[60px] py-5 px-4 rounded-sm bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                            placeholder="Your Email"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-cyan-400 transition-all"
                        >
                            Your Email
                        </label>
                        <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-cyan-400 transition-colors" />
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="peer w-full min-h-[100px] py-5 px-4 rounded-sm bg-white/10 border border-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
                            placeholder="Your Message"
                        />
                        <label
                            htmlFor="message"
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-base peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-cyan-400 transition-all"
                        >
                            Your Message
                        </label>
                        <FaComment className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 peer-focus:text-cyan-400 transition-colors" />
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-lg transition-transform transform hover:scale-105"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
