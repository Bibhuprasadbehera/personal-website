import React from 'react';
import Section from './Section';
import { Code, FlaskConical, Database, Brain } from 'lucide-react';

const About = () => {
    const skills = [
        {
            title: 'Dry Lab / Computational',
            icon: Code,
            color: 'green',
            items: ["ML/DL (PyTorch, TensorFlow)", "Object Detection", "Multimodal Learning", "NGS Analysis (scRNA, bulkRNA)", "Full Stack Dev (React, Django)", "Bioinformatics", "Python & R", "Shell Scripting"]
        },
        {
            title: 'Wet Lab / Experimental',
            icon: FlaskConical,
            color: 'purple',
            items: ["Molecular Biology (Cloning, PCR)", "Gel Electrophoresis", "Protein Analysis (SDS-PAGE, Western Blot)", "Cell Culture (Mammalian lines)", "Microscopy (Fluorescence, Confocal)", "Aseptic Techniques"]
        }
    ];

    return (
        <Section id="about" title="About Me">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-gray-300">
                    <p>
                        I am a researcher bridging the gap between <span className="text-bio-green font-bold">computational intelligence</span> and <span className="text-bio-purple font-bold">biological complexity</span>.
                    </p>
                    <p>
                        With a background in Life Sciences and deep expertise in Machine Learning, I build tools that decode biological data. My work ranges from developing databases for peptide alkaloids to creating neural architectures for protein-protein interaction prediction.
                    </p>
                    <p>
                        Currently, I'm working on leveraging <span className="text-bio-blue">Whole Slide Imaging (WSI)</span> as a cost-effective alternative for cancer patient stratification.
                    </p>
                </div>

                <div className="grid gap-6">
                    {skills.map(({ title, icon: Icon, color, items }) => (
                        <div key={title} className={`p-6 rounded-xl bg-bio-panel border border-bio-${color}/20 hover:border-bio-${color}/50 transition-colors`}>
                            <div className={`flex items-center gap-3 mb-4 text-bio-${color}`}>
                                <Icon size={24} />
                                <h3 className="text-xl font-bold font-mono">{title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill, idx) => (
                                    <span key={idx} className={`px-3 py-1 text-sm rounded-full bg-bio-${color}/10 text-bio-${color} border border-bio-${color}/20`}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
