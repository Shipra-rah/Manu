import React, { useState, useEffect } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [download, setDownload] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Add scroll detection for background effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDownload = () => {
        setDownload(true);
        const link = document.createElement("a");
        link.href = "/ArunaYadav.pdf"; 
        link.download = "MyResume.pdf"; 
        link.click();
        setTimeout(() => {
            setDownload(false);
        }, 1000);
    };

    return (
        <nav
            className={`sticky top-0 left-0 w-full z-50 bg-black md:bg-transparent transition-all duration-500 ${scrolled ? " backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="flex justify-between items-center px-6 lg:px-12 py-1 text-white">
                {/* Logo */}
                <div className="text-2xl font-mono font-bold tracking-wide">
                    <span className="text-cyan-400">&lt;</span>Aruna
                    <span className="text-purple-400">/&gt;</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 font-mono text-sm jistify-center items-center">
                    {[
                        { href: "#home", label: "Home" },
                        { href: "#about", label: "About" },
                        { href: "#skills", label: "Skills" },
                        { href: "#projects", label: "Projects" },
                        { href: "#education", label: "Education" },
                        { href: "#certificates", label: "Certificates" },
                        { href: "#contact", label: "Contact" },
                    ].map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="relative group px-2 py-1"
                        >
                            <span className="transition-colors group-hover:text-cyan-400">
                                {item.label}
                            </span>
                            {/* underline effect */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <button
                        onClick={handleDownload}
                        className="ml-4 px-2 min-w-24 py-2 border-2 flex justify-around items-center border-cyan-400 text-cyan-400 font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                        {download ? (
                            <span className="animate-pulse">Downloading...</span>
                        ) : <>
                            <FaCloudDownloadAlt className="mr-2" /> Resume
                        </>}
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none p-1 text-cyan-400"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full md:bg-black/10 bg-black/50 backdrop-blur-md text-white shadow-lg">
                    <div className="flex flex-col space-y-4 p-6 font-mono text-sm">
                        {[
                            "Home",
                            "About",
                            "Skills",
                            "Projects",
                            "Education",
                            "Certificates",
                            "Contact",
                        ].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-cyan-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            className="px-4 py-2 border-2 border-cyan-400 text-cyan-400 font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
