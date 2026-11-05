import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Download, FileText, Github, Linkedin, Mail, MapPin, Sparkles, Phone } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Unboxed Status Kicker with clean dot */}
            <div className="flex items-center gap-2.5 text-xs font-medium text-blue-600 dark:text-blue-400 mb-4 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15] text-balance mb-6">
              Hi, I'm {PERSONAL_INFO.name}. <br />
              <span className="text-neutral-500 dark:text-neutral-400 font-semibold text-2xl sm:text-3xl md:text-4xl block mt-2">
                Turning raw data into clear, strategic business insights.
              </span>
            </h1>

            {/* Lead Bio Description */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
              B.E. in Information Technology with hands-on practice in SQL data extraction, Google Sheets & Power BI dashboarding, Python data pipelines, and machine learning. Experienced in analyzing transactional patterns, customer spending, and revenue metrics.
            </p>

            {/* Location & Quick Meta (Unboxed text with typographic separators) */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-8">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <span>B.E. IT (2022 – 2025)</span>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <span>SQL · Python · Power BI · Excel</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                onClick={onExploreProjects}
                className="btn-shimmer group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenResume}
                className="btn-shimmer inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-800 hover:border-blue-500/40 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-500" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Bar */}
            <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:-translate-y-0.5 hover:shadow-sm transition-all"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:-translate-y-0.5 hover:shadow-sm transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-xl hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:-translate-y-0.5 hover:shadow-sm transition-all"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2 rounded-xl hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:-translate-y-0.5 hover:shadow-sm transition-all"
                title="Call Dhiraj"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: User Portrait Container with Circular Frame & Opacity Animations */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative flex items-center justify-center p-4 sm:p-6 md:p-8">
              {/* Layer 1: Ambient Pulsing Opacity Halo */}
              <div className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[30rem] md:h-[30rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-blue-500/15 dark:bg-blue-600/20 blur-3xl animate-pulse-opacity pointer-events-none"></div>

              {/* Layer 2: Rotating Outer Dashed Circular Ring with Opacity */}
              <div className="absolute w-88 h-88 sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] lg:w-[35rem] lg:h-[35rem] rounded-full border border-dashed border-blue-500/30 dark:border-blue-400/25 animate-spin-slow pointer-events-none opacity-60 hover:opacity-100 transition-opacity"></div>

              {/* Layer 3: Counter-Rotating Fine Ring with Decorative Nodes */}
              <div className="absolute w-80 h-80 sm:w-[26rem] sm:h-[26rem] md:w-[29rem] md:h-[29rem] lg:w-[32rem] lg:h-[32rem] rounded-full border border-neutral-300/40 dark:border-neutral-700/40 animate-spin-reverse pointer-events-none">
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500"></span>
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400/70"></span>
                <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-indigo-500/60"></span>
              </div>

              {/* Layer 4: Floating Circular Image Container (Bigger Size) */}
              <div className="relative group animate-float">
                {/* Glowing border ring */}
                <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-[23rem] md:h-[23rem] lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem] rounded-full p-2.5 bg-gradient-to-tr from-blue-500/40 via-neutral-200/50 to-blue-400/40 dark:from-blue-600/40 dark:via-neutral-800 dark:to-neutral-700/50 shadow-2xl backdrop-blur-sm">
                  {/* Inner Circular Avatar */}
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-neutral-100 dark:bg-neutral-800 border-2 border-white dark:border-neutral-900 shadow-inner">
                    <img
                      src={PERSONAL_INFO.profilePhoto}
                      alt="Dhiraj Khachane - Data Analyst"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-[center_16%] filter saturate-[1.04] contrast-[1.02] group-hover:scale-108 transition-all duration-700 group-hover:opacity-95"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling;
                        if (fallback) (fallback as HTMLElement).style.display = 'flex';
                      }}
                    />
                    <div
                      style={{ display: 'none' }}
                      className="w-full h-full flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 p-6 text-center"
                    >
                      <span className="text-4xl font-bold mb-2">DK</span>
                      <span className="text-sm font-semibold">{PERSONAL_INFO.name}</span>
                    </div>

                    {/* Circular Opacity Vignette */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none"></div>

                    {/* Bottom name badge inside circle */}
                    <div className="absolute bottom-5 inset-x-0 text-center text-white pointer-events-none px-2">
                      <p className="text-sm font-bold tracking-tight drop-shadow-md">{PERSONAL_INFO.name}</p>
                      <p className="text-xs text-blue-200 drop-shadow">Data Analyst · IT Engineer</p>
                    </div>
                  </div>
                </div>

                {/* Floating Orbit Pill Badge */}
                <div className="absolute -bottom-2 -right-1 sm:right-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200 animate-pulse-opacity">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono text-xs">B.E. IT · CGPA 7.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
