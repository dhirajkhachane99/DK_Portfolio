import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Database, 
  LineChart, 
  Code2, 
  LayoutDashboard, 
  Check, 
  Sparkles, 
  Pause, 
  Play, 
  RotateCw, 
  Orbit,
  Layers
} from 'lucide-react';
import {
  PythonLogo,
  SqlLogo,
  PowerBiLogo,
  GoogleSheetsLogo,
  ExcelLogo,
  ScikitLearnLogo,
  GitLogo,
  VsCodeLogo,
  PandasLogo,
  PostgreSqlLogo
} from './ToolLogos';

interface OrbitSkill {
  name: string;
  category: string;
  level: number;
  highlight: string;
  logoType: 'sql' | 'python' | 'bi' | 'sheets' | 'excel' | 'sklearn' | 'git' | 'vscode' | 'pandas' | 'postgres';
}

export const SkillsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<OrbitSkill | null>(null);
  const [viewMode, setViewMode] = useState<'orbit' | 'grid'>('orbit');

  const categoryIcons = [
    <LineChart className="w-5 h-5 text-blue-500" />,
    <Database className="w-5 h-5 text-blue-500" />,
    <Code2 className="w-5 h-5 text-blue-500" />,
    <LayoutDashboard className="w-5 h-5 text-blue-500" />,
  ];

  // Helper to render the corresponding tool logo
  const renderToolLogo = (type: OrbitSkill['logoType'], sizeClass = "w-6 h-6 sm:w-7 sm:h-7") => {
    switch (type) {
      case 'python':
        return <PythonLogo className={sizeClass} />;
      case 'sql':
        return <SqlLogo className={sizeClass} />;
      case 'bi':
        return <PowerBiLogo className={sizeClass} />;
      case 'sheets':
        return <GoogleSheetsLogo className={sizeClass} />;
      case 'excel':
        return <ExcelLogo className={sizeClass} />;
      case 'sklearn':
        return <ScikitLearnLogo className={sizeClass} />;
      case 'git':
        return <GitLogo className={sizeClass} />;
      case 'vscode':
        return <VsCodeLogo className={sizeClass} />;
      case 'pandas':
        return <PandasLogo className={sizeClass} />;
      case 'postgres':
        return <PostgreSqlLogo className={sizeClass} />;
      default:
        return <Database className={sizeClass} />;
    }
  };

  // Inner ring skills (4 core tools, perfectly spaced at 90-degree intervals around a true vertical circle)
  const innerRingSkills: (OrbitSkill & { x: number; y: number })[] = [
    { name: "Google Sheets", category: "Data Visualization", level: 92, highlight: "Formulas, pivot tables, revenue breakdown & order trends", logoType: "sheets", x: 50, y: 0 },
    { name: "SQL", category: "Database & Queries", level: 95, highlight: "Multi-table JOINs, GROUP BY, aggregations, subqueries & CTEs", logoType: "sql", x: 100, y: 50 },
    { name: "Python", category: "Programming & ML", level: 88, highlight: "Data analysis, automation scripts, NumPy & machine learning", logoType: "python", x: 50, y: 100 },
    { name: "Power BI", category: "Business Intelligence", level: 82, highlight: "Interactive dashboarding, DAX measures & KPI reporting", logoType: "bi", x: 0, y: 50 },
  ];

  // Outer ring skills (6 tools & libraries, spaced at 60-degree intervals on the circular track)
  const outerRingSkills: (OrbitSkill & { x: number; y: number })[] = [
    { name: "Scikit-Learn", category: "Machine Learning", level: 82, highlight: "TF-IDF vectorizer, cosine similarity & classification models", logoType: "sklearn", x: 100, y: 50 },
    { name: "Pandas", category: "Data Manipulation", level: 90, highlight: "Data sanitization, null handling, aggregation & feature engineering", logoType: "pandas", x: 75, y: 93.3 },
    { name: "Microsoft Excel", category: "Spreadsheets", level: 88, highlight: "VLOOKUP, XLOOKUP, pivot reporting & financial calculations", logoType: "excel", x: 25, y: 93.3 },
    { name: "PostgreSQL", category: "Relational Database", level: 86, highlight: "Relational schemas, constraints, indexing & analytical queries", logoType: "postgres", x: 0, y: 50 },
    { name: "Git & GitHub", category: "Version Control", level: 85, highlight: "Source code management, commits, branching & open repositories", logoType: "git", x: 25, y: 6.7 },
    { name: "VS Code", category: "Development Environment", level: 90, highlight: "Python scripting, SQL extensions, debugging & linting", logoType: "vscode", x: 75, y: 6.7 },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-neutral-50/50 dark:bg-neutral-900/20 border-t border-neutral-200 dark:border-neutral-800/80 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Competencies</span>
              <span aria-hidden="true">·</span>
              <span>Technical Toolkit</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
              Skills in motion.
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Hover over or click any orbiting tool logo to inspect proficiency, features, and real project application.
            </p>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="flex items-center p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <button
                onClick={() => setViewMode('orbit')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  viewMode === 'orbit'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Orbit className="w-3.5 h-3.5 text-blue-500" />
                <span>Circular Orbit</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow-xs font-semibold'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span>Matrix Grid</span>
              </button>
            </div>

            {viewMode === 'orbit' && (
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs"
                title={isPaused ? "Resume Circular Motion" : "Pause Circular Motion"}
                aria-label={isPaused ? "Resume Circular Motion" : "Pause Circular Motion"}
              >
                {isPaused ? <Play className="w-4 h-4 text-emerald-500" /> : <Pause className="w-4 h-4 text-neutral-400" />}
              </button>
            )}
          </div>
        </div>

        {/* VIEW 1: Interactive Circular Orbit Wheel with Tool Logos */}
        {viewMode === 'orbit' && (
          <div className="relative mb-14 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-12 shadow-sm overflow-hidden flex flex-col items-center">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-3xl pointer-events-none animate-pulse-opacity"></div>

            {/* Orbit Container (Strictly 1:1 circular aspect ratio, centered) */}
            <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] my-6 group">
              {/* STATIC GUIDE RINGS (Strictly centered 1:1 circles) */}
              {/* Outer Track Ring */}
              <div className="absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-neutral-300/60 dark:border-neutral-700/60 pointer-events-none"></div>

              {/* Inner Track Ring */}
              <div className="absolute inset-0 m-auto w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] rounded-full border border-neutral-300/40 dark:border-neutral-700/40 pointer-events-none"></div>

              {/* CENTER HUB */}
              <div className="absolute inset-0 m-auto z-20 flex flex-col items-center justify-center w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30 p-2 text-center animate-pulse-opacity">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 text-blue-100" />
                <span className="text-[10px] sm:text-[11px] font-bold leading-tight uppercase tracking-tight">
                  Data Core
                </span>
                <span className="text-[8px] text-blue-200 font-mono">DK Tools</span>
              </div>

              {/* ROTATING INNER ORBIT (Clockwise, Synchronized 24s) */}
              <div
                className={`absolute inset-0 m-auto w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] rounded-full z-10 ${
                  isPaused ? '[animation-play-state:paused]' : 'animate-orbit-inner'
                } group-hover:[animation-play-state:paused]`}
                style={{ transformOrigin: 'center center' }}
              >
                {innerRingSkills.map((skill, idx) => {
                  return (
                    <div
                      key={idx}
                      className="absolute"
                      style={{
                        left: `${skill.x}%`,
                        top: `${skill.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      {/* Counter-rotating container with matching 24s speed to keep logo 100% upright */}
                      <div
                        className={isPaused ? '[animation-play-state:paused]' : 'animate-orbit-inner-counter'}
                        style={{ transformOrigin: 'center center' }}
                      >
                        <div className="relative group/node flex flex-col items-center">
                          <button
                            onClick={() => setSelectedSkill(skill)}
                            className={`p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-center shadow-md hover:scale-125 active:scale-95 ${
                              selectedSkill?.name === skill.name
                                ? 'bg-white dark:bg-neutral-800 border-blue-500 ring-4 ring-blue-500/30 shadow-lg shadow-blue-500/25 scale-110'
                                : 'bg-white/95 dark:bg-neutral-900/95 border-neutral-200 dark:border-neutral-700 hover:border-blue-500 hover:shadow-lg'
                            }`}
                            title={skill.name}
                            aria-label={skill.name}
                          >
                            {renderToolLogo(skill.logoType, "w-6 h-6 sm:w-7 sm:h-7")}
                          </button>

                          {/* Hover Tooltip Label */}
                          <div className="absolute -bottom-6 pointer-events-none opacity-0 group-hover/node:opacity-100 transition-opacity duration-200 whitespace-nowrap z-30">
                            <span className="px-2 py-0.5 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-[10px] font-semibold font-mono shadow-md">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ROTATING OUTER ORBIT (Counter-Clockwise, Synchronized 36s) */}
              <div
                className={`absolute inset-0 m-auto w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full z-10 ${
                  isPaused ? '[animation-play-state:paused]' : 'animate-orbit-outer'
                } group-hover:[animation-play-state:paused]`}
                style={{ transformOrigin: 'center center' }}
              >
                {outerRingSkills.map((skill, idx) => {
                  return (
                    <div
                      key={idx}
                      className="absolute"
                      style={{
                        left: `${skill.x}%`,
                        top: `${skill.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      {/* Counter-rotating container with matching 36s speed to keep logo 100% upright */}
                      <div
                        className={isPaused ? '[animation-play-state:paused]' : 'animate-orbit-outer-counter'}
                        style={{ transformOrigin: 'center center' }}
                      >
                        <div className="relative group/node flex flex-col items-center">
                          <button
                            onClick={() => setSelectedSkill(skill)}
                            className={`p-2 sm:p-2.5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-center shadow-md hover:scale-125 active:scale-95 ${
                              selectedSkill?.name === skill.name
                                ? 'bg-white dark:bg-neutral-800 border-blue-500 ring-4 ring-blue-500/30 shadow-lg shadow-blue-500/25 scale-110'
                                : 'bg-white/95 dark:bg-neutral-900/95 border-neutral-200 dark:border-neutral-750 hover:border-blue-500 hover:shadow-lg'
                            }`}
                            title={skill.name}
                            aria-label={skill.name}
                          >
                            {renderToolLogo(skill.logoType, "w-5 h-5 sm:w-6 sm:h-6")}
                          </button>

                          {/* Hover Tooltip Label */}
                          <div className="absolute -bottom-6 pointer-events-none opacity-0 group-hover/node:opacity-100 transition-opacity duration-200 whitespace-nowrap z-30">
                            <span className="px-2 py-0.5 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 text-[10px] font-semibold font-mono shadow-md">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Circular Orbit Instruction & Selected Skill Details Card */}
            <div className="w-full max-w-lg mt-4 text-center">
              {selectedSkill ? (
                <div className="p-4 sm:p-5 bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xs animate-in fade-in duration-200 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white dark:bg-neutral-800 shadow-xs border border-neutral-200 dark:border-neutral-700">
                        {renderToolLogo(selectedSkill.logoType, "w-6 h-6")}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
                          {selectedSkill.name}
                        </h4>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                          {selectedSkill.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                        {selectedSkill.level}%
                      </span>
                      <p className="text-[10px] text-neutral-400 uppercase font-mono">Proficiency</p>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                    {selectedSkill.highlight}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Tip: Hovering over the orbit pauses circular rotation. Click any tool logo to view details.
                </p>
              )}
            </div>
          </div>
        )}

        {/* VIEW 2 / Detailed Grid Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-start gap-3.5 mb-5">
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 shrink-0">
                  {categoryIcons[idx]}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills List with Proficiency Meters */}
              <div className="space-y-3.5">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-neutral-400 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Workflow Badges */}
        <div className="mt-12 p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
              Toolbox & Working Environment
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Software and platforms utilized on daily project workflows.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { name: 'Power BI', logo: <PowerBiLogo className="w-3.5 h-3.5" /> },
              { name: 'Google Sheets', logo: <GoogleSheetsLogo className="w-3.5 h-3.5" /> },
              { name: 'Microsoft Excel', logo: <ExcelLogo className="w-3.5 h-3.5" /> },
              { name: 'SQL & PostgreSQL', logo: <PostgreSqlLogo className="w-3.5 h-3.5" /> },
              { name: 'Python 3', logo: <PythonLogo className="w-3.5 h-3.5" /> },
              { name: 'Scikit-learn', logo: <ScikitLearnLogo className="w-3.5 h-3.5" /> },
              { name: 'Pandas & NumPy', logo: <PandasLogo className="w-3.5 h-3.5" /> },
              { name: 'Git & GitHub', logo: <GitLogo className="w-3.5 h-3.5" /> },
              { name: 'VS Code', logo: <VsCodeLogo className="w-3.5 h-3.5" /> },
            ].map((tool, i) => (
              <span
                key={i}
                className="btn-shimmer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium font-mono text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200/70 dark:border-neutral-700/60 hover:-translate-y-0.5 hover:border-blue-500/50 transition-all cursor-default"
              >
                {tool.logo}
                <span>{tool.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
