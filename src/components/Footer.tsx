import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/pavanrasipogula', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/pavanrasipogula', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
        { icon: Mail, href: 'mailto:justmailtopavankumar@gmail.com', label: 'Email', color: 'hover:text-red-500 dark:hover:text-red-400' },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-light-bg to-light-surface dark:from-dark-bg dark:to-dark-surface py-12 overflow-hidden">
            {/* Tiny Sparkles Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    >
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-light-primary dark:text-dark-secondary">
                            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                        </svg>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center space-y-6">
                    {/* Floating Chibi Social Icons */}
                    <div className="flex items-center gap-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.1 }}
                                className={`p-4 rounded-anime-lg bg-gradient-to-br from-white/80 to-white/60 dark:from-dark-surface/80 dark:to-dark-bg/80 backdrop-blur-sm border-2 border-light-primary/30 dark:border-dark-primary/40 shadow-anime-light dark:shadow-neon-glow-sm text-light-text dark:text-dark-text ${social.color} transition-all group`}
                                aria-label={social.label}
                            >
                                <social.icon size={24} className="group-hover:animate-bounce-slow" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Divider with Gradient */}
                    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-light-primary/30 dark:via-dark-primary/30 to-transparent"></div>

                    {/* Copyright Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center space-y-2"
                    >
                        <p className="text-sm text-light-muted dark:text-dark-muted flex items-center justify-center gap-2">
                            Made with <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" /> by{' '}
                            <span className="font-bold text-light-primary dark:text-dark-secondary">Pavan Rasipogula</span>
                        </p>
                        <p className="text-xs text-light-muted/70 dark:text-dark-muted/70">
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </motion.div>

                    {/* Fun Easter Egg */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="text-xs text-light-muted/50 dark:text-dark-muted/50 font-mono"
                    >
                        ✨ Powered by Pavan Rasipogula ✨
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
