import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 ${className}`}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="text-bio-green">&lt;</span>
                        {title}
                        <span className="text-bio-green">/&gt;</span>
                    </h2>
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
