import React from 'react';
import Section from './Section';
import { AlertCircle, TrendingDown, BookX } from 'lucide-react';

const Failures = () => {
    const failures = [
        {
            title: "Cancer Detection Startup",
            description: "Tried launching a startup with a multi-modal ML model to predict cancer from H&E-stained images, but faced challenges in deployment and market validation, leading to its discontinuation.",
            icon: <AlertCircle size={24} className="text-red-400" />,
            learning: "Learned the hard way that technical excellence alone doesn't guarantee product-market fit. Understanding customer needs and deployment challenges early is crucial for biotech startups."
        },
        {
            title: "NGS Analysis Tool",
            description: "Attempted to develop a drag-and-drop NGS analysis tool, but the project didn't progress due to resource constraints and shifting priorities.",
            icon: <TrendingDown size={24} className="text-orange-400" />,
            learning: "Realized the importance of proper resource planning and maintaining focus. Sometimes saying 'no' to new ideas is necessary to complete existing commitments."
        }
    ];

    return (
        <Section id="failures" title="Failures & Learnings">
            <div className="mb-8 text-center max-w-3xl mx-auto">
                <p className="text-gray-400 text-lg">
                    Failure is not the opposite of success, it's a stepping stone to it. Here are some setbacks that taught me valuable lessons.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {failures.map((failure) => (
                    <div
                        key={failure.title}
                        className="group relative p-6 rounded-xl bg-bio-panel border border-white/5 hover:border-red-500/30 transition-all duration-300"
                    >
                        {/* Icon */}
                        <div className="mb-4 p-3 rounded-lg bg-white/5 w-fit">
                            {failure.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3">
                            {failure.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-4">
                            {failure.description}
                        </p>

                        {/* Learning */}
                        <div className="pt-4 border-t border-white/10">
                            <div className="text-xs text-bio-green font-mono mb-2">💡 What I Learned</div>
                            <p className="text-gray-300 text-sm italic">
                                "{failure.learning}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quote */}
            <div className="mt-12 text-center">
                <blockquote className="text-xl text-gray-400 italic font-light max-w-2xl mx-auto border-l-4 border-bio-purple pl-6">
                    "I have not failed. I've just found 10,000 ways that won't work."
                    <footer className="text-sm text-gray-500 mt-2 not-italic">— Thomas Edison</footer>
                </blockquote>
            </div>
        </Section>
    );
};

export default Failures;
