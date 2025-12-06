import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ResearchInterests from './components/ResearchInterests';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Collaboration from './components/Collaboration';
import Contact from './components/Contact';
import Failures from './components/Failures';

function App() {
  console.log("Rendering App component");
  return (
    <>
      <div className="min-h-screen bg-bio-dark text-bio-text selection:bg-bio-green selection:text-bio-dark font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <ResearchInterests />
          <Publications />
          <Experience />
          <Projects />
          <Failures />
          <Collaboration />
          <Contact />
        </main>

        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-bio-panel">
          <p>&copy; {new Date().getFullYear()} Bibhu Prasad Behera. Built with React & Tailwind.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
