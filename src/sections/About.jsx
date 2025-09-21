import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import manu from '../assets/Manu.png';

const About = () => {
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

    const textVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            color: '#6B7280'
        },
        visible: { 
            opacity: 1, 
            y: 0,
            color: '#FFFFFF',
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const photoVariants = {
        hidden: { opacity: 0, x: -50, scale: 0.9 },
        visible: { 
            opacity: 1, 
            x: 0, 
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section 
            ref={sectionRef}
            id="about" 
            className="relative h-screen px-4 sm:px-8 lg:px-16 flex items-center justify-center"
        >
            {/* Minimal transparent background */}
            <div className="absolute inset-0  " />
            
            {/* Compact content container */}
            <div className="relative z-10 max-w-5xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    
                    {/* Left - Photo */}
                    <motion.div
                        className="flex justify-center lg:justify-start"
                        variants={photoVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        <div className="relative">
                            {/* Clean photo container */}
                            <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10">
                                {/* Photo placeholder */}
                                <div className="w-full h-full bg-gradient-to-br from-cyan-500/80 via-purple-600/80 to-pink-500/80 flex items-center justify-center">
                                    <img src={manu} alt="" 
                                    className='h-auto w-full z-50' />
                                    {/* Replace with: <img src="your-photo.jpg" alt="ArunaYadav" className="w-full h-full object-cover" /> */}
                                </div>
                            </div>
                            
                            {/* Subtle glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur opacity-50" />
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        className="text-center lg:text-left space-y-6"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                    >
                        {/* Clean heading */}
                        <motion.div variants={textVariants}>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                                About Me
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto lg:mx-0 rounded-full" />
                        </motion.div>

                        {/* Minimal paragraph */}
                        <motion.p
                            className="text-lg lg:text-xl leading-relaxed max-w-md"
                            variants={textVariants}
                        >
                            I'm ARUNA YADAV, a passionate full-stack developer specializing in modern web technologies. 
                            I create clean, efficient solutions that deliver exceptional user experiences.
                        </motion.p>

                        {/* Simple skills */}
                        <motion.div
                            className="flex flex-wrap gap-3 justify-center lg:justify-start"
                            variants={textVariants}
                        >
                            {['HTML','CSS','JavaScript', 'Python', 'MongoDB'].map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </motion.div>

                        {/* Clean stats */}
                        <motion.div
                            className="flex justify-center lg:justify-start space-x-8 pt-4"
                            variants={textVariants}
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-400">5+</div>
                                <div className="text-sm text-gray-400">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-400">3+</div>
                                <div className="text-sm text-gray-400">Years</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-pink-400">100%</div>
                                <div className="text-sm text-gray-400">Quality</div>
                            </div>
                        </motion.div>

                        {/* Simple CTA */}
                        <motion.div variants={textVariants}>
                            <motion.a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get In Touch
                                <span className="ml-2">→</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;