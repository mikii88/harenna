import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  ChevronRight,
  Info,
  Layers,
  MapPin,
  CheckCircle2,
  Compass,
  FileText,
  Share2,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { HARENNA_DISCOVERIES, ForestDiscovery, GalleryItem } from '../data/harennaData';

interface DiscoverySectionProps {
  onOpenPhoto?: (item: GalleryItem) => void;
  onOpenDocument?: () => void;
  onOpenInquiry?: (topic: string) => void;
  galleryItems?: GalleryItem[];
}

export const DiscoverySection: React.FC<DiscoverySectionProps> = ({
  onOpenPhoto,
  onOpenDocument,
  onOpenInquiry,
  galleryItems = []
}) => {
  const [activeDiscovery] = useState<ForestDiscovery>(HARENNA_DISCOVERIES[0]);
  const [copiedLink, setCopiedLink] = useState(false);

  const discoveryGalleryItem = galleryItems.find((g) => g.id === 'g7');

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href.split('#')[0] + '#discoveries');
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <section
      id="discoveries"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-100 border-b border-stone-800 relative overflow-hidden scroll-mt-16"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-950/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-stone-800">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-950/90 text-teal-400 border border-teal-800/80">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Scientific Biodiversity Breakthrough</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Discovering Harenna: The Endless Mystery of Bale Mountains
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              &ldquo;ሀረናን እና የሀረናን ተፈጥሮ እስከጥጉ ማወቅ አይቻልም ። ለማንኛውም በድጋሜ በልዩ መስህብ ብቅ ብዬልሀለሁ — The mystery of Bale mountains is endless!&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              id="share-discovery-btn"
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-teal-400" />
              <span>{copiedLink ? 'Link Copied!' : 'Share Discovery'}</span>
            </button>
            <a
              href="#forest-map"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-teal-700 hover:bg-teal-600 text-white shadow-sm transition-colors cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-teal-200" />
              <span>Locate on Buffer Map</span>
            </a>
          </div>
        </div>

        {/* Founder Dispatch Card Banner */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-teal-950/80 via-stone-900 to-emerald-950/80 border border-teal-700/50 rounded-2xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-400 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Direct Field Dispatch from Founder Ebrahim (EBRO)</span>
            </div>
            <p className="text-base sm:text-lg font-display text-white italic leading-relaxed">
              &ldquo;{activeDiscovery.quoteAmharic}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-stone-300 font-light">
              — {activeDiscovery.quoteEnglish}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-2.5 w-full md:w-auto">
            {discoveryGalleryItem && onOpenPhoto && (
              <button
                id="view-discovery-photo-btn"
                onClick={() => onOpenPhoto(discoveryGalleryItem)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-950/80 hover:bg-stone-950 border border-teal-500/50 text-teal-300 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-teal-400" />
                <span>View Full-Res Photo</span>
              </button>
            )}
            <a
              href={activeDiscovery.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-800/80 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              <span>Scientific Source (Phys.org)</span>
              <ExternalLink className="w-3.5 h-3.5 text-teal-200" />
            </a>
          </div>
        </div>

        {/* Feature Grid: Detailed Scientific Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Photograph & Micro-Habitat Visuals */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-stone-800 bg-stone-950 shadow-2xl group">
              <img
                src={activeDiscovery.image}
                alt={`${activeDiscovery.speciesName} (${activeDiscovery.scientificName})`}
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-900/90 text-teal-200 border border-teal-500/60 backdrop-blur-md">
                  New Species Discovered
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-stone-900/80 text-stone-200 border border-stone-700 backdrop-blur-md">
                  1,500m – 1,700m ASL
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                <div className="text-xl font-extrabold font-display text-white">
                  {activeDiscovery.speciesName}
                </div>
                <div className="text-xs font-mono text-teal-300 italic">
                  {activeDiscovery.scientificName} • Genus {activeDiscovery.genus}
                </div>
                <div className="text-xs text-stone-300 flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>{activeDiscovery.discoveryLocation}</span>
                </div>
              </div>
            </div>

            {/* Micro-Habitat Card */}
            <div className="p-4 bg-stone-950/80 border border-stone-800 rounded-2xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-teal-400" />
                <span>Micro-Habitat &amp; Ecological Niche</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeDiscovery.microHabitat}
              </p>
              <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                <span>Elevation: 1,500m – 1,700m ASL</span>
                <span className="text-amber-400 font-medium">Within Coffee Agroforestry Buffer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Facts, Anatomy, and Conservation Value */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {activeDiscovery.keyFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-stone-950/70 border border-stone-800 rounded-xl space-y-1 hover:border-teal-700/60 transition-colors"
                >
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-400">
                    {fact.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white font-display">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Egg-Eating Specialized Anatomy */}
            <div className="p-5 bg-stone-950/90 border border-teal-800/50 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-teal-900/60 text-teal-300 border border-teal-700/60">
                  <ShieldCheck className="w-4 h-4" />
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display text-white">
                  Harmless Egg-Eating Adaptation (Anatomy &amp; Diet)
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                {activeDiscovery.dietSpecialization}
              </p>
            </div>

            {/* Morphological Traits */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Distinctive Physical Identification Traits</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeDiscovery.physicalCharacteristics.map((trait, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-stone-950/60 border border-stone-800/90 rounded-xl text-xs text-stone-300 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scientific Rigor & Why Harenna Matters */}
            <div className="p-5 bg-gradient-to-br from-stone-950 to-stone-900 border border-stone-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>7-Year Taxonomic Study (Philipp Wagner &amp; Tiutenko)</span>
                </div>
                <span className="text-[11px] text-stone-400 font-mono">Formal Description: 7 Years</span>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed">
                {activeDiscovery.scientificSignificance}
              </p>

              <div className="pt-2 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-stone-400">
                  Documented in Ethiopian Herpetology &amp; Published on Phys.org
                </span>
                <button
                  onClick={() => onOpenInquiry && onOpenInquiry('Harenna Biodiversity & Scientific Research')}
                  className="text-teal-400 hover:text-teal-300 font-bold inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Connect for Research &amp; Field Studies</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
