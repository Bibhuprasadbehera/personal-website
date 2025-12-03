import React from 'react';
import Section from './Section';
import { Github, ExternalLink, Code2, CloudRain, TrendingUp, Activity } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Locust Swarm Prediction",
            desc: "Machine learning model for predicting locust swarm patterns to aid in agricultural protection.",
            icon: <Activity size={40} className="text-bio-green" />,
            tags: ["ML", "Python", "Prediction"],
            link: "#"
        },
        {
            title: "Economic Impact of Nuclear Energy",
            desc: "Economic analysis using ML techniques to study the impact of nuclear energy adoption.",
            icon: <TrendingUp size={40} className="text-bio-blue" />,
            tags: ["Data Analysis", "Economics", "ML"],
            link: "#"
        },
        {
            title: "Rain Prediction (Kaggle)",
            desc: "Weather prediction model achieving 6th place in Kaggle competition.",
            icon: <CloudRain size={40} className="text-bio-purple" />,
            tags: ["Kaggle", "XGBoost", "Weather"],
            link: "#"
        },
        {
            title: "PPI Site Prediction",
            desc: "Protein-protein interaction prediction model from Amino Acid sequences.",
            icon: <Code2 size={40} className="text-pink-500" />,
            tags: ["Bioinformatics", "Deep Learning", "Proteins"],
            link: "#"
        }
    ];

    return (
        <Section id="projects" title="Projects">
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="group relative p-8 rounded-2xl bg-bio-panel border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink className="text-white/50 hover:text-white" />
                        </div>

                        <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                            {project.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-400 mb-6 line-clamp-2">{project.desc}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-gray-300 border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <a href="https://github.com/Bibhuprasadbehera" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono transition-colors border border-white/10">
                    <Github size={20} />
                    View More on GitHub
                </a>
            </div>
        </Section>
    );
};

export default Projects;
