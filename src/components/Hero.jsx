import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, FileText, Database, Linkedin, GraduationCap, BookOpen } from 'lucide-react';
import NetworkBackground from './NetworkBackground';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Grid & Effects */}
            <NetworkBackground />
            <div className="absolute inset-0 grid-bg opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bio-dark/50 to-bio-dark"></div>

            {/* Floating Elements Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-bio-green/10 blur-xl"
                        style={{
                            width: Math.random() * 300 + 100,
                            height: Math.random() * 300 + 100,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            x: [0, 30, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-bio-green/30 bg-bio-green/10 text-bio-green font-mono text-sm">
                        System.init(Bioinformatics_Lab)
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Bibhu Prasad <span className="text-transparent bg-clip-text bg-gradient-to-r from-bio-green to-bio-blue">Behera</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
                        Decoding Life with <span className="text-bio-purple font-mono">Deep Learning</span> & <span className="text-bio-blue font-mono">Data Science</span>
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a href="#contact" className="px-8 py-3 rounded-lg bg-bio-green text-bio-dark font-bold hover:bg-bio-green/90 transition-colors flex items-center gap-2">
                            <Mail size={20} />
                            Contact Me
                        </a>
                        <a href="https://www.linkedin.com/in/bibhu-prasad-behera-b3a6b5203/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2">
                            <Linkedin size={20} />
                            LinkedIn
                        </a>
                        <a href="https://scholar.google.com/citations?user=Tn-PU8YAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2">
                            <GraduationCap size={20} />
                            Google Scholar
                        </a>
                        <a href="https://bibhuprasadbehera.substack.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2">
                            <BookOpen size={20} />
                            Blog
                        </a>
                        <a href="https://github.com/Bibhuprasadbehera" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2">
                            <Github size={20} />
                            GitHub
                        </a>
                    </div>

                    {/* Stats/Highlights */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                        {[
                            { label: 'Publications', value: '5+' },
                            { label: 'Projects', value: '10+' },
                            { label: 'Citations', value: 'Coming Soon' },
                            { label: 'Experience', value: '2+ Years' },
                        ].map((stat, index) => (
                            <div key={index} className="p-4 rounded-lg bg-bio-panel border border-white/5 hover:border-bio-green/30 transition-colors">
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500 font-mono">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
