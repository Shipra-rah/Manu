import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaHtml5, FaCss3, FaBootstrap, FaReact, FaNode, FaPython, FaGitSquare } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { TbBrandTailwind } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';
import { FaSquareGithub } from 'react-icons/fa6';

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const skills = [
        // Frontend
        { name: 'HTML', level: 95, color: 'from-orange-500 to-red-400', icon: <FaHtml5 className="text-orange-500" />, category: 'frontend' },
        { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-400', icon: <FaCss3 className="text-blue-500" />, category: 'frontend' },
        { name: 'Bootstrap', level: 88, color: 'from-purple-600 to-purple-400', icon: <FaBootstrap className="text-purple-600" />, category: 'frontend' },
        { name: 'JavaScript', level: 80, color: 'from-yellow-500 to-orange-400', icon: <RiJavascriptFill className="text-yellow-400" />, category: 'frontend' },
        { name: 'React', level: 40, color: 'from-cyan-500 to-blue-500', icon: <FaReact className="text-cyan-400" />, category: 'frontend' },
        { name: 'Tailwind CSS', level: 50, color: 'from-teal-500 to-cyan-400', icon: <TbBrandTailwind className="text-sky-400" />, category: 'frontend' },

        // Backend
        { name: 'Node.js', level: 10, color: 'from-green-600 to-green-400', icon: <FaNode className="text-green-600" />, category: 'backend' },
        { name: 'Python', level: 87, color: 'from-blue-600 to-yellow-500', icon: <FaPython className="text-yellow-400" />, category: 'backend' },
        { name: 'MySQL', level: 83, color: 'from-green-700 to-green-500', icon: <SiMysql className="text-blue-600" />, category: 'backend' },

        // Tools
        { name: 'Git', level: 91, color: 'from-orange-600 to-red-500', icon: <FaGitSquare className="text-orange-500" />, category: 'tools' },
        { name: 'GitHub', level: 82, color: 'from-blue-700 to-blue-500', icon: <FaSquareGithub className="text-gray-300" />, category: 'tools' },
    ];

    const frontendSkills = skills.filter(s => s.category === 'frontend');
    const backendSkills = skills.filter(s => s.category === 'backend');
    const toolsSkills = skills.filter(s => s.category === 'tools');

    const SkillCard = ({ skill, index }) => (
        <motion.div
            className="relative group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={isVisible ? {
                opacity: 1, y: 0, scale: 1,
                transition: { duration: 0.6, delay: index * 0.05, ease: "easeOut" }
            } : {}}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <span className="text-2xl">{skill.icon}</span>
            </div>

            {/* Name */}
            <h3 className="text-white font-semibold text-sm text-center mb-3 group-hover:text-cyan-400 transition-colors">
                {skill.name}
            </h3>

            {/* Progress */}
            <div className="mb-2">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Level</span>
                    <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isVisible ? {
                            width: `${skill.level}%`,
                            transition: { duration: 1.2, delay: index * 0.05 + 0.3, ease: "easeOut" }
                        } : {}}
                    />
                </div>
            </div>

            {/* Glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
        </motion.div>
    );

    return (
        <section ref={sectionRef} id="skills" className="relative flex items-center justify-center px-4 sm:px-6 lg:px-20 py-16">
            {/* Pattern */}
            <div className="absolute inset-0  " />
            <div className="absolute inset-0 opacity-3">
                <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle, #00ffff 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0, transition: { duration: 0.6 } } : {}}
                >
                    <div className="inline-flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                            <FaCode className="text-white text-lg" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Technical Skills</h2>
                    </div>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
                </motion.div>

                {/* Categories */}
                <div className="space-y-8 mb-8">
                    {/* Frontend */}
                    <SkillSection title="Frontend Development" color="text-cyan-400" skills={frontendSkills} offset={0} />
                    {/* Backend */}
                    <SkillSection title="Backend Development" color="text-green-400" skills={backendSkills} offset={frontendSkills.length} />
                    {/* Tools */}
                    <SkillSection title="Tools & Others" color="text-purple-400" skills={toolsSkills} offset={frontendSkills.length + backendSkills.length} />
                </div>
            </div>
        </section>
    );

    function SkillSection({ title, color, skills, offset }) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0, transition: { duration: 0.6 } } : {}}
            >
                <div className="flex items-center mb-4">
                    <h3 className={`text-xl font-semibold ${color} mr-3`}>{title}</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
                    <span className="text-sm text-gray-400 ml-3">{skills.length} skills</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {skills.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} index={i + offset} />
                    ))}
                </div>
            </motion.div>
        );
    }
};

export default Skills;
