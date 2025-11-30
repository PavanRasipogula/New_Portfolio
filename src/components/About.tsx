import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
            {/* Floating Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.3, 0],
                            scale: [0, 1, 0],
                            y: [0, -100],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    >
                        {i % 2 === 0 ? (
                            <Heart className="text-light-primary dark:text-dark-secondary" size={16} fill="currentColor" />
                        ) : (
                            <Star className="text-light-accent dark:text-dark-accent" size={14} fill="currentColor" />
                        )}
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
                            className="anime-card p-8"
                        >
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
                            className="anime-card p-8"
                        >
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
                            className="anime-card p-8"
                        >
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
