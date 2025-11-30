import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = ['About', 'Skills', 'Projects', 'Contact'];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors duration-300">
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b-2 border-light-primary/20 dark:border-dark-primary/30"></div>

            {/* Floating Sparkle */}
            <motion.div
                className="absolute top-2 right-20 text-light-primary dark:text-dark-secondary"
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <Sparkles size={16} />
            </motion.div>

            <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
                {/* Logo */}
                <motion.div
                    className="text-2xl font-bold tracking-tight"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="neon-text">Pavan</span>
                    <span className="text-light-text dark:text-dark-text">Kumar</span>
                    <motion.span
                        className="inline-block ml-1 text-light-accent dark:text-dark-accent"
                        animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                    >
                        ✨
                    </motion.span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onMouseEnter={() => setHoveredItem(item)}
                            onMouseLeave={() => setHoveredItem(null)}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative px-5 py-2.5 text-sm font-bold text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-secondary transition-colors rounded-anime group"
                        >
                            {hoveredItem === item && (
                                <motion.span
                                    layoutId="hover-pill"
                                    className="absolute inset-0 bg-gradient-to-br from-light-primary/20 to-light-secondary/20 dark:from-dark-primary/20 dark:to-dark-secondary/20 rounded-anime border-2 border-light-primary/30 dark:border-dark-primary/40 shadow-anime-light dark:shadow-neon-glow-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item}</span>

                            {/* Cute underline on hover */}
                            <motion.div
                                className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full"
                                initial={{ width: 0, x: '-50%' }}
                                animate={{ width: hoveredItem === item ? '80%' : 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.a>
                    ))}

                    {/* Theme Toggle Button */}
                    <div className="pl-2 ml-2 border-l-2 border-light-primary/20 dark:border-dark-primary/30">
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-3 rounded-anime-lg transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/20 text-yellow-400 border-2 border-yellow-400/40 shadow-neon-glow-sm'
                                    : 'bg-gradient-to-br from-indigo-400/20 to-purple-400/20 text-indigo-600 border-2 border-indigo-400/40 shadow-anime-light'
                                }`}
                            aria-label="Toggle Theme"
                        >
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                                transition={{ duration: 0.5 }}
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="md:hidden p-2.5 rounded-anime bg-gradient-to-br from-light-primary/20 to-light-secondary/20 dark:from-dark-primary/20 dark:to-dark-secondary/20 border-2 border-light-primary/30 dark:border-dark-primary/40 text-light-text dark:text-dark-text"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {mobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4 overflow-hidden"
                    >
                        <div className="anime-card p-4 space-y-2 relative z-10">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-sm font-bold text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-secondary rounded-anime bg-gradient-to-r from-transparent hover:from-light-primary/10 hover:to-light-secondary/10 dark:hover:from-dark-primary/10 dark:hover:to-dark-secondary/10 transition-all"
                                >
                                    {item}
                                </motion.a>
                            ))}

                            {/* Mobile Theme Toggle */}
                            <motion.button
                                onClick={toggleTheme}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navItems.length * 0.1 }}
                                className={`w-full px-4 py-3 text-sm font-bold rounded-anime flex items-center justify-center gap-2 ${theme === 'dark'
                                        ? 'bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-400 border-2 border-yellow-400/40'
                                        : 'bg-gradient-to-r from-indigo-400/20 to-purple-400/20 text-indigo-600 border-2 border-indigo-400/40'
                                    }`}
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                                <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
