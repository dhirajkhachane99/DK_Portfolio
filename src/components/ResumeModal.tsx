import React, { useState } from 'react';
import { PERSONAL_INFO, CERTIFICATIONS, EDUCATION, PROJECTS, Certification } from '../data/portfolioData';
import { generateAtsPdf, downloadAtsWordDoc } from '../utils/atsResumeGenerator';
import { CertificateModal } from './CertificateModal';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Eye, 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  Github, 
  Linkedin,
  MapPin,
  Sparkles,
  FileCode,
  ShieldCheck
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'document' | 'raw-pdf'>('document');
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);
  const [previewCert, setPreviewCert] = useState<Certification | null>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    try {
      generateAtsPdf();
      setDownloadSuccess('Digital ATS PDF with Hyperlinks Downloaded!');
      setTimeout(() => setDownloadSuccess(null), 3000);
    } catch (err) {
      console.error(err);
      const a = document.createElement('a');
      a.href = PERSONAL_INFO.resumePath;
      a.download = 'Dhiraj_Khachane_Resume.pdf';
      a.click();
    }
  };

  const handleDownloadWord = () => {
    downloadAtsWordDoc();
    setDownloadSuccess('Digital ATS Word (.doc) Downloaded!');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const handleCopyContact = () => {
    navigator.clipboard.writeText(`${PERSONAL_INFO.name} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.socials.linkedin}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-200">
        <div 
          className="relative w-full max-w-4xl h-[94vh] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between p-3.5 px-5 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/80 gap-3 shrink-0 no-print">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100 tracking-tight flex items-center gap-2">
                  <span>{PERSONAL_INFO.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800/80 flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span>Digital ATS Resume</span>
                  </span>
                </h2>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 hidden sm:block">
                  All Links & Certificate Credentials Live & Clickable · Keywords Bolded
                </p>
              </div>
            </div>

            {/* Center Tabs: Document Preview vs Raw PDF */}
            <div className="flex items-center p-1 bg-neutral-200/60 dark:bg-neutral-800 rounded-xl text-xs font-medium">
              <button
                onClick={() => setViewMode('document')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'document'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-semibold shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-blue-500" />
                <span>Digital Document View</span>
              </button>
              <button
                onClick={() => setViewMode('raw-pdf')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'raw-pdf'
                    ? 'bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white font-semibold shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-neutral-400" />
                <span>PDF Embed</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Primary Action: Download ATS Vector PDF with Live Hyperlinks */}
              <button
                onClick={handleDownloadPdf}
                className="btn-shimmer inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                title="Download ATS-Friendly Vector PDF with Clickable Links and Bold Keywords"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download ATS PDF</span>
              </button>

              {/* Secondary Action: Download ATS Word (.doc) */}
              <button
                onClick={handleDownloadWord}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-750 border border-neutral-300 dark:border-neutral-700 rounded-xl transition-colors cursor-pointer"
                title="Download ATS-Friendly Word Document (.doc) with Clickable Links"
              >
                <FileCode className="w-3.5 h-3.5 text-indigo-500" />
                <span>Word (.doc)</span>
              </button>

              {/* Print Button */}
              <button
                onClick={handlePrint}
                className="p-1.5 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                title="Print / Save as PDF via Browser"
              >
                <Printer className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Optional Download Notification Toast */}
          {downloadSuccess && (
            <div className="bg-emerald-600 text-white text-xs py-1.5 px-4 text-center font-medium animate-in fade-in flex items-center justify-center gap-1.5 shadow-xs">
              <Check className="w-3.5 h-3.5" />
              <span>{downloadSuccess}</span>
            </div>
          )}

          {/* Modal Scrollable Content */}
          <div className="flex-1 w-full overflow-y-auto bg-neutral-100/90 dark:bg-neutral-950/90 p-3 sm:p-6 md:p-8 flex justify-center">
            {viewMode === 'document' ? (
              /* Digital High-Fidelity Paper Document with Live Interactive Hyperlinks */
              <div id="ats-resume-document" className="w-full max-w-3xl bg-white text-neutral-900 rounded-xl shadow-lg border border-neutral-200 p-6 sm:p-10 font-sans leading-relaxed text-sm my-auto">
                {/* Document Header */}
                <div className="text-center pb-5 border-b border-neutral-200">
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 font-serif">
                    {PERSONAL_INFO.name}
                  </h1>
                  
                  {/* Digitalized Contact Line */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-neutral-700 mt-2.5">
                    <span className="flex items-center gap-1 font-mono">
                      <Phone className="w-3 h-3 text-neutral-500" />
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-blue-600 hover:underline font-medium">
                        {PERSONAL_INFO.phone}
                      </a>
                    </span>
                    <span aria-hidden="true" className="text-neutral-300">·</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Mail className="w-3 h-3 text-neutral-500" />
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-600 hover:underline font-medium">
                        {PERSONAL_INFO.email}
                      </a>
                    </span>
                    <span aria-hidden="true" className="text-neutral-300">·</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Github className="w-3 h-3 text-neutral-500" />
                      <a 
                        href={PERSONAL_INFO.socials.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-blue-600 hover:underline font-medium inline-flex items-center gap-0.5"
                      >
                        <span>{PERSONAL_INFO.socials.githubHandle}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </span>
                  </div>

                  <div className="text-xs text-neutral-700 mt-1.5 font-mono">
                    <a 
                      href={PERSONAL_INFO.socials.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-blue-600 hover:underline font-medium inline-flex items-center justify-center gap-1"
                    >
                      <Linkedin className="w-3 h-3 text-blue-600" />
                      <span>{PERSONAL_INFO.socials.linkedinHandle}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* PROFESSIONAL SUMMARY */}
                <div className="mt-5">
                  <h2 className="text-xs font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-900 pb-1 mb-2">
                    Professional Summary
                  </h2>
                  <p className="text-xs text-neutral-800 leading-relaxed text-justify">
                    <strong className="font-semibold text-neutral-950">Entry-level Data Analyst</strong> candidate with a <strong className="font-semibold text-neutral-950">Bachelor of Engineering in Information Technology</strong> and hands-on practice in <strong className="font-semibold text-neutral-950">SQL-based business analysis</strong>, <strong className="font-semibold text-neutral-950">Google Sheets visualization</strong>, <strong className="font-semibold text-neutral-950">Python</strong>, and introductory <strong className="font-semibold text-neutral-950">machine learning</strong>. Experienced through learning projects in <strong className="font-semibold text-neutral-950">analyzing customer orders, revenue, product performance, and trends</strong>. Seeking a fresher <strong className="font-semibold text-neutral-950">Data Analyst / Junior Data Analyst</strong> opportunity.
                  </p>
                </div>

                {/* TECHNICAL SKILLS */}
                <div className="mt-5">
                  <h2 className="text-xs font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-900 pb-1 mb-2.5">
                    Technical Skills
                  </h2>
                  <div className="space-y-1.5 text-xs text-neutral-800">
                    <p>
                      <strong className="font-bold text-neutral-950">Data Analysis: </strong>
                      <strong className="font-medium text-neutral-900">Data cleaning fundamentals</strong>, <strong className="font-medium text-neutral-900">exploratory analysis (EDA)</strong>, <strong className="font-medium text-neutral-900">KPI analysis</strong>, <strong className="font-medium text-neutral-900">trend analysis</strong>, <strong className="font-medium text-neutral-900">business insights</strong>
                    </p>
                    <p>
                      <strong className="font-bold text-neutral-950">SQL: </strong>
                      <strong className="font-medium text-neutral-900">SELECT</strong>, <strong className="font-medium text-neutral-900">filtering</strong>, <strong className="font-medium text-neutral-900">JOINs</strong>, <strong className="font-medium text-neutral-900">GROUP BY</strong>, <strong className="font-medium text-neutral-900">HAVING</strong>, <strong className="font-medium text-neutral-900">aggregate functions</strong>, <strong className="font-medium text-neutral-900">subqueries</strong>, <strong className="font-medium text-neutral-900">COUNT DISTINCT</strong>, <strong className="font-medium text-neutral-900">date functions</strong>
                    </p>
                    <p>
                      <strong className="font-bold text-neutral-950">Tools: </strong>
                      <strong className="font-medium text-neutral-900">Google Sheets</strong>, <strong className="font-medium text-neutral-900">Microsoft Excel</strong>, <strong className="font-medium text-neutral-900">Power BI</strong>, <strong className="font-medium text-neutral-900">Git/GitHub</strong>, <strong className="font-medium text-neutral-900">VS Code</strong>
                    </p>
                    <p>
                      <strong className="font-bold text-neutral-950">Python / ML: </strong>
                      <strong className="font-medium text-neutral-900">Python</strong>, <strong className="font-medium text-neutral-900">scikit-learn basics</strong>, <strong className="font-medium text-neutral-900">Decision Tree Classifier</strong>, <strong className="font-medium text-neutral-900">TF-IDF</strong>, <strong className="font-medium text-neutral-900">cosine similarity</strong>
                    </p>
                    <p>
                      <strong className="font-bold text-neutral-950">Programming: </strong>
                      <strong className="font-medium text-neutral-900">Python</strong>, <strong className="font-medium text-neutral-900">SQL</strong>, <strong className="font-medium text-neutral-900">HTML</strong>, <strong className="font-medium text-neutral-900">CSS</strong>
                    </p>
                  </div>
                </div>

                {/* PROJECTS WITH LIVE HYPERLINKS */}
                <div className="mt-5">
                  <h2 className="text-xs font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-900 pb-1 mb-3">
                    Projects
                  </h2>
                  
                  {/* Project 1 */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs font-bold text-neutral-950">
                          Online Food Delivery Analysis
                        </h3>
                        <a 
                          href={PROJECTS[0].githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-0.5"
                          title="View Online Food Delivery Project on GitHub"
                        >
                          <span>[GitHub Repo]</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-neutral-700">
                        SQL, Google Sheets
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800 pl-1 leading-relaxed">
                      <li>
                        Analyzed food delivery orders to explore <strong className="font-semibold text-neutral-950">city-wise order volumes</strong>, <strong className="font-semibold text-neutral-950">revenue by food item</strong>, <strong className="font-semibold text-neutral-950">restaurant performance</strong>, <strong className="font-semibold text-neutral-950">customer spending</strong>, and <strong className="font-semibold text-neutral-950">monthly trends</strong>.
                      </li>
                      <li>
                        Practiced <strong className="font-semibold text-neutral-950">JOINs</strong>, <strong className="font-semibold text-neutral-950">subqueries</strong>, <strong className="font-semibold text-neutral-950">GROUP BY</strong>, <strong className="font-semibold text-neutral-950">HAVING</strong>, <strong className="font-semibold text-neutral-950">SUM</strong>, <strong className="font-semibold text-neutral-950">COUNT DISTINCT</strong>, and <strong className="font-semibold text-neutral-950">date functions</strong> to answer business questions.
                      </li>
                      <li>
                        Created <strong className="font-semibold text-neutral-950">Google Sheets charts</strong> for <strong className="font-semibold text-neutral-950">revenue by city</strong>, customer distribution, popular food items, and monthly order trends.
                      </li>
                      <li>
                        Project findings included <strong className="font-semibold text-neutral-950">Jaipur as a leading city by orders and revenue</strong>, with demand differences across food items and locations.
                      </li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs font-bold text-neutral-950">
                          Product Recommendation System
                        </h3>
                        <a 
                          href={PROJECTS[1].githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-0.5"
                          title="View Product Recommendation System on GitHub"
                        >
                          <span>[GitHub Repo]</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-neutral-700">
                        Python, TF-IDF, Cosine Similarity
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-neutral-800 pl-1 leading-relaxed">
                      <li>
                        Used the <strong className="font-semibold text-neutral-950">MovieLens 100K dataset</strong> to explore <strong className="font-semibold text-neutral-950">user ratings</strong> and item popularity.
                      </li>
                      <li>
                        Implemented <strong className="font-semibold text-neutral-950">collaborative filtering</strong> using <strong className="font-semibold text-neutral-950">cosine similarity</strong> and <strong className="font-semibold text-neutral-950">content-based recommendations</strong> using <strong className="font-semibold text-neutral-950">TF-IDF</strong>.
                      </li>
                      <li>
                        Built an automated workflow to recommend items from user input and <strong className="font-semibold text-neutral-950">export recommendation results to CSV</strong>.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* EDUCATION */}
                <div className="mt-5">
                  <h2 className="text-xs font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-900 pb-1 mb-2.5">
                    Education
                  </h2>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex items-start justify-between font-bold text-neutral-950">
                        <span>Anuradha Engineering College</span>
                        <span className="font-mono">2022 - 2025</span>
                      </div>
                      <div className="flex items-start justify-between text-neutral-800">
                        <span><strong className="font-semibold text-neutral-950">Bachelor of Engineering in Information Technology</strong></span>
                        <span>Chikhli, Buldhana, Maharashtra</span>
                      </div>
                      <div className="font-bold text-neutral-950 mt-0.5">
                        CGPA – 7.5
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start justify-between font-bold text-neutral-950">
                        <span>Government Polytechnic, Murtizapur</span>
                        <span className="font-mono">2019 - 2022</span>
                      </div>
                      <div className="flex items-start justify-between text-neutral-800">
                        <span><strong className="font-semibold text-neutral-950">Diploma in Information Technology</strong></span>
                        <span>Murtizapur, Akola, Maharashtra</span>
                      </div>
                      <div className="text-neutral-900 font-medium">
                        Percentage - <strong className="font-bold text-neutral-950">72.56%</strong> <span className="mx-2">·</span> SSC - <strong className="font-bold text-neutral-950">75.20%</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CERTIFICATIONS & VERIFIED CREDENTIALS (DIGITALIZED WITH HYPERLINKS) */}
                <div className="mt-5">
                  <h2 className="text-xs font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-900 pb-1 mb-2">
                    Certifications & Verified Credentials
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-xs text-neutral-800 leading-relaxed">
                    {CERTIFICATIONS.map((cert) => (
                      <li key={cert.id} className="flex flex-wrap items-baseline justify-between gap-1">
                        <div>
                          <strong className="font-semibold text-neutral-950">{cert.title}</strong>
                          <span className="text-neutral-700 font-medium"> — {cert.issuer}</span>
                          <span className="text-neutral-500 font-mono text-[11px]"> ({cert.issueDate})</span>
                        </div>
                        <div className="flex items-center gap-2 no-print">
                          <button
                            onClick={() => setPreviewCert(cert)}
                            className="text-[11px] font-medium text-neutral-600 hover:text-neutral-900 underline cursor-pointer"
                          >
                            Details
                          </button>
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-0.5"
                            title={`Verify ${cert.title} Credential Link`}
                          >
                            <span>[Verify Link]</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              /* RAW PDF EMBED VIEW WITH FALLBACK */
              <div className="w-full h-full flex flex-col items-center justify-center">
                <object
                  data={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0`}
                  type="application/pdf"
                  className="w-full h-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white"
                >
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
                    <FileText className="w-12 h-12 text-blue-500 mb-3" />
                    <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                      Browser PDF Viewer Restricted in Sandbox
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-sm mb-4">
                      Your current browser or preview container blocks inline PDF rendering plugins. Use Document View for complete digital inspection.
                    </p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setViewMode('document')}
                        className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl cursor-pointer"
                      >
                        Switch to Document View
                      </button>
                      <a
                        href={PERSONAL_INFO.resumePath}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-xl"
                      >
                        Open in New Tab
                      </a>
                    </div>
                  </div>
                </object>
              </div>
            )}
          </div>

          {/* Modal Bottom Bar */}
          <div className="p-3 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">Digital ATS Hyperlinked</span>
              <span aria-hidden="true" className="hidden sm:inline">·</span>
              <span className="hidden sm:inline font-mono text-[11px] text-neutral-400">
                100% Selectable Vector Text & Live URL Annotations
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyContact}
                className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Contact' : 'Copy Contact'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Linked Certificate Inspection Modal */}
      <CertificateModal
        isOpen={Boolean(previewCert)}
        certificate={previewCert}
        onClose={() => setPreviewCert(null)}
      />
    </>
  );
};

