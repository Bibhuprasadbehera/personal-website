import React from 'react';
import Section from './Section';
import { Dna, Brain, Globe, Activity, Lightbulb, Database, Network, Search, Share2, Microscope, Layers } from 'lucide-react';

const ResearchInterests = () => {
    const interests = [
        {
            title: "Computational Biology & Bioinformatics",
            icon: Dna,
            color: "green",
            topics: [
                {
                    subtitle: "Genomic and Multi-Omics Data Analysis",
                    desc: "Leveraging single-cell RNA-seq, bulk RNA-seq, and spatial omics to uncover biological insights, particularly in cancer, drug resistance, and disease mechanisms.",
                    example: "scRNA-seq analysis for Elsevier book chapter, NGS pipelines at Shodhaka Life Sciences"
                },
                {
                    subtitle: "Database Development and Curation",
                    desc: "Designing user-friendly, open-access biological databases to facilitate drug discovery and genomics research.",
                    example: "Peptaloid—first database from NISER, published in ACS Journal of Chemical Information and Modeling"
                },
                {
                    subtitle: "Protein Interaction Networks",
                    desc: "Using machine learning and structural bioinformatics to predict and analyze protein-protein interactions (PPIs) and their roles in disease.",
                    example: "DeepMotifInteract—a motif-aware neural network for PPI prediction"
                }
            ]
        },
        {
            title: "Machine Learning and AI in Biology",
            icon: Brain,
            color: "blue",
            topics: [
                {
                    subtitle: "Predictive Modeling for Biology and Medicine",
                    desc: "Developing AI/ML models to predict drug responses, protein interactions, and disease outcomes.",
                    example: "DeepMotifInteract, Kaggle competition on rain prediction (6th place), H&E image analysis for cancer stratification at DEEPGENE"
                },
                {
                    subtitle: "Translational AI",
                    desc: "Bridging computational predictions with clinical applications, such as using deep learning for pathology image analysis to improve diagnostics.",
                    example: "WSI-based cancer stratification model at DEEPGENE"
                },
                {
                    subtitle: "Drug Repurposing and Chemoinformatics",
                    desc: "Applying machine learning to cheminformatics for identifying novel drug targets and repurposing existing drugs.",
                    example: "Peptaloid database for peptide alkaloids, drug design projects"
                }
            ]
        },
        {
            title: "Open Science and Translational Research",
            icon: Globe,
            color: "purple",
            topics: [
                {
                    subtitle: "Open-Access Tools and Resources",
                    desc: "Committed to open science by developing tools and databases that are freely accessible to the global research community.",
                    example: "Peptaloid, Preprint Commons"
                },
                {
                    subtitle: "Translational Bioinformatics",
                    desc: "Integrating computational insights with experimental and clinical data to drive personalized medicine and therapeutic strategies.",
                    example: "Collaborations with pathologists at DEEPGENE, scRNA-seq analysis for clinical applications"
                },
                {
                    subtitle: "Science Communication",
                    desc: "Making complex biological data accessible and actionable for researchers, clinicians, and the public.",
                    example: "Presentations at BGCI and Biocuration conferences, teaching workshops on scRNA-seq analysis"
                }
            ]
        },
        {
            title: "Cancer Biology and Precision Medicine",
            icon: Activity,
            color: "green",
            topics: [
                {
                    subtitle: "Tumor Heterogeneity and Drug Resistance",
                    desc: "Studying genomic and transcriptomic variations in cancer to understand drug resistance mechanisms and identify personalized treatment strategies.",
                    example: "Analysis of scRNA-seq data, projects on drug persistence and phenotypic plasticity"
                },
                {
                    subtitle: "Bioimage Analysis for Diagnostics",
                    desc: "Using AI-driven image analysis (e.g., H&E-stained slides) to develop low-cost, scalable diagnostic tools for cancer and other diseases.",
                    example: "CNN model for pathology image analysis at DEEPGENE"
                },
                {
                    subtitle: "Systems Biology Approaches",
                    desc: "Integrating multi-omics data (genomics, proteomics, metabolomics) to model disease pathways and identify therapeutic targets.",
                    example: "Metagenomics analysis at Shodhaka Life Sciences, proteomics-informed projects"
                }
            ]
        },
        {
            title: "Entrepreneurship and Innovation in Science",
            icon: Lightbulb,
            color: "blue",
            topics: [
                {
                    subtitle: "Startup Mindset",
                    desc: "Exploring innovative solutions to bridge gaps in healthcare and research, such as AI-driven diagnostics and open-source tools.",
                    example: "Attempt to launch a startup for H&E-based cancer prediction, drag-and-drop NGS tool prototype"
                },
                {
                    subtitle: "Interdisciplinary Collaboration",
                    desc: "Working at the intersection of computational biology, wet-lab experiments, and clinical applications to drive translational research.",
                    example: "Collaborations with pathologists, bioinformaticians, and clinicians at DEEPGENE and Shodhaka Life Sciences"
                }
            ]
        }
    ];

    return (
        <Section id="research-interests" title="Research Interests">
            <div className="space-y-12">
                {interests.map((area, index) => (
                    <div key={area.title} className="relative pl-8 border-l-2 border-white/10">
                        <span className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-bio-dark border-2 border-bio-${area.color}`} />

                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-2 rounded-lg bg-bio-${area.color}/10 text-bio-${area.color}`}>
                                <area.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {area.topics.map((topic) => (
                                <div key={topic.subtitle} className="p-5 rounded-xl bg-bio-panel border border-white/5 hover:border-bio-green/30 transition-all hover:-translate-y-1">
                                    <h4 className={`text-lg font-bold text-bio-${area.color} mb-3`}>{topic.subtitle}</h4>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {topic.desc}
                                    </p>
                                    <div className="text-xs text-gray-500 font-mono border-t border-white/5 pt-3">
                                        <span className="text-bio-green">Example:</span> {topic.example}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default ResearchInterests;
