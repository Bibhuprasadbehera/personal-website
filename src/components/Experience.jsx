import React from 'react';
import Section from './Section';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Researcher",
            company: "DEEPGENE C-CAMP Bangalore",
            period: "Sep 2024 - Aug 2025",
            desc: "Leveraging Whole Slide Imaging (WSI) as a Cost-Effective Alternative to High-Throughput, Expensive genetic testing for Cancer prediction (Startup Incubation)."
        },
        {
            title: "Internship",
            company: "C-CAMP Bangalore (Dr. Binay Panda)",
            period: "Mar 2024 - May 2024",
            desc: "Project: Use of WSI as a substitute for low cost pathology instead of high throughput and expensive methods to stratify patients."
        },
        {
            title: "Internship",
            company: "NISER (Dr. V Badireenath Konkimalla)",
            period: "May 2023 - July 2023",
            desc: "Project: Creation of Peptide Alkaloid Database. Worked on this multiple times."
        },
        {
            title: "Internship",
            company: "Tezpur University (Dr. Anupam Nath Jha)",
            period: "May 2022 - July 2022",
            desc: "Project: FKBP5: Its Impact on Stress, Sepsis, GR Signaling, and Expression in PD-L1."
        }
    ];

    const education = [
        {
            degree: "Int. M.Sc in Life Sciences",
            school: "NISER",
            period: "2019 - 2024"
        },
        {
            degree: "+2 Science CHSE",
            school: "Khallikote College, Brahmapur",
            period: "2017 - 2019"
        }
    ];

    return (
        <Section id="experience" title="Experience & Education">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Experience Column */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-bio-blue">
                        <Briefcase /> Work Experience
                    </h3>
                    <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative">
                                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-bio-dark border-2 border-bio-blue"></span>
                                <div className="mb-1 text-sm text-bio-blue font-mono flex items-center gap-2">
                                    <Calendar size={14} /> {exp.period}
                                </div>
                                <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                                <div className="text-gray-400 mb-2">{exp.company}</div>
                                <p className="text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-bio-green">
                        <GraduationCap /> Education
                    </h3>
                    <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
                        {education.map((edu, idx) => (
                            <div key={idx} className="relative">
                                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-bio-dark border-2 border-bio-green"></span>
                                <div className="mb-1 text-sm text-bio-green font-mono flex items-center gap-2">
                                    <Calendar size={14} /> {edu.period}
                                </div>
                                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                <div className="text-gray-400">{edu.school}</div>
                            </div>
                        ))}
                    </div>

                    {/* Achievements */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold mb-6 text-bio-purple">Achievements</h3>
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-bio-panel border border-white/5">
                                <div className="font-bold text-white">CSIR NET Qualified</div>
                                <div className="text-bio-purple text-sm">All India Rank: 246</div>
                            </div>
                            <div className="p-4 rounded-lg bg-bio-panel border border-white/5">
                                <div className="font-bold text-white">GATE Qualified</div>
                                <div className="text-bio-purple text-sm">All India Rank: 6999</div>
                            </div>
                            <div className="p-4 rounded-lg bg-bio-panel border border-white/5">
                                <div className="font-bold text-white">Kaggle Competition (Rain Prediction)</div>
                                <div className="text-bio-purple text-sm">6th Place (2024)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
