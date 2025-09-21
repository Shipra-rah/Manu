import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern online shopping experience with React & Node.js',
      tech: 'React • Node.js • MongoDB',
      github: 'https://github.com/ArunaYadav/ecommerce',
      live: 'https://ecommerce-demo.com',
      color: 'from-blue-500 to-cyan-400',
      image: '💻',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative workspace for team productivity',
      tech: 'Vue.js • Express • PostgreSQL',
      github: 'https://github.com/ArunaYadav/taskmanager',
      live: 'https://taskmanager-demo.com',
      color: 'from-purple-500 to-pink-400',
      image: '📋',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather data with beautiful visualizations',
      tech: 'React • TypeScript • API',
      github: 'https://github.com/ArunaYadav/weather',
      live: 'https://weather-demo.com',
      color: 'from-green-500 to-teal-400',
      image: '🌤️',
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Connect and share with friends and family',
      tech: 'Next.js • Firebase • Tailwind',
      github: 'https://github.com/ArunaYadav/social',
      live: 'https://social-demo.com',
      color: 'from-orange-500 to-red-400',
      image: '👥',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Personal portfolio with modern animations',
      tech: 'React • Framer Motion • Tailwind',
      github: 'https://github.com/ArunaYadav/portfolio',
      live: 'https://ArunaYadav-portfolio.com',
      color: 'from-indigo-500 to-purple-400',
      image: '🎨',
    },
  ];

  const MacWindow = ({ project, index }) => {
    const y = useTransform(
      scrollYProgress,
      [0, 0.2, 0.4, 0.6, 0.8, 1],
      [100 * (index + 1), 50 * index, 25 * index, 10 * index, 5 * index, 0]
    );

    const scale = useTransform(
      scrollYProgress,
      [0, 0.2, 0.4, 0.6, 0.8, 1],
      [0.9 - index * 0.05, 0.95 - index * 0.02, 0.98, 0.99, 1, 1]
    );

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.8]);

    const zIndex = index + 1; // ✅ ensures newer cards are on top

    return (
      <motion.div
        className="sticky top-20 w-full max-w-4xl mx-auto "
        style={{
          y,
          scale,
          opacity,
          zIndex,
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* macOS Window */}
        <div className="bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group">
          {/* macOS Title Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-gray-300 text-sm font-medium ml-4">{project.title}</span>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors group/btn"
              >
                <FaGithub className="text-gray-400 hover:text-white transition-colors" size={16} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors group/btn"
              >
                <FaExternalLinkAlt className="text-gray-400 hover:text-cyan-400 transition-colors" size={14} />
              </a>
            </div>
          </div>

          {/* Window Content */}
          <div className="p-8">
            <div className="flex items-start space-x-6">
              {/* Project Icon/Image */}
              <div
                className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}
              >
                {project.image}
              </div>

              {/* Project Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                  <FaCode className="text-cyan-400 mr-2" size={14} />
                  <span className="text-sm text-gray-300 font-medium">{project.tech}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300 group/link"
                >
                  <FaGithub className="mr-2 text-gray-400 group-hover/link:text-white" size={16} />
                  <span className="text-sm text-gray-300 group-hover/link:text-white">Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 rounded-lg transition-all duration-300 group/link"
                >
                  <FaExternalLinkAlt className="mr-2 text-white" size={14} />
                  <span className="text-sm text-white font-medium">Live Demo</span>
                </a>
              </div>

              <div className="text-xs text-gray-500">Project {index + 1} of {projects.length}</div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-20">
      {/* Transparent Background */}
      <div className="absolute inset-0 " />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #00ffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 relative z-50"
          initial={{ opacity: 0, y: 30 }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8 },
                }
              : {}
          }
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg border border-white/10 rounded-full mb-6">
            <FaCode className="text-cyan-400 text-2xl" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills and passion for development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Projects Stack */}
        <div className="relative">
          {projects.map((project, index) => (
            <MacWindow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
