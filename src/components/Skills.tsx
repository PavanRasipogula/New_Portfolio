import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileSpreadsheet, BarChart3, Presentation, Terminal, Code2, GitBranch, LineChart, Brain, Cpu, Flame, Zap } from 'lucide-react';

const skills = [
    { name: 'Python', level: 95, color: '#3776AB', icon: Terminal, emoji: '🐍' },
    { name: 'SQL', level: 90, color: '#003B57', icon: Database, emoji: '🗄️' },
    { name: 'Excel', level: 98, color: '#217346', icon: FileSpreadsheet, emoji: '📊' },
    { name: 'Power BI', level: 90, color: '#F2C811', icon: BarChart3, emoji: '📈' },
    { name: 'Tableau', level: 80, color: '#E97627', icon: Presentation, emoji: '📉' },
    { name: 'Machine Learning', level: 85, color: '#FF6B6B', icon: Brain, emoji: '🤖' },
    { name: 'AI/Deep Learning', level: 85, color: '#4ECDC4', icon: Cpu, emoji: '🧠' },
    { name: 'Flask', level: 80, color: '#000000', icon: Flame, emoji: '🔥' },
    { name: 'Django', level: 85, color: '#092E20', icon: Zap, emoji: '⚡' },
    { name: 'HTML/CSS', level: 90, color: '#E34F26', icon: Code2, emoji: '💻' },
    { name: 'Git/GitHub', level: 95, color: '#F05032', icon: GitBranch, emoji: '🔀' },
    { name: 'Data Analysis', level: 90, color: '#8b5cf6', icon: LineChart, emoji: '📊' },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
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
                        Technical Skills ⚡
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-light-primary via-light-accent to-light-secondary dark:from-dark-primary dark:via-dark-accent dark:to-dark-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="anime-card p-4 flex flex-col items-center justify-center min-h-[140px] group cursor-pointer relative overflow-hidden"
                        >
                            {/* Glossy Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                            {/* Icon with Glow */}
                            <motion.div
                                className="relative mb-3"
                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="text-4xl mb-2">{skill.emoji}</div>
                                <div
                                    className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-100 transition-opacity"
                                    style={{ backgroundColor: skill.color }}
                                ></div>
                            </motion.div>

                            <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-3 text-center relative z-10">{skill.name}</h3>

                            {/* Animated Progress Bar */}
                            <div className="w-full bg-light-bg dark:bg-dark-bg rounded-full h-2.5 overflow-hidden shadow-inner relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                                    className="h-full rounded-full relative overflow-hidden"
                                    style={{
                                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                                    }}
                                >
                                    {/* Shimmer Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        animate={{ x: ['-100%', '200%'] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    ></motion.div>
                                </motion.div>
                            </div>
                            <span className="text-xs text-light-muted dark:text-dark-muted mt-2 font-bold relative z-10">{skill.level}%</span>

                            {/* Skill Badge */}
                            <motion.div
                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                <skill.icon size={20} style={{ color: skill.color }} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
