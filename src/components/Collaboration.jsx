import React from 'react';
import Section from './Section';
import { Microscope, Rocket, Code2, ArrowRight } from 'lucide-react';

const Collaboration = () => {
    const opportunities = [
        {
            title: "Scientific Research",
            icon: Microscope,
            color: "green",
            description: "Open to collaborations on Bioinformatics, Deep Learning in Biology, and Drug Discovery projects.",
            tags: ["Joint Publications", "Grant Proposals", "Data Analysis"]
        },
        {
            title: "Startup & Freelance",
            icon: Rocket,
            color: "purple",
            description: "Available for consulting on Biotech startups, MVP development, and technical feasibility studies.",
            tags: ["Technical Consulting", "MVP Building", "AI Integration"]
        },
        {
            title: "Development",
            icon: Code2,
            color: "blue",
            description: "Full-stack development services for scientific tools, databases, and data visualization dashboards.",
            tags: ["Web Apps", "Databases", "Visualization"]
        }
    ];

    return (
        <Section id="collaboration" title="Let's Collaborate">
            <div className="grid md:grid-cols-3 gap-6">
                {opportunities.map((opp) => (
                    <div key={opp.title} className={`group p-6 rounded-xl bg-bio-panel border border-white/5 hover:border-bio-${opp.color}/50 transition-all duration-300 hover:-translate-y-1`}>
                        <div className={`w-12 h-12 rounded-lg bg-bio-${opp.color}/10 flex items-center justify-center mb-4 text-bio-${opp.color} group-hover:scale-110 transition-transform`}>
                            <opp.icon size={24} />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">{opp.title}</h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            {opp.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {opp.tags.map((tag) => (
                                <span key={tag} className={`px-2 py-1 text-xs rounded bg-white/5 text-gray-300 border border-white/10`}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <a
                            href="#contact"
                            className={`inline-flex items-center gap-2 text-sm text-bio-${opp.color} font-mono hover:gap-3 transition-all`}
                        >
                            Get in touch <ArrowRight size={16} />
                        </a>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-bio-dark to-bio-panel border border-white/10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bio-green via-bio-blue to-bio-purple"></div>
                <h3 className="text-2xl font-bold text-white mb-4">Have an interesting idea?</h3>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                    I'm always looking for challenging problems to solve. Whether it's decoding biological complexity or building the next big biotech platform.
                </p>
                <a
                    href="mailto:bibhubehera2001@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono border border-white/20 transition-all hover:border-bio-green/50 hover:text-bio-green"
                >
                    Start a Conversation
                </a>
            </div>
        </Section>
    );
};

export default Collaboration;
