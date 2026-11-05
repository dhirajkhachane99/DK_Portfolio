import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const MetricsStrip: React.FC = () => {
  return (
    <section className="border-y border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 font-mono tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
