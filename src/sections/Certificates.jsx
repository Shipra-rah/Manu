import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCheck,
  FaPython,
} from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certificates = [
     {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "SPI Lucknow",
      date: "Internship",
      credentialId: "Grade: --",
      icon: FaPython,
      color: "from-yellow-400 to-orange-500",
      link: "https://nielit.gov.in/gorakhpur",
    },
    {
      id: 2,
      title: "Python Developer Certificate",
      issuer: "NIELIT Gorakhpur",
      date: "Summer Training",
      credentialId: "Grade: A++",
      icon: FaPython,
      color: "from-yellow-400 to-orange-500",
      link: "https://nielit.gov.in/gorakhpur",
    },
    {
      id: 3,
      title: "Advance Excel",
      issuer: "Balaji Academy",
      date: "June 2025",
      credentialId: "Grade: A+",
      icon: RiFileExcel2Fill ,
      color: "from-green-500 to-teal-400",
      link: "#", // Replace with actual link if you have one
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-20"
    >
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isVisible
              ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
              : {}
          }
        >
          <div className="inline-flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
              <FaCertificate className="text-white text-lg" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Certifications
            </h2>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isVisible
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: index * 0.1 },
                    }
                  : {}
              }
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${certificate.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <certificate.icon className="text-white text-lg" />
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex items-center px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <FaCheck className="text-green-400 mr-1" size={10} />
                    <span className="text-green-400 text-xs font-medium">
                      Verified
                    </span>
                  </div>
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                        size={14}
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-tight">
                  {certificate.title}
                </h3>
                <p className="text-purple-400 font-semibold text-sm mb-3">
                  {certificate.issuer}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-gray-400 text-sm">
                    {certificate.date}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">
                    {certificate.credentialId}
                  </span>
                </div>
              </div>

              {/* Glow effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${certificate.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats (Dynamic) */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isVisible
              ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              : {}
          }
        >
          <div className="flex items-center space-x-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-3">
            <div className="text-center">
              <div className="text-xl font-bold text-cyan-400">
                {certificates.length}
              </div>
              <div className="text-gray-400 text-xs">Certified</div>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">100%</div>
              <div className="text-gray-400 text-xs">Verified</div>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">Active</div>
              <div className="text-gray-400 text-xs">Status</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
