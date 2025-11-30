import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Database, FileSpreadsheet, BarChart3, Presentation, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300">
            {/* Background Elements - Anime Sparkles & Blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-light-secondary/30 dark:bg-dark-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-light-primary/30 dark:bg-dark-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-light-lavender/30 dark:bg-dark-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

            {/* Enhanced Floating Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-light-primary dark:text-dark-secondary"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                            scale: 0,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -150 - 50],
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.2, 0],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                        </svg>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-5 py-2.5 rounded-anime bg-gradient-to-r from-white/60 to-white/40 dark:from-white/10 dark:to-white/5 backdrop-blur-md border-2 border-light-primary/40 dark:border-dark-primary/40 shadow-anime-light dark:shadow-neon-glow-sm"
                        >
                            <span className="text-sm font-bold text-light-primary dark:text-dark-secondary tracking-wider uppercase">
                                ✨ Data Analyst • Python Developer • ML Enthusiast
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-light-text dark:text-white">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-light-primary via-light-accent to-light-secondary dark:from-dark-primary dark:via-dark-accent dark:to-dark-secondary animate-gradient-x bg-[length:200%_auto]">
                                Pavan Kumar
                            </span>
                        </h1>
                        <p className="text-lg text-light-text/80 dark:text-dark-text/80 max-w-lg leading-relaxed font-medium">
                            Turning complex data into actionable insights! 📊✨ <br />
                            Specializing in <span className="font-bold text-light-primary dark:text-dark-secondary">SQL, Python, Power BI</span> and making data visualization magical.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 flex items-center gap-3 font-bold text-white bg-gradient-to-r from-light-primary via-light-accent to-light-secondary dark:from-dark-primary dark:via-dark-accent dark:to-dark-secondary rounded-anime-lg shadow-neu-light dark:shadow-neon-glow-sm hover:shadow-neu-light dark:hover:shadow-neon-glow transition-all relative overflow-hidden"
                        >
                            <span className="relative z-10">View My Work</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" size={20} />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 flex items-center gap-3 font-bold text-light-text dark:text-white neu-btn-light dark:neu-btn-dark"
                        >
                            Download CV
                            <Download size={20} />
                        </motion.a>
                    </div>

                    {/* Stats Cards - Anime Style */}
                    <div className="grid grid-cols-3 gap-4 pt-8">
                        {[
                            { label: 'Certifications', value: '3+', icon: '🏆' },
                            { label: 'Projects', value: '3+', icon: '💼' },
                            { label: 'Tech Skills', value: '10+', icon: '⚡' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="p-4 anime-card text-center group cursor-pointer"
                            >
                                <div className="text-2xl mb-1">{stat.icon}</div>
                                <h3 className="text-2xl font-black text-light-primary dark:text-dark-secondary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">{stat.value}</h3>
                                <p className="text-xs font-bold text-light-muted dark:text-dark-muted uppercase tracking-wider">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Content - Anime Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-0 flex justify-center items-center"
                >
                    <div className="relative w-full max-w-md aspect-square">
                        {/* Glow Effect Behind Avatar */}
                        <div className="absolute inset-0 bg-gradient-to-br from-light-primary/30 to-light-secondary/30 dark:from-dark-primary/30 dark:to-dark-secondary/30 rounded-full animate-glow-pulse blur-3xl"></div>

                        {/* Main Avatar Container */}
                        <motion.div
                            className="absolute inset-10 neu-card-light dark:neu-card-dark rounded-full flex items-center justify-center overflow-hidden border-4 border-white/80 dark:border-dark-surface shadow-anime-light dark:shadow-neon-glow"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="w-full h-full bg-gradient-to-br from-light-primary/10 to-light-secondary/10 dark:from-dark-primary/10 dark:to-dark-secondary/10 flex items-center justify-center relative group">
                                {/* Anime Avatar Image */}
                                <img
                                    src="/hero-avatar.png"
                                    alt="Pavan Kumar - Anime Avatar"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-light-primary/20 to-transparent dark:from-dark-primary/30 dark:to-transparent mix-blend-overlay"></div>
                            </div>
                        </motion.div>

                        {/* Floating Holographic Panels */}
                        {[
                            { text: 'SQL Expert', position: 'top-0 left-0', delay: 0 },
                            { text: 'Python Pro', position: 'top-0 right-0', delay: 0.2 },
                            { text: 'Data Viz', position: 'bottom-0 left-0', delay: 0.4 },
                        ].map((panel, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + panel.delay }}
                                className={`absolute ${panel.position} holographic-panel px-4 py-2 text-xs font-bold text-light-text dark:text-white animate-float`}
                                style={{ animationDelay: `${i * 0.5}s` }}
                            >
                                {panel.text}
                            </motion.div>
                        ))}

                        {/* Floating Orbiting Skill Icons - Anime Badges */}
                        {[
                            { label: 'SQL', angle: 0, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/40', icon: Database },
                            { label: 'Python', angle: 72, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/40', icon: Terminal },
                            { label: 'Power BI', angle: 144, color: 'text-yellow-600', bg: 'bg-yellow-50 dark:bg-yellow-900/40', icon: BarChart3 },
                            { label: 'Excel', angle: 216, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/40', icon: FileSpreadsheet },
                            { label: 'Tableau', angle: 288, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/40', icon: Presentation },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className={`absolute top-1/2 left-1/2 w-18 h-18 -ml-9 -mt-9 rounded-anime-lg flex flex-col items-center justify-center text-[10px] font-bold shadow-anime-light dark:shadow-neon-glow-sm z-20 gap-1 border-2 border-white/80 dark:border-dark-surface/80 ${item.bg} backdrop-blur-md`}
                                animate={{
                                    x: [
                                        Math.cos((item.angle * Math.PI) / 180) * 160,
                                        Math.cos(((item.angle + 360) * Math.PI) / 180) * 160
                                    ],
                                    y: [
                                        Math.sin((item.angle * Math.PI) / 180) * 160,
                                        Math.sin(((item.angle + 360) * Math.PI) / 180) * 160
                                    ],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: -i * 4,
                                }}
                                whileHover={{ scale: 1.2 }}
                            >
                                <motion.div animate={{ rotate: [0, -360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: -i * 4 }}>
                                    <item.icon size={22} className={item.color} />
                                </motion.div>
                                <motion.span animate={{ rotate: [0, -360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: -i * 4 }} className={`${item.color} font-black`}>
                                    {item.label}
                                </motion.span>
                            </motion.div>
                        ))}

                        {/* Decorative Magical Rings */}
                        <div className="absolute inset-0 border-2 border-dashed border-light-primary/40 dark:border-dark-primary/40 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-6 border-2 border-dotted border-light-secondary/40 dark:border-dark-secondary/40 rounded-full animate-spin-reverse-slow"></div>
                        <div className="absolute inset-12 border border-light-accent/30 dark:border-dark-accent/30 rounded-full animate-glow-pulse"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
