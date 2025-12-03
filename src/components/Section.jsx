import React from 'react';

const Section = ({ id, title, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 px-4 ${className}`}>
            <div className="max-w-6xl mx-auto">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        <span className="text-bio-green">&lt;</span>
                        {title}
                        <span className="text-bio-green">/&gt;</span>
                    </h2>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
