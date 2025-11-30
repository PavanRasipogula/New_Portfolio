import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
            {/* Floating Sparkles - Same as Hero */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
                        About Me ✨
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-light-primary via-light-accent to-light-secondary dark:from-dark-primary dark:via-dark-accent dark:to-dark-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Bio with Chibi & Internship */}
                    <div className="space-y-8">
                        {/* Profile Summary with Chibi */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="anime-card p-8 relative"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                                {/* Chibi Avatar */}
                                <motion.div
                                    className="flex-shrink-0 chibi-float"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    <div className="w-32 h-32 rounded-anime-xl overflow-hidden border-4 border-light-primary/30 dark:border-dark-primary/40 shadow-anime-light dark:shadow-neon-glow-sm">
                                        <img
                                            src="/chibi-avatar.png"
                                            alt="Chibi Pavan"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </motion.div>

                                {/* Profile Text */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold neon-text mb-4">
                                        Profile Summary
                                    </h3>
                                    <p className="text-light-muted dark:text-dark-muted leading-relaxed text-sm">
                                        Detail-oriented and analytical Data Analyst with strong skills in SQL, Python, Excel, and Power BI. Experienced in extracting, cleaning, and interpreting data to provide actionable insights. Passionate about leveraging data visualization and predictive modelling to drive business decisions.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Internship */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="anime-card p-8 relative overflow-visible"
                        >
                            {/* 3D Floating Briefcase */}
                            <motion.div
                                className="absolute -top-8 -right-8 w-20 h-20 z-10"
                                animate={{
                                    y: [0, -12, 0],
                                    rotate: [0, -8, 8, 0]
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="relative w-full h-full">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-light-primary/40 to-light-secondary/40 dark:from-dark-primary/40 dark:to-dark-secondary/40 rounded-full blur-xl animate-glow-pulse"></div>

                                    {/* Briefcase emoji with 3D effect */}
                                    <motion.div
                                        className="relative text-6xl filter drop-shadow-lg"
                                        whileHover={{ scale: 1.2, rotate: -15 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        💼
                                    </motion.div>

                                    {/* Sparkle particles */}
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute text-blue-400 dark:text-cyan-300"
                                            style={{
                                                left: `${15 + i * 25}%`,
                                                top: `${5 + i * 20}%`,
                                            }}
                                            animate={{
                                                opacity: [0, 1, 0],
                                                scale: [0, 1.2, 0],
                                                y: [0, -25],
                                            }}
                                            transition={{
                                                duration: 2.5,
                                                repeat: Infinity,
                                                delay: i * 0.8,
                                            }}
                                        >
                                            ✨
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-anime bg-gradient-to-br from-light-primary/20 to-light-secondary/20 dark:from-dark-primary/20 dark:to-dark-secondary/20 text-light-primary dark:text-dark-secondary shadow-neu-light-sm dark:shadow-neon-glow-sm">
                                    <Briefcase size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">Internship</h3>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-bold text-light-primary dark:text-dark-secondary">Python Full Stack Intern</h4>
                                    <p className="text-sm font-medium text-light-text dark:text-dark-text">KODNEST</p>
                                </div>
                                <ul className="list-none text-sm text-light-muted dark:text-dark-muted space-y-2">
                                    {[
                                        'Collaborated with cross-functional teams to develop data-centric applications, integrating Python and SQL',
                                        'Utilized Excel (Pivot Tables, VLOOKUP, Charts) for reporting and performance tracking',
                                        'Applied SQL queries for data extraction, validation, and analysis',
                                        'Gained hands-on exposure to Agile methodology, data integration, and version control'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-light-primary dark:text-dark-secondary mt-1">✦</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Education & Certifications */}
                    <div className="space-y-8">
                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="anime-card p-8 relative overflow-visible"
                        >
                            {/* 3D Floating Graduation Cap */}
                            <motion.div
                                className="absolute -top-8 -right-8 w-20 h-20 z-10"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="relative w-full h-full">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-light-secondary/40 to-light-accent/40 dark:from-dark-secondary/40 dark:to-dark-accent/40 rounded-full blur-xl animate-glow-pulse"></div>

                                    {/* Graduation cap emoji with 3D effect */}
                                    <motion.div
                                        className="relative text-6xl filter drop-shadow-lg"
                                        whileHover={{ scale: 1.2, rotate: 15 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        🎓
                                    </motion.div>

                                    {/* Sparkle particles */}
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute text-yellow-400 dark:text-yellow-300"
                                            style={{
                                                left: `${20 + i * 20}%`,
                                                top: `${10 + i * 15}%`,
                                            }}
                                            animate={{
                                                opacity: [0, 1, 0],
                                                scale: [0, 1, 0],
                                                y: [0, -20],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.7,
                                            }}
                                        >
                                            ✨
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-anime bg-gradient-to-br from-light-secondary/20 to-light-accent/20 dark:from-dark-secondary/20 dark:to-dark-accent/20 text-light-secondary dark:text-dark-secondary shadow-neu-light-sm dark:shadow-neon-glow-sm">
                                    <GraduationCap size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">Education</h3>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { degree: 'M.Tech in CSE', school: 'Vemu Institute of Technology', year: 'Pursuing', grade: '73%' },
                                    { degree: 'B.Tech in CSE', school: 'Vemu Institute of Technology', year: 'Graduated: 2023', grade: '75%' },
                                    { degree: 'Intermediate (MPC)', school: 'Sri Satya Sai College', year: '2019', grade: '89%' },
                                ].map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-6 border-l-2 border-light-primary/30 dark:border-dark-primary/30"
                                    >
                                        {/* Magical Orb Node */}
                                        <motion.div
                                            className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary shadow-neu-light-sm dark:shadow-neon-glow-sm"
                                            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                        ></motion.div>
                                        <h4 className="text-lg font-bold text-light-text dark:text-dark-text">{edu.degree}</h4>
                                        <p className="text-light-primary dark:text-dark-secondary font-medium">{edu.school}</p>
                                        <p className="text-sm text-light-muted dark:text-dark-muted">{edu.year} | {edu.grade}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="anime-card p-8 relative overflow-visible"
                        >
                            {/* 3D Floating Trophy */}
                            <motion.div
                                className="absolute -top-8 -right-8 w-20 h-20 z-10"
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <div className="relative w-full h-full">
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-light-accent/40 to-light-lavender/40 dark:from-dark-accent/40 dark:to-dark-primary/40 rounded-full blur-xl animate-glow-pulse"></div>

                                    {/* Trophy emoji with 3D effect */}
                                    <motion.div
                                        className="relative text-6xl filter drop-shadow-lg"
                                        whileHover={{ scale: 1.3, rotate: 20 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        🏆
                                    </motion.div>

                                    {/* Star particles */}
                                    {[...Array(4)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute text-yellow-400 dark:text-yellow-300"
                                            style={{
                                                left: `${10 + i * 20}%`,
                                                top: `${8 + i * 12}%`,
                                            }}
                                            animate={{
                                                opacity: [0, 1, 0],
                                                scale: [0, 1.5, 0],
                                                rotate: [0, 180, 360],
                                                y: [0, -30],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: i * 0.6,
                                            }}
                                        >
                                            ⭐
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-anime bg-gradient-to-br from-light-accent/20 to-light-lavender/20 dark:from-dark-accent/20 dark:to-dark-primary/20 text-light-accent dark:text-dark-accent shadow-neu-light-sm dark:shadow-neon-glow-sm">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">Certifications</h3>
                            </div>

                            <ul className="space-y-3">
                                {[
                                    'Python Full Stack Internship – Kodnest',
                                    'Python Programming – Code Tantra',
                                    'Git & GitHub – Udemy'
                                ].map((cert, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-3 text-light-muted dark:text-dark-muted group cursor-pointer"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent group-hover:scale-150 transition-transform"></span>
                                        <span className="group-hover:text-light-primary dark:group-hover:text-dark-secondary transition-colors">{cert}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
