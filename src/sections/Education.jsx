import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const educationData = [
  {
    id: 1,
    collegeName: "MST PATIRAJI DEVI GIC BRAHMPUR GORAKHPUR",
    degree: "High School (10th)",
    logo: "🎓", // Replace with actual logo URL if available
    marks: "Completed in June 2020 with 79.00%",
  },
  {
    id: 2,
    collegeName: "SLDJ INTERCOLLAGE BRAHMPUR GORAKHPUR",
    degree: "Intermediate (12th)",
    logo: "🏫", // Replace with actual logo URL if available
    marks: "Completed in June 2022 with 74%",
  },
  {
    id: 3,
    collegeName: "Government Girls Polytechnic Gorakhpur",
    degree: "Diploma in Information Technology",
    logo: "🏛️", // Replace with actual logo URL if available
    marks: "Completed in June 2025 with 73%",
  },
];


    return (
        <section id="education" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-20">
            {/* Background with transparency */}
            <div className="absolute inset-0 " />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16  rounded-full mb-6">
                        <FaGraduationCap className="text-white text-2xl" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Education
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Academic foundation that shaped my technical expertise
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6 rounded-full" />
                </div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {educationData.map((edu) => (
                        <div
                            key={edu.id}
                            className={`group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 ${hoveredCard === edu.id ? 'shadow-2xl shadow-cyan-500/20' : ''
                                }`}
                            onMouseEnter={() => setHoveredCard(edu.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Logo */}
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-full flex items-center justify-center border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300">
                                    <span className="text-4xl">{edu.logo}</span>
                                </div>
                            </div>

                            {/* College Name */}
                            <h3 className="text-2xl font-bold text-white text-center mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                                {edu.collegeName}
                            </h3>

                            {/* Degree Name */}
                            <h4 className="text-lg font-semibold text-purple-400 text-center mb-6 leading-tight">
                                {edu.degree}
                            </h4>

                            {/* Marks Paragraph */}
                            <p className="text-gray-300 text-center leading-relaxed">
                                {edu.marks}
                            </p>

                            {/* Bottom Accent Line */}
                            <div className="w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6 rounded-full group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>

                {/* Simple Stats */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center space-x-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-8 py-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">3</div>
                            <div className="text-gray-400 text-sm">Institutions</div>
                        </div>
                        <div className="w-px h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">6+</div>
                            <div className="text-gray-400 text-sm">Years</div>
                        </div>
                        <div className="w-px h-8 bg-white/20"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-pink-400">95%+</div>
                            <div className="text-gray-400 text-sm">Average</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;