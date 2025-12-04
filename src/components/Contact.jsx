import React, { useState } from 'react';
import Section from './Section';
import { Mail, Phone, Github, MapPin, Loader2, CheckCircle, AlertCircle, Linkedin, GraduationCap, BookOpen } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill in all fields.' });
            setIsSubmitting(false);
            return;
        }

        try {
            const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
            const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
            window.location.href = `mailto:bibhubehera2001@gmail.com?subject=${subject}&body=${body}`;
            setStatus({ type: 'success', message: 'Opening email client... Alternatively, you can email me directly at bibhubehera2001@gmail.com' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({ type: 'error', message: 'Something went wrong. Please email me directly at bibhubehera2001@gmail.com' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'bibhubehera2001@gmail.com', href: 'mailto:bibhubehera2001@gmail.com', color: 'green' },
        { icon: Mail, label: 'Alt Email', value: 'bbibhuprasad0011@gmail.com', href: 'mailto:bbibhuprasad0011@gmail.com', color: 'green' },
        { icon: Phone, label: 'Phone', value: '+91 9861288099', color: 'blue' },
        { icon: Github, label: 'GitHub', value: 'Bibhuprasadbehera', href: 'https://github.com/Bibhuprasadbehera', color: 'green' },
        { icon: Linkedin, label: 'LinkedIn', value: 'Connect', href: 'https://www.linkedin.com/in/bibhu-prasad-behera-b3a6b5203/', color: 'blue' },
        { icon: GraduationCap, label: 'Google Scholar', value: 'View Profile', href: 'https://scholar.google.com/citations?user=Tn-PU8YAAAAJ&hl=en', color: 'purple' },
        { icon: BookOpen, label: 'Blog', value: 'Read Articles', href: 'https://bibhuprasadbehera.substack.com/', color: 'green' },
    ];

    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-4xl mx-auto bg-bio-panel rounded-2xl border border-white/5 overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <div className="p-8 md:p-12 bg-gradient-to-br from-bio-green/10 to-bio-blue/10">
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        <p className="text-gray-400 mb-8">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                                <div key={label} className="flex items-center gap-4 text-gray-300">
                                    <div className={`p-3 rounded-lg bg-bio-dark/50 text-bio-${color}`}>
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 font-mono">{label}</div>
                                        {href ? (
                                            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="hover:text-white transition-colors">
                                                {value}
                                            </a>
                                        ) : (
                                            <div>{value}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-bio-dark border border-white/10 focus:border-bio-green focus:ring-1 focus:ring-bio-green outline-none transition-all text-white"
                                    placeholder="John Doe"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-bio-dark border border-white/10 focus:border-bio-green focus:ring-1 focus:ring-bio-green outline-none transition-all text-white"
                                    placeholder="john@example.com"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-bio-dark border border-white/10 focus:border-bio-green focus:ring-1 focus:ring-bio-green outline-none transition-all text-white"
                                    placeholder="Your message..."
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-lg flex items-start gap-3 ${status.type === 'success' ? 'bg-bio-green/10 border border-bio-green/30' : 'bg-red-500/10 border border-red-500/30'
                                    }`}>
                                    {status.type === 'success' ? (
                                        <CheckCircle size={20} className="text-bio-green mt-0.5" />
                                    ) : (
                                        <AlertCircle size={20} className="text-red-400 mt-0.5" />
                                    )}
                                    <p className={`text-sm ${status.type === 'success' ? 'text-bio-green' : 'text-red-400'}`}>
                                        {status.message}
                                    </p>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 px-6 rounded-lg bg-bio-green text-bio-dark font-bold hover:bg-bio-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
