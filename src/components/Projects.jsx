import React from 'react';
import Section from './Section';
import { Github, ExternalLink, Code2, CloudRain, TrendingUp, Activity, Database, Dna, FileText } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Peptaloid Database",
            desc: "Comprehensive database for exploring Peptide Alkaloid compounds. Publicly available resource for peptide research and drug discovery.",
            icon: <Database size={40} className="text-bio-green" />,
            tags: ["JavaScript", "Database", "Bioinformatics"],
            link: "https://github.com/Bibhuprasadbehera/Peptaloid-database",
            github: "https://github.com/Bibhuprasadbehera/Peptaloid-database",
            featured: true
        },
        {
            title: "PPI-Predictor",
            desc: "Bidirectional LSTMs and self-attention model to predict intra-protein interactions from amino acid sequences. Fast computational alternative to experimental PPI detection.",
            icon: <Dna size={40} className="text-bio-blue" />,
            tags: ["Deep Learning", "LSTM", "Proteins"],
            link: "https://github.com/Bibhuprasadbehera/PPI-Predictor",
            github: "https://github.com/Bibhuprasadbehera/PPI-Predictor",
            featured: true
        },
        {
            title: "Preprint Commons",
            desc: "A Database for Tracking Trends, Impact, and Collaboration in Open Science. Analyze preprint metadata and research impact.",
            icon: <FileText size={40} className="text-bio-purple" />,
            tags: ["Database", "Open Science", "Analytics"],
            link: "https://github.com/Bibhuprasadbehera/Preprint-commons",
            github: "https://github.com/Bibhuprasadbehera/Preprint-commons",
            featured: true
        },
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
        }
    ];

    return (
        <Section id="projects" title="Projects">
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <a
                        key={project.title}
                        href={project.link}
                        target={project.link !== '#' ? '_blank' : undefined}
                        rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                        className="group relative p-8 rounded-2xl bg-bio-panel border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 block"
                    >
                        {project.featured && (
                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-bio-green/20 border border-bio-green/30 text-bio-green text-xs font-mono">
                                Featured
                            </div>
                        )}

                        <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                            {project.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                        <p className="text-gray-400 mb-6 line-clamp-3">{project.desc}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 text-gray-300 border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {project.github && (
                            <div className="mt-6 flex items-center gap-2 text-sm text-bio-green font-mono">
                                <Github size={16} />
                                View on GitHub
                                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        )}
                    </a>
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
