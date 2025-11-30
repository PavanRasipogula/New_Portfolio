import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
    {
        title: 'Retail Sales Analysis & Dashboard',
        desc: 'Collected and cleaned large sales datasets using SQL. Designed an interactive Excel dashboard with Pivot Tables to track KPIs, identifying products contributing 20% more profit margin.',
        tags: ['SQL', 'Python', 'Excel', 'Pandas'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        links: { demo: 'https://github.com/PavanRasipogula/', github: 'https://github.com/PavanRasipogula/' },
        color: 'from-blue-400 to-cyan-400'
    },
    {
        title: 'Plant Leaf Disease Prediction',
        desc: 'Built a web-based application to detect plant leaf diseases using image classification. Achieved 90% accuracy using CNNs and deployed using Flask.',
        tags: ['Python', 'Flask', 'OpenCV', 'ML'],
        image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        links: { demo: 'https://github.com/PavanRasipogula/', github: 'https://github.com/PavanRasipogula/' },
        color: 'from-green-400 to-emerald-400'
    },
    {
        title: 'Financial Data Cleaning & Forecasting',
        desc: 'Automated data cleaning with SQL scripts and Excel macros, reducing reporting time by 30%. Analyzed monthly revenue and expenses using Python.',
        tags: ['SQL', 'Python', 'Excel', 'Forecasting'],
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        links: { demo: 'https://github.com/PavanRasipogula/', github: 'https://github.com/PavanRasipogula/' },
        color: 'from-purple-400 to-pink-400'
    },
    {
        title: 'Customer Segmentation Analysis',
        desc: 'Performed RFM analysis and K-means clustering on customer data to identify high-value segments. Created Power BI dashboards for marketing team insights.',
        tags: ['Python', 'Power BI', 'ML', 'Clustering'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        links: { demo: 'https://github.com/PavanRasipogula/', github: 'https://github.com/PavanRasipogula/' },
        color: 'from-orange-400 to-red-400'
    },
    {
        title: 'E-commerce Sales Dashboard',
        desc: 'Built interactive Tableau dashboard analyzing e-commerce sales trends, customer behavior, and product performance. Integrated real-time data updates using SQL.',
        tags: ['Tableau', 'SQL', 'Analytics', 'ETL'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        links: { demo: 'https://github.com/PavanRasipogula/', github: 'https://github.com/PavanRasipogula/' },
        color: 'from-teal-400 to-blue-400'
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
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
                        Featured Projects 💼
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-light-primary via-light-accent to-light-secondary dark:from-dark-primary dark:via-dark-accent dark:to-dark-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -8 }}
                            className="anime-card overflow-hidden group relative"
                        >
                            {/* Holographic Frame Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>

                            {/* Image Section */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Floating Action Buttons */}
                                <div className="absolute bottom-4 right-4 z-20 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <motion.a
                                        href={project.links.github}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2.5 bg-white/20 backdrop-blur-md rounded-anime text-white hover:bg-white/40 transition-colors shadow-neon-glow-sm"
                                    >
                                        <Github size={18} />
                                    </motion.a>
                                    <motion.a
                                        href={project.links.demo}
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2.5 bg-white/20 backdrop-blur-md rounded-anime text-white hover:bg-white/40 transition-colors shadow-neon-glow-sm"
                                    >
                                        <ExternalLink size={18} />
                                    </motion.a>
                                </div>

                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 relative">
                                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-3 group-hover:neon-text transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-light-muted dark:text-dark-muted mb-4 line-clamp-3 leading-relaxed">
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="anime-badge text-xs"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* View Project Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-4 w-full py-2.5 rounded-anime-lg bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary text-white font-bold shadow-neu-light-sm dark:shadow-neon-glow-sm hover:shadow-neu-light dark:hover:shadow-neon-glow transition-all relative overflow-hidden group/btn"
                                >
                                    <span className="relative z-10">View Project</span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.5 }}
                                    ></motion.div>
                                </motion.button>
                            </div>

                            {/* Magical Sparkle Corner */}
                            <motion.div
                                className="absolute top-3 left-3 text-light-accent dark:text-dark-accent"
                                animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Sparkles size={16} />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
