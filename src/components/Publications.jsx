import React from 'react';
import Section from './Section';
import { ExternalLink, BookOpen, FileText, Database } from 'lucide-react';

const Publications = () => {
    const publications = [
        {
            title: "Peptaloid: A Comprehensive Database for Exploring Peptide Alkaloid",
            journal: "Journal of Chemical Information and Modeling (Accepted)",
            role: "First Author",
            type: "Research Article",
            link: "https://pubs.acs.org/doi/10.1021/acs.jcim.4c01667",
            dbLink: "https://peptaloid.niser.ac.in"
        },
        {
            title: "Single Cell RNA Sequencing and Data Analysis",
            journal: "Encyclopedia of Bioinformatics and Computational Biology, 2nd Edition, Elsevier (in press)",
            role: "Third Author",
            type: "Book Chapter",
            link: "https://doi.org/10.1016/B978-0-323-95502-7.00209-8"
        },
        {
            title: "Preprint Commons: A Database for Tracking Trends, Impact, and Collaboration in Open Science",
            journal: "Manuscript in communication",
            role: "First Author",
            type: "Research Article"
        },
        {
            title: "DeepMotifInteract: A Motif-Aware Neural Architecture for PPI Prediction",
            journal: "Manuscript in communication",
            role: "Equal Contribution",
            type: "Research Article"
        }
    ];

    const conferences = [
        "1st AIRSA-IRCON conference 2025 (AIIMS DELHI) - Poster Presentation",
        "10th BGCI conference 2025 - (RIMS RANCHI) - Speaker",
        "17th Biocuration conf 2024 (IBDC-RCB DELHI) - Poster presentation",
        "Accelerating Biology 2025: (CDAC PUNE) - Poster presentation",
        "NCURB 2024 (IISER TVM) - Speaker"
    ];

    return (
        <Section id="publications" title="Publications & Research">
            <div className="space-y-8">
                <div className="grid gap-6">
                    {publications.map((pub) => (
                        <div key={pub.title} className="group relative p-6 rounded-xl bg-bio-panel border border-white/5 hover:border-bio-green/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,157,0.1)]">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`px-2 py-0.5 text-xs rounded border ${pub.type === 'Research Article' ? 'border-bio-blue text-bio-blue bg-bio-blue/10' : 'border-bio-purple text-bio-purple bg-bio-purple/10'}`}>
                                            {pub.type}
                                        </span>
                                        <span className="text-xs text-gray-500 font-mono">{pub.role}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-bio-green transition-colors">
                                        {pub.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">{pub.journal}</p>
                                </div>
                                <div className="flex gap-3">
                                    {pub.link && (
                                        <a href={pub.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-bio-green/20 hover:text-bio-green transition-colors" title="View Paper">
                                            <FileText size={20} />
                                        </a>
                                    )}
                                    {pub.dbLink && (
                                        <a href={pub.dbLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-bio-blue/20 hover:text-bio-blue transition-colors" title="View Database">
                                            <Database size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-bio-purple">#</span> Conferences
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {conferences.map((conf) => (
                            <div key={conf} className="p-4 rounded-lg bg-bio-panel/50 border border-white/5 hover:border-bio-purple/30 transition-colors flex items-start gap-3">
                                <div className="mt-1 min-w-[8px] h-[8px] rounded-full bg-bio-purple"></div>
                                <p className="text-gray-300 text-sm">{conf}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Publications;
