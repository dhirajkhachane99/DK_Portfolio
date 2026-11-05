import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const darkPref = savedTheme === 'dark';
      setIsDark(darkPref);
      document.documentElement.classList.toggle('dark', darkPref);
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative">
      {/* Subtle minimalist grid background texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.018] dark:opacity-[0.035]" 
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Areas */}
      <main className="flex-1 relative z-10">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onExploreProjects={handleExploreProjects}
        />

        <MetricsStrip />

        <ProjectsSection />

        <SkillsSection />

        <EducationCertifications />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
