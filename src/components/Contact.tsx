import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const { error } = await supabase
                .from('contacts')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (error) throw error;

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
            {/* Background Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.5, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    >
                        <Sparkles className="text-light-primary dark:text-dark-secondary" size={18} />
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
                        Get In Touch 💬
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-light-primary via-light-accent to-light-secondary dark:from-dark-primary dark:via-dark-accent dark:to-dark-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info with Chibi Helper */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="anime-card p-8 relative">
                            {/* Chibi Helper */}
                            <motion.div
                                className="absolute -top-12 -right-8 w-24 h-24 chibi-float"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                <img
                                    src="/chibi-helper.png"
                                    alt="Chibi Helper"
                                    className="w-full h-full object-contain drop-shadow-lg"
                                />
                            </motion.div>

                            <h3 className="text-2xl font-bold neon-text mb-6">
                                Let's Talk! 🎉
                            </h3>
                            <p className="text-light-muted dark:text-dark-muted mb-8 leading-relaxed">
                                I'm currently available for freelance projects and full-time opportunities.
                                If you have a project that needs some creative touch, let's chat!
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Mail, text: 'justmailtopavankumar@gmail.com', label: 'Email', emoji: '📧' },
                                    { icon: Phone, text: '+91 8688593880', label: 'Phone', emoji: '📱' },
                                    { icon: MapPin, text: 'Bengaluru, India', label: 'Location', emoji: '📍' },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-4 group cursor-pointer"
                                    >
                                        <div className="p-3 rounded-anime bg-gradient-to-br from-light-primary/20 to-light-secondary/20 dark:from-dark-primary/20 dark:to-dark-secondary/20 text-light-primary dark:text-dark-secondary shadow-neu-light-sm dark:shadow-neon-glow-sm group-hover:scale-110 transition-transform">
                                            <span className="text-2xl">{item.emoji}</span>
                                        </div>
                                        <div>
                                            <p className="text-xs text-light-muted dark:text-dark-muted uppercase tracking-wider font-bold">{item.label}</p>
                                            <p className="font-medium text-light-text dark:text-dark-text group-hover:text-light-primary dark:group-hover:text-dark-secondary transition-colors">{item.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="anime-card p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-light-text dark:text-dark-text ml-1">Name ✨</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-4 neu-input-light dark:neu-input-dark text-light-text dark:text-dark-text focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-secondary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-light-text dark:text-dark-text ml-1">Email 📧</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-4 neu-input-light dark:neu-input-dark text-light-text dark:text-dark-text focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-secondary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-light-text dark:text-dark-text ml-1">Subject 💼</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-4 neu-input-light dark:neu-input-dark text-light-text dark:text-dark-text focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-secondary transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-light-text dark:text-dark-text ml-1">Message 💬</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-4 neu-input-light dark:neu-input-dark text-light-text dark:text-dark-text focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-secondary transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                                className={`w-full py-4 px-6 rounded-anime-lg font-bold shadow-neu-light dark:shadow-neon-glow-sm hover:shadow-neu-light dark:hover:shadow-neon-glow transition-all flex items-center justify-center gap-2 relative overflow-hidden ${status === 'success'
                                        ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-white cursor-default'
                                        : 'bg-gradient-to-r from-light-primary via-light-accent to-light-secondary dark:from-dark-primary dark:via-dark-accent dark:to-dark-secondary text-white'
                                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={18} />
                                        Message Sent! 🎉
                                    </>
                                ) : (
                                    <>
                                        <span>Let's Talk!</span>
                                        <Send size={18} />
                                    </>
                                )}

                                {/* Energy Burst Effect */}
                                {status === 'idle' && (
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.5 }}
                                    ></motion.div>
                                )}
                            </motion.button>

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 text-red-500 text-sm mt-2 justify-center bg-red-50 dark:bg-red-900/20 p-3 rounded-anime"
                                >
                                    <AlertCircle size={16} />
                                    <span>{errorMessage}</span>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
