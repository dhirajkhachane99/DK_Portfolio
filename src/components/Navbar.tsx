import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Sun, Moon, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Animated DK Monogram (Strict single brand element) */}
          <a
            href="#about"
            className="group relative inline-flex items-center justify-center whitespace-nowrap shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
            aria-label="DK - Dhiraj Khachane"
            title="Dhiraj Khachane Portfolio"
          >
            {/* Ambient rotating gradient glow */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 opacity-60 blur-xs group-hover:opacity-100 transition-opacity animate-pulse-opacity"></div>
            
            {/* Animated Badge Container */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs group-hover:border-blue-500/50 transition-colors">
              <span className="font-extrabold text-base tracking-wider bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform font-mono inline-block">
                DK
              </span>
              {/* Animated Live Pulse Dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white dark:border-neutral-950 animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white dark:border-neutral-950"></span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-line, unboxed, subtle hover) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors whitespace-nowrap shrink-0 relative py-1 text-[13px] tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              className="p-2 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-850 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="btn-shimmer hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 hover:border-blue-500/40 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer shadow-xs hover:shadow"
            >
              <FileText className="w-3.5 h-3.5 text-blue-500" />
              <span>Resume</span>
            </button>

            {/* Primary Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="btn-shimmer inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-sm hover:shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 rounded-lg"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
