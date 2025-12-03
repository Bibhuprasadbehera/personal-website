import React, { useState } from 'react';
import { Menu, X, Terminal, Dna } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = ['About', 'Publications', 'Experience', 'Projects', 'Failures', 'Contact'];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-bio-dark/80 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse group">
                    <div className="relative">
                        <Terminal className="w-8 h-8 text-bio-green absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Dna className="w-8 h-8 text-bio-purple group-hover:opacity-0 transition-opacity duration-300" />
                    </div>
                    <span className="self-center text-2xl font-mono font-bold whitespace-nowrap text-white">
                        Bibhu<span className="text-bio-green">.dev</span>
                    </span>
                </a>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? <X /> : <Menu />}
                </button>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-bio-panel md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-bio-green md:p-0 transition-colors duration-300 font-mono"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-bio-purple mr-1">&lt;</span>
                                    {item}
                                    <span className="text-bio-purple ml-1">/&gt;</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
