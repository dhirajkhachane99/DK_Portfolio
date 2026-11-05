import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  Sparkles,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: 'Job Opportunity / Junior Role',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!formData.name.trim()) {
      setValidationError('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setValidationError('Please provide a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setValidationError('Please write a message with at least 10 characters.');
      return;
    }

    setIsSubmitting(true);

    // Simulate responsive submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry: ${formData.purpose} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Dhiraj,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPurpose: ${formData.purpose}\n\nMessage:\n${formData.message}\n`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-neutral-50/50 dark:bg-neutral-900/30 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            <span>Get In Touch</span>
            <span aria-hidden="true">·</span>
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">
            Let's start a conversation.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
            I am actively looking for Junior Data Analyst, Business Analyst, and SQL reporting roles. Whether you have an open opportunity or want to discuss analytics, reach out below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                Contact Channels
              </h3>

              {/* Email Card */}
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 shadow-xs flex items-center justify-between group hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">Direct Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 truncate block transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 rounded-lg transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 shadow-xs flex items-center justify-between group hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">Phone / WhatsApp</p>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400 truncate block font-mono transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 rounded-lg transition-colors shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 shadow-xs flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 rounded-xl p-3 flex items-center gap-2.5 text-neutral-800 dark:text-neutral-200 text-xs font-semibold transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400 ml-auto" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 rounded-xl p-3 flex items-center gap-2.5 text-neutral-800 dark:text-neutral-200 text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4 text-neutral-800 dark:text-neutral-100 shrink-0" />
                  <span className="truncate">GitHub</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400 ml-auto" />
                </a>
              </div>
            </div>

            {/* Quick Status Note */}
            <div className="p-4 bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 rounded-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Response Time</span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                I typically respond within 24 hours. Open to remote, hybrid, or on-site opportunities in Pune, Mumbai, Bangalore, and across India.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                Fill in the form below to reach out directly to Dhiraj Khachane.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                      Message Prepared Successfully!
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 max-w-sm mx-auto">
                      Thank you for reaching out, {formData.name}. You can also launch your local mail application to dispatch this directly.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={getMailtoUrl()}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Mail App</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          purpose: 'Job Opportunity / Junior Role',
                          subject: '',
                          message: ''
                        });
                      }}
                      className="px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {validationError && (
                    <div className="p-3 text-xs text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 rounded-lg">
                      {validationError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Your Name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Your Email <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Inquiry Purpose */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Inquiry Purpose
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="Job Opportunity / Junior Role">Job Opportunity / Junior Data Analyst Role</option>
                      <option value="Freelance Analytics Project">Data Analysis / Dashboarding Project</option>
                      <option value="Portfolio Review / Feedback">Portfolio Feedback</option>
                      <option value="General Networking">General Networking</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Junior Data Analyst Position at [Company]"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                        Message <span className="text-blue-500">*</span>
                      </label>
                      <span className="text-[11px] text-neutral-400 font-mono tabular-nums">
                        {formData.message.length} chars
                      </span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the opportunity, role requirements, or question..."
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0.5 active:scale-95 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>

                    <a
                      href={getMailtoUrl()}
                      className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 hover:-translate-y-0.5 transition-all"
                    >
                      <span>Or send directly via email client</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
