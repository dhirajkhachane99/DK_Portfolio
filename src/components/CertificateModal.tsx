import React, { useState } from 'react';
import { Certification, PERSONAL_INFO } from '../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  Award, 
  CheckCircle2, 
  Copy, 
  Check, 
  Calendar, 
  ShieldCheck, 
  Share2,
  Linkedin
} from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  certificate: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  certificate,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !certificate) return null;

  const handleCopyId = () => {
    navigator.clipboard.writeText(certificate.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                Verified Credential Details
              </h3>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                Issued to {PERSONAL_INFO.name}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto max-h-[75vh]">
          {/* Certificate Certificate Presentation Frame */}
          <div className="relative rounded-2xl border-2 border-dashed border-blue-500/30 bg-radial from-blue-50/40 via-white to-amber-50/20 dark:from-blue-950/20 dark:via-neutral-900 dark:to-amber-950/10 p-6 sm:p-8 text-center shadow-xs">
            {/* Top Seal */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Verified Certificate of Completion</span>
            </div>

            <p className="text-[11px] uppercase tracking-widest text-neutral-500 font-mono">
              This is to verify that
            </p>

            <h4 className="text-xl sm:text-2xl font-extrabold text-neutral-950 dark:text-white mt-1.5 tracking-tight font-serif">
              {PERSONAL_INFO.name}
            </h4>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 max-w-md mx-auto">
              has successfully achieved certification in
            </p>

            <h5 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mt-2 px-4 py-2 rounded-xl bg-blue-50/50 dark:bg-blue-950/30 inline-block max-w-lg">
              {certificate.title}
            </h5>

            <p className="text-xs text-neutral-700 dark:text-neutral-300 mt-3 max-w-lg mx-auto leading-relaxed">
              {certificate.description}
            </p>

            {/* Issuer & Date Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-neutral-600 dark:text-neutral-400 mt-5 pt-4 border-t border-neutral-200/70 dark:border-neutral-800">
              <div className="flex items-center gap-1.5">
                <span className="text-neutral-400">Issuer:</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100">{certificate.issuer}</span>
              </div>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                <span>{certificate.issueDate}</span>
              </div>
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-700">·</span>
              <div className="flex items-center gap-1 font-mono text-[11px]">
                <span className="text-neutral-400">ID:</span>
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{certificate.credentialId}</span>
              </div>
            </div>
          </div>

          {/* Validated Skills */}
          <div>
            <h6 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2.5">
              Competencies & Skills Validated
            </h6>
            <div className="flex flex-wrap gap-1.5">
              {certificate.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg border border-neutral-200/60 dark:border-neutral-700/60"
                >
                  <CheckCircle2 className="w-3 h-3 text-blue-500" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Direct Verification Links & Copy Credential ID */}
          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/70 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                <span>Verification Source:</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {certificate.verificationPlatform || certificate.issuer}
                </span>
              </div>
              <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
                Credential ID: {certificate.credentialId}
              </div>
            </div>

            <button
              onClick={handleCopyId}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied ID' : 'Copy ID'}</span>
            </button>
          </div>
        </div>

        {/* Action Footer */}
        <div className="px-5 py-3.5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex flex-wrap items-center justify-between gap-3">
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-600" />
            <span>View All on LinkedIn Profile</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-shimmer inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xs hover:shadow transition-all cursor-pointer"
            >
              <span>Open Certificate Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
