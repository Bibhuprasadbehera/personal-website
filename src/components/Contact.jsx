import React from 'react';
import Section from './Section';
import { Mail, Phone, Github, MapPin } from 'lucide-react';

const Contact = () => {
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
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 rounded-lg bg-bio-dark/50 text-bio-green">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 font-mono">Email</div>
                                    <a href="mailto:bibhu.behera@niser.ac.in" className="hover:text-white transition-colors">bibhu.behera@niser.ac.in</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 rounded-lg bg-bio-dark/50 text-bio-blue">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 font-mono">Phone</div>
                                    <div>+91 9861288099</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 rounded-lg bg-bio-dark/50 text-bio-purple">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 font-mono">Location</div>
                                    <div>Bhubaneswar, India</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-bio-dark border border-white/10 focus:border-bio-green focus:ring-1 focus:ring-bio-green outline-none transition-all text-white" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-bio-dark border border-white/10 focus:border-bio-green focus:ring-1 focus:ring-bio-green outline-none transition-all text-white" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-bio-dark border border-white/10 focus:border-bio-green focus:ring-1 focus:ring-bio-green outline-none transition-all text-white" placeholder="Your message..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 px-6 rounded-lg bg-bio-green text-bio-dark font-bold hover:bg-bio-green/90 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
