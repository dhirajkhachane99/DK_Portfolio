import React, { useState } from 'react';
import { EDUCATION, CERTIFICATIONS, Certification } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, ExternalLink, Eye, ShieldCheck } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCertificate = (cert: Certification) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section id="education" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Academic Credentials */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-8">
              Education & Degrees
            </h2>

            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{edu.location}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200 font-mono">
                      {edu.grade}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                    {edu.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold shrink-0">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Certifications & Workshops */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <Award className="w-4 h-4" />
                <span>Continuous Growth</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>All Verified & Linked</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 mb-8">
              Certifications & Credentials
            </h2>

            <div className="space-y-3.5">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 rounded-xl p-4.5 sm:p-5 shadow-xs transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                        {cert.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                        <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                          {cert.issuer}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono">{cert.issueDate}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-[10px] text-neutral-400">ID: {cert.credentialId}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-2.5">
                        {cert.skills.map((s, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Interactive Certificate View & Link Controls */}
                  <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleOpenCertificate(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-shimmer inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-750 border border-neutral-200 dark:border-neutral-700 rounded-lg transition-colors"
                      title="Open Official Credential Verification Link"
                    >
                      <span>Verify Link</span>
                      <ExternalLink className="w-3 h-3 text-neutral-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      <CertificateModal
        isOpen={isModalOpen}
        certificate={selectedCert}
        onClose={handleCloseModal}
      />
    </section>
  );
};

