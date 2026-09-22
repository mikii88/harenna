import React, { useState } from 'react';
import { X, Send, Mail, Phone, MessageSquare, Check, Sparkles } from 'lucide-react';
import { HARENNA_INITIATIVE, harennaLogo } from '../data/harennaData';

interface PartnershipInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const PartnershipInquiryModal: React.FC<PartnershipInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'GECCI Partnership & Collaboration',
}) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(defaultTopic);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Ebrahim, my name is ${name || 'a partner'}${
      organization ? ` from ${organization}` : ''
    }. I am contacting you regarding: ${topic}.\n\nMessage: ${
      message || 'I would like to explore collaboration with Harenna Forest Heritage.'
    }\n\nMy email: ${email}`;

    const url = `https://wa.me/${HARENNA_INITIATIVE.founder.contacts.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleSendEmail = () => {
    const subject = `Harenna Forest Heritage Inquiry: ${topic} - ${name || 'Partner'}`;
    const body = `Dear Ebrahim Abdurazak,\n\nMy name is ${name || ''}${organization ? ` (${organization})` : ''}.\n\nI am reaching out regarding the Harenna Forest Heritage initiative under the topic: ${topic}.\n\nMessage:\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`;
    const mailto = `mailto:${HARENNA_INITIATIVE.founder.contacts.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div
      id="inquiry-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="inquiry-modal-card"
        className="relative w-full max-w-lg bg-stone-50 border border-stone-300 rounded-2xl shadow-2xl p-6 sm:p-8 text-stone-900 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-inquiry-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 rounded-lg transition-colors cursor-pointer"
          aria-label="Close inquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold font-display text-stone-900">
              Message Prepared & Directed
            </h3>
            <p className="text-sm text-stone-600 max-w-sm mx-auto">
              Thank you for connecting with Ebrahim Abdurazak. Your inquiry has been opened in your preferred communication channel.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-sm font-medium transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSendWhatsApp} className="space-y-4">
            <div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 mb-2">
                <Sparkles className="w-3 h-3" />
                Direct Communication Channel
              </span>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 border border-emerald-500/80 shadow-xs shrink-0">
                  <img
                    src={harennaLogo}
                    alt="Harenna Forest Heritage Logo"
                    className="w-full h-full object-contain rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-stone-900 leading-tight">
                    Contact Ebrahim Abdurazak
                  </h3>
                  <p className="text-xs text-stone-600">
                    Founder, Harenna Forest Heritage • Harenna Bulluq, Bale, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Organization / Entity
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. GECCI / University / Roastery"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@organization.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                >
                  <option>GECCI Partnership & Collaboration</option>
                  <option>Technical Mentorship & Grant Funding</option>
                  <option>Hora Hobe Eco-Lodge Investment & Development</option>
                  <option>Harenna Arabica Specialty Coffee Sourcing</option>
                  <option>Pure Wild Forest Honey Off-take</option>
                  <option>Nature-Based Tourism & Bale Trekking Inquiry</option>
                  <option>Research & Academic Documentation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Message Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details on how your organization would like to collaborate or support..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                />
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                id="send-whatsapp-btn"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                id="send-email-btn"
                onClick={handleSendEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-800" />
                <span>Send via Email</span>
              </button>
            </div>

            <div className="pt-2 text-center text-[11px] text-stone-500">
              Direct Phone / WhatsApp: <span className="font-semibold text-stone-800">+251 909 092 255</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
