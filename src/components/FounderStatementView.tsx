import React from 'react';
import {
  ArrowRight,
  Sparkles,
  TreePine,
  BookOpen,
  Users,
  Compass,
  Briefcase,
  Handshake,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';
import { HARENNA_INITIATIVE, harennaLogo } from '../data/harennaData';

interface FounderStatementViewProps {
  onOpenDocument?: () => void;
  onOpenInquiry?: (topic?: string) => void;
}

export const FounderStatementView: React.FC<FounderStatementViewProps> = ({
  onOpenDocument,
  onOpenInquiry,
}) => {
  const statement = HARENNA_INITIATIVE.founder.statement;

  const pillarIcons: Record<string, React.ReactNode> = {
    'Forest Conservation': <TreePine className="w-5 h-5 text-emerald-700" />,
    'Local Knowledge': <BookOpen className="w-5 h-5 text-emerald-700" />,
    'Community Development': <Users className="w-5 h-5 text-emerald-700" />,
    'Youth Green Enterprise': <Briefcase className="w-5 h-5 text-emerald-700" />,
    'Green Tourism': <Compass className="w-5 h-5 text-emerald-700" />,
    'Sustainable Enterprise': <Sparkles className="w-5 h-5 text-emerald-700" />,
    'Partnership': <Handshake className="w-5 h-5 text-emerald-700" />,
  };

  return (
    <div className="space-y-10 animate-fadeIn text-stone-900">
      {/* Title and Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300">
            <Quote className="w-3.5 h-3.5 text-emerald-700" />
            <span>Official Founder Statement</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-display text-stone-950 tracking-tight">
            {statement.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-stone-500">
            By <strong className="text-stone-900 font-semibold">{HARENNA_INITIATIVE.founder.name}</strong> • Founder &amp; Naturalist, Harenna Forest Heritage • Harenna Bulluq District, Bale
          </p>
        </div>
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white p-0.5 border-2 border-emerald-600/80 shadow-md shrink-0 self-start sm:self-center">
          <img
            src={harennaLogo}
            alt="Harenna Forest Heritage Logo"
            className="w-full h-full object-contain rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Opening Thesis Statement with Subtle Warm Highlight */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-100/90 border border-stone-200 shadow-xs space-y-4 relative">
        <Quote className="w-10 h-10 text-emerald-800/15 absolute top-5 right-5 pointer-events-none" />
        {statement.introParagraphs.map((para, i) => (
          <p
            key={i}
            className={`leading-relaxed text-stone-800 ${
              i === 0 ? 'text-base sm:text-lg font-medium text-stone-900' : 'text-sm sm:text-base font-light text-stone-700'
            }`}
          >
            {para}
          </p>
        ))}
      </div>

      {/* Connected Pathway Flow */}
      <div className="space-y-4">
        <div className="text-xs font-bold uppercase tracking-widest text-stone-500">
          Our Integrated Pathway
        </div>
        <div className="p-4 sm:p-6 bg-emerald-950 rounded-2xl border border-emerald-900 text-emerald-50 shadow-md">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-4">
            Our work therefore connects:
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-2">
            {statement.flow.map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-900/80 border border-emerald-700 text-xs sm:text-sm font-bold text-white shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{step}</span>
                </div>
                {idx < statement.flow.length - 1 && (
                  <div className="flex items-center justify-center text-emerald-400 font-bold px-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="mt-5 pt-4 border-t border-emerald-900/80 text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-light">
            {statement.approach}
          </p>
        </div>
      </div>

      {/* What We Are Building Section */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h4 className="text-xl sm:text-2xl font-bold font-display text-stone-950">
            What We Are Building
          </h4>
          <p className="text-xs sm:text-sm text-stone-600">
            Harenna Forest Heritage is developing an integrated model around seven operational pillars:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {statement.whatWeAreBuilding.map((item, index) => (
            <div
              key={item.title}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 hover:border-emerald-600 hover:shadow-sm transition-all flex items-start gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                {pillarIcons[item.title] || <CheckCircle2 className="w-5 h-5 text-emerald-700" />}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    0{index + 1}
                  </span>
                  <h5 className="text-sm sm:text-base font-bold text-stone-900 font-display">
                    {item.title}
                  </h5>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  — {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Looking Ahead Section */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-100/90 border border-stone-200 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-800" />
          <h4 className="text-base sm:text-lg font-bold font-display text-stone-950">
            Looking Ahead
          </h4>
        </div>
        <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
          {statement.lookingAhead.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      {/* Closing Manifesto Triad */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-emerald-950 via-stone-950 to-emerald-950 text-white border border-emerald-800 shadow-xl text-center space-y-5">
        <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
          The Harenna Commitment
        </div>

        <div className="space-y-2 py-2">
          {statement.closingLines.map((line, idx) => (
            <div
              key={idx}
              className={`font-display tracking-wide ${
                idx === 1
                  ? 'text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-400'
                  : 'text-lg sm:text-xl md:text-2xl font-bold text-stone-100'
              }`}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Founder Signature Block */}
        <div className="pt-6 border-t border-emerald-900/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 border border-emerald-400/80 shrink-0">
              <img
                src={harennaLogo}
                alt="Harenna Forest Heritage Logo"
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-bold text-sm text-white font-display">
                {HARENNA_INITIATIVE.founder.name}
              </div>
              <div className="text-emerald-400 text-xs">
                Founder &amp; Naturalist • Harenna Forest Heritage
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onOpenInquiry && (
              <button
                onClick={() => onOpenInquiry('Collaboration with Founder on Statement Priorities')}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Inquire &amp; Partner
              </button>
            )}
            {onOpenDocument && (
              <button
                onClick={onOpenDocument}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 rounded-xl text-xs font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Read Full GECCI Concept</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
