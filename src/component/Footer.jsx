import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaGithub, 
    FaLinkedin, 
    FaTwitter, 
    FaEnvelope, 
    FaHeart,
    FaArrowUp,
    FaCode
} from 'react-icons/fa';
import Manu_1 from "../assets/Manu_1.png";
import Manu_2 from "../assets/Manu_2.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: FaGithub,
            href: "https://github.com/ArunaYadav",
            label: "GitHub",
            color: "text-gray-300 hover:text-gray-100"
        },
        {
            icon: FaLinkedin,
            href: "https://linkedin.com/in/ArunaYadav",
            label: "LinkedIn",
            color: "text-blue-500 hover:text-blue-400"
        },
        {
            icon: FaTwitter,
            href: "https://twitter.com/ArunaYadav",
            label: "Twitter", 
            color: "text-sky-400 hover:text-sky-300"
        },
        {
            icon: FaEnvelope,
            href: "mailto:ArunaYadav@example.com",
            label: "Email",
            color: "text-rose-400 hover:text-rose-300"
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 backdrop-blur-lg border-t border-white/10">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Footer */}
                <div className="py-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        
                        {/* Left - Brand & Contact */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center gap-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center">
                                <div className="w-13 h-auto bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                                    <img src={Manu_2} alt="" className='rounded-full object-contain'/>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                                        ArunaYadav
                                    </h3>
                                    <p className="text-gray-400 text-sm">Full-Stack Developer</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <a 
                                    href="mailto:ArunaYadav@example.com" 
                                    className="flex items-center hover:text-cyan-400 transition-colors"
                                >
                                    <FaEnvelope className="mr-2 text-rose-400" />
                                   Arunayadav0118sldjic@gmail.com
                                </a>
                                <span className="hidden sm:block w-px h-4 bg-white/20"></span>
                                <span className="hidden sm:block">Lucknow, UP</span>
                            </div>
                        </motion.div>

                        {/* Center - Social Links */}
                        <motion.div
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-110`}
                                    aria-label={social.label}
                                >
                                    <social.icon className={`${social.color} text-lg`} />
                                </a>
                            ))}
                        </motion.div>

                        {/* Right - Status & Back to Top */}
                        <motion.div
                            className="flex items-center gap-6"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                                <span className="text-emerald-400 text-sm font-medium">Available</span>
                            </div>

                            <button
                                onClick={scrollToTop}
                                className="p-2.5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110"
                                aria-label="Back to top"
                            >
                                <FaArrowUp className="text-white text-sm" />
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-4 border-t border-white/10">
                    <motion.div
                        className="flex flex-col sm:flex-row justify-between items-center gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="flex items-center text-gray-400 text-sm">
                            <span>© {currentYear} Made with</span>
                            <FaHeart className="mx-1.5 text-pink-500 text-xs" />
                            <span>by ArunaYadav</span>
                        </div>

                        <div className="text-gray-400 text-sm">
                            Built with React & Tailwind CSS
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 opacity-70"></div>
        </footer>
    );
};

export default Footer;
