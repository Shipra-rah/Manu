import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaTerminal } from "react-icons/fa";
import manu from "../assets/Manu.png";
const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const roboticTexts = [
    "FULL-STACK DEVELOPER",
    "UI/UX DESIGNER",
    "PROBLEM SOLVER",
    "CODE ARCHITECT"
  ];

  // Typing effect
  useEffect(() => {
    const currentText = roboticTexts[currentIndex];
    let timeout;

    if (typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setTypedText("");
        setCurrentIndex((prev) => (prev + 1) % roboticTexts.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 text-white font-mono"
    >
      {/* Transparent futuristic background */}
      <div className="absolute inset-0 -z-10 backdrop-blur-xl bg-black/40" />
<br />
      {/* Left: Text & Typing */}
      <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center bg-black/40 border border-cyan-400/30 rounded-md px-4 py-2">
            <FaTerminal className="text-cyan-400 mr-2" size={16} />
            <span className="text-cyan-400 text-sm">system@ARUNA_YADAV:~$ portfolio</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl lg:text-3xl xl:text-4xl font-bold mb-6"
        >
          <span className="text-cyan-400">&gt;</span> HI, I'M{" "} <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
           ARUNA YADAV
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8 flex items-center justify-center lg:justify-start text-lg lg:text-2xl"
        >
          <span className="text-cyan-400 mr-2">&gt;</span>
          <span className="text-cyan-400">{typedText}</span>
          <motion.span
            className="ml-1"
            animate={{ opacity: showCursor ? 1 : 0 }}
          >
            |
          </motion.span>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
          <a
            href="#contact"
            className="px-6 py-3 bg-cyan-400 text-black font-bold border border-cyan-400 hover:bg-cyan-500 transition"
          >
            CONTACT ME
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition"
          >
            VIEW PROJECTS
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center lg:justify-start space-x-4">
          {[
            { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
            { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
            { icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/40 border border-cyan-400/40 hover:border-cyan-400 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={20} className="text-cyan-400" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Right: Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="flex-1 flex justify-center lg:justify-end"
      >
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-2 border-cyan-400/50 overflow-hidden rounded-full">
          <motion.img
            src={manu}
            alt="ArunaYadav"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/10 via-transparent to-purple-400/10" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
