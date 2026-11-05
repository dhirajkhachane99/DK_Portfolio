import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Github, ExternalLink, Database, Cpu } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <span>Portfolio Projects</span>
            <span aria-hidden="true">·</span>
            <span>Technical Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
            Projects
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Hands-on data analysis and machine learning implementations.
          </p>
        </div>

        {/* 2 Focused Project Cards - Strictly Online Food Delivery and Product Recommendation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="project-card group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Header with Title and Category Icon */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 block mb-1">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 shrink-0">
                    {index === 0 ? (
                      <Database className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Cpu className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                </div>

                {/* Tools / Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 my-4">
                  {project.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md border border-neutral-200/70 dark:border-neutral-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Findings Callout */}
                <div className="p-3.5 mb-5 bg-neutral-50 dark:bg-neutral-800/40 rounded-xl border border-neutral-200/60 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">Key Finding: </span>
                  {project.findingsHighlight}
                </div>

                {/* Detailed Bullet Points from Resume with Bold Keywords */}
                <div className="space-y-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  {project.id === 'online-food-delivery-analysis' ? (
                    <>
                      <div className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>Analyzed food delivery orders to explore <strong className="font-semibold text-neutral-900 dark:text-white">city-wise order volumes</strong>, <strong className="font-semibold text-neutral-900 dark:text-white">revenue by food item</strong>, <strong className="font-semibold text-neutral-900 dark:text-white">restaurant performance</strong>, customer spending, and monthly trends.</span>
                      </div>
                      <div className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>Practiced <strong className="font-semibold text-neutral-900 dark:text-white">JOINs</strong>, <strong className="font-semibold text-neutral-900 dark:text-white">subqueries</strong>, <strong className="font-semibold text-neutral-900 dark:text-white">GROUP BY</strong>, <strong className="font-semibold text-neutral-900 dark:text-white">HAVING</strong>, <strong className="font-semibold text-neutral-900 dark:text-white">SUM</strong>, <strong className="font-semibold text-neutral-900 dark:text-white">COUNT DISTINCT</strong>, and <strong className="font-semibold text-neutral-900 dark:text-white">date functions</strong> to answer business questions.</span>
                      </div>
                      <div className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>Created <strong className="font-semibold text-neutral-900 dark:text-white">Google Sheets charts</strong> for revenue by city, customer distribution, popular food items, and monthly order trends.</span>
                      </div>
                      <div className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>Project findings included <strong className="font-semibold text-neutral-900 dark:text-white">Jaipur as a leading city by orders and revenue</strong>, with demand differences across food items and locations.</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>Used the <strong className="font-semibold text-neutral-900 dark:text-white">MovieLens 100K dataset</strong> to explore <strong className="font-semibold text-neutral-900 dark:text-white">user ratings</strong> and item popularity.</span>
                      </div>
                      <div className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>Implemented <strong className="font-semibold text-neutral-900 dark:text-white">collaborative filtering</strong> using <strong className="font-semibold text-neutral-900 dark:text-white">cosine similarity</strong> and <strong className="font-semibold text-neutral-900 dark:text-white">content-based recommendations</strong> using <strong className="font-semibold text-neutral-900 dark:text-white">TF-IDF</strong>.</span>
                      </div>
                      <div className="flex items-start gap-2.5 leading-relaxed">
                        <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>Built a workflow to recommend items from user input and <strong className="font-semibold text-neutral-900 dark:text-white">export recommendation results to CSV</strong>.</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="mt-8 pt-5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                <span className="text-xs text-neutral-400 font-mono">
                  {project.category}
                </span>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shimmer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:border-blue-500/50 text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
