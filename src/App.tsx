import React, { useState } from 'react';
import {
  Leaf,
  Droplets,
  Sprout,
  Compass,
  FileText,
  Send,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Users,
  Award,
  Layers,
  Search,
  Eye,
  ChevronRight,
  ShieldCheck,
  Quote,
  TrendingUp
} from 'lucide-react';
import { HARENNA_INITIATIVE, GalleryItem, PartnershipPillar, harennaLogo, VideoItem, HARENNA_VIDEOS } from './data/harennaData';
import { Navbar } from './components/Navbar';
import { DocumentModal } from './components/DocumentModal';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { PartnershipInquiryModal } from './components/PartnershipInquiryModal';
import { InteractiveForestMap } from './components/InteractiveForestMap';
import { FounderStatementView } from './components/FounderStatementView';
import { DiscoverySection } from './components/DiscoverySection';
import { GalleryAndVideoSection } from './components/GalleryAndVideoSection';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { CorePillarsSection } from './components/CorePillarsSection';
import { ImpactDashboard } from './components/ImpactDashboard';

// Hero background image
import harennaWaterfallHero from './assets/images/harenna_waterfall_hero_1789649473469.jpg';
import harennaCoffeeProduct from './assets/images/harenna_coffee_product_1789649500485.jpg';
import harennaHoneyJar from './assets/images/harenna_honey_jar_1789649530017.jpg';
import harennaCloudForest from './assets/images/harenna_cloud_forest_1789649565457.jpg';
import horaHobeLodge from './assets/images/hora_hobe_lodge_1789649601652.jpg';
import soilWaterConservation from './assets/images/soil_water_conservation_1789649671560.jpg';

export function App() {
  const [isDocOpen, setIsDocOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('GECCI Partnership & Collaboration');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeFounderTab, setActiveFounderTab] = useState<'statement' | 'profile'>('statement');

  React.useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#founder-statement' || hash === '#statement') {
        setActiveFounderTab('statement');
      } else if (hash === '#founder-profile' || hash === '#credentials') {
        setActiveFounderTab('profile');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openInquiryWithTopic = (topic: string) => {
    setInquiryTopic(topic);
    setIsInquiryOpen(true);
  };

  return (
    <div id="harenna-app" className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      {/* Modals */}
      <Navbar 
        onOpenDocument={() => setIsDocOpen(true)}
        onOpenInquiry={openInquiryWithTopic}
      />

      <DocumentModal 
        isOpen={isDocOpen}
        onClose={() => setIsDocOpen(false)}
      />

      <PhotoLightboxModal
        item={selectedPhoto}
        items={HARENNA_INITIATIVE.gallery}
        onClose={() => setSelectedPhoto(null)}
        onSelect={(item) => setSelectedPhoto(item)}
      />

      <VideoPlayerModal
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onSelectOtherVideo={(v) => setSelectedVideo(v)}
      />

      <PartnershipInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        defaultTopic={inquiryTopic}
      />

      {/* HERO SECTION */}
      <section 
        id="hero"
        className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-stone-950"
      >
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={harennaWaterfallHero}
            alt="Harenna Forest Waterfall Amphitheater"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-900/50" />
          <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 mt-6">
          {/* Top Tagline Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-900/80 text-emerald-200 border border-emerald-500/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Prepared for GECCI & Global Partners
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-stone-900/80 text-stone-300 border border-stone-700/60 backdrop-blur-md">
              <MapPin className="w-3 h-3 text-emerald-400" />
              Bale Zone, Oromia, Ethiopia
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-white p-1 border-2 border-emerald-400/90 shadow-2xl shrink-0 group hover:scale-105 transition-transform">
                <img
                  src={harennaLogo}
                  alt="Harenna Forest Heritage Official Logo"
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white drop-shadow-md">
                  HARENNA FOREST HERITAGE
                </h1>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-emerald-300 font-mono mt-1">
                  Conservation-Based Green Economy
                </div>
              </div>
            </div>
            <p className="text-base sm:text-xl md:text-2xl font-light text-stone-200 max-w-3xl mx-auto leading-relaxed text-center">
              Local Action, Indigenous Knowledge &amp; Conservation-Linked Green Enterprise
            </p>
          </div>

          {/* Guiding Principle Callout */}
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-emerald-600/30 via-emerald-500/40 to-emerald-600/30 backdrop-blur-md border border-emerald-500/30 max-w-xl">
            <div className="px-6 py-2.5 rounded-xl bg-stone-950/80 text-xs sm:text-sm text-stone-200 flex items-center justify-center gap-2">
              <span className="text-emerald-400 font-bold uppercase tracking-wider">Motto:</span>
              <span className="font-display italic font-semibold text-emerald-200">&ldquo;Think Globally. Act Locally.&rdquo;</span>
            </div>
          </div>

          {/* CTA Button Group */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="#overview"
              id="hero-explore-btn"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-950/60 transition-all hover:scale-102 cursor-pointer"
            >
              <span>Explore Conservation Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              id="hero-view-doc-btn"
              onClick={() => setIsDocOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-stone-900/80 hover:bg-stone-800 text-stone-100 border border-stone-700/80 backdrop-blur-md transition-all hover:scale-102 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Read Partnership Concept</span>
            </button>

            <button
              id="hero-contact-btn"
              onClick={() => openInquiryWithTopic('GECCI Strategic Partnership')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>Contact Founder</span>
            </button>

            <a
              href="#discoveries"
              id="hero-discoveries-btn"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-teal-900/80 hover:bg-teal-800 text-teal-100 border border-teal-500/50 backdrop-blur-md transition-all hover:scale-102 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-teal-300" />
              <span>Species Discovery</span>
            </a>

            <a
              href="#forest-map"
              id="hero-map-btn"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 border border-emerald-600/50 backdrop-blur-md transition-all hover:scale-102 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Interactive Buffer Map</span>
            </a>

            <a
              href="#founder-statement"
              id="hero-statement-btn"
              onClick={() => setActiveFounderTab('statement')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 border border-emerald-500/50 backdrop-blur-md transition-all hover:scale-102 cursor-pointer"
            >
              <Quote className="w-4 h-4 text-emerald-300" />
              <span>Founder Statement</span>
            </a>
          </div>

          {/* Core Pillars Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-4xl mx-auto border-t border-stone-800/80 text-left">
            <a
              href="#forest-map"
              className="p-3 bg-stone-900/60 hover:bg-stone-900 border border-stone-800/60 hover:border-emerald-600/50 rounded-xl transition-all group block"
            >
              <div className="text-xs text-stone-400 font-medium flex items-center justify-between">
                <span>Eco-Region Buffer</span>
                <span className="text-[10px] text-emerald-400 group-hover:translate-x-0.5 transition-transform">Map →</span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white font-display">1,400m – 1,900m</div>
              <div className="text-[11px] text-emerald-400">Montane Cloud Forest</div>
            </a>
            <div className="p-3 bg-stone-900/60 border border-stone-800/60 rounded-xl">
              <div className="text-xs text-stone-400 font-medium">Coffee Agroforestry</div>
              <div className="text-sm sm:text-base font-bold text-white font-display">100% Specialty</div>
              <div className="text-[11px] text-emerald-400">Soil Moisture Trenches</div>
            </div>
            <div className="p-3 bg-stone-900/60 border border-stone-800/60 rounded-xl">
              <div className="text-xs text-stone-400 font-medium">Forest Honey</div>
              <div className="text-sm sm:text-base font-bold text-white font-display">Wild Organic</div>
              <div className="text-[11px] text-emerald-400">Indigenous &amp; Box Hives</div>
            </div>
            <div className="p-3 bg-stone-900/60 border border-stone-800/60 rounded-xl">
              <div className="text-xs text-stone-400 font-medium">Hora Hobe Lodge</div>
              <div className="text-sm sm:text-base font-bold text-white font-display">Documented Site</div>
              <div className="text-[11px] text-emerald-400">Community Eco-Tourism</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHO WE ARE & CORE FORMULA */}
      <section id="overview" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              Who We Are &amp; Guiding Approach
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-stone-950">
              Emerging Practical Action on the Ground
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Rooted in the Harenna Forest of Bale Zone, we demonstrate that conservation success does not come from prohibitions alone, but through economic incentives, soil stewardship, and indigenous green enterprises.
            </p>
          </div>

          {/* Central Formula Card */}
          <div className="p-6 sm:p-10 rounded-2xl bg-stone-50 border border-stone-300 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Field Foundation</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900">The Practical Conservation Formula</h3>
              </div>
              <div className="text-xs font-medium text-stone-500 bg-white px-3 py-1.5 rounded-lg border border-stone-200">
                Documented in GECCI Concept Paper
              </div>
            </div>

            {/* Formula visual */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {HARENNA_INITIATIVE.coreFormula.components.map((comp, idx) => {
                const pcts = [92, 84, 78, 88];
                const pct = pcts[idx];
                return (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-stone-200 relative group hover:border-emerald-600 transition-colors flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">0{idx + 1}. Pillar</span>
                        <span className="text-[10px] font-mono text-emerald-800 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          {pct}% Field Ready
                        </span>
                      </div>
                      <div className="text-base font-bold text-stone-900 font-display mb-1">{comp.name}</div>
                      <p className="text-xs text-stone-600 leading-normal">{comp.desc}</p>
                    </div>
                    <div className="pt-3">
                      <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-500 rounded-full transition-all duration-700"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Formula Outcome Banner */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-emerald-900 to-stone-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-300">Target Measurable Outcome</span>
                <div className="text-sm sm:text-base font-bold font-display">
                  {HARENNA_INITIATIVE.coreFormula.outcome}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="#pillars"
                  className="shrink-0 px-3.5 py-2 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-emerald-200 border border-emerald-400/30 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Real-Time Scale Counters</span>
                </a>
                <button
                  onClick={() => setIsDocOpen(true)}
                  className="shrink-0 px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                >
                  Read Evidence &amp; Methodology
                </button>
              </div>
            </div>
          </div>

          {/* 5-Stage Evolutionary Engine */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Our Methodology</span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900">The 5-Stage Practical Development Engine</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {HARENNA_INITIATIVE.timeline.map((step, idx) => (
                <div key={idx} className="p-4 bg-stone-50 border border-stone-200 rounded-xl flex flex-col justify-between space-y-2">
                  <div className="text-xs font-bold text-emerald-800 font-display">{step.step}</div>
                  <p className="text-xs text-stone-600 leading-relaxed">{step.desc}</p>
                  <div className="h-1 w-full bg-emerald-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-700" style={{ width: `${(idx + 1) * 20}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: SCIENTIFIC BIODIVERSITY DISCOVERIES */}
      <DiscoverySection
        onOpenPhoto={(item) => setSelectedPhoto(item)}
        onOpenDocument={() => setIsDocOpen(true)}
        onOpenInquiry={(topic) => openInquiryWithTopic(topic)}
        galleryItems={HARENNA_INITIATIVE.gallery}
      />

      {/* SECTION: SOIL, WATER & COFFEE AGROFORESTRY */}
      <section id="coffee-agroforestry" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: Visual representation */}
            <div className="space-y-4">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-300 group cursor-pointer"
                onClick={() => setSelectedPhoto(HARENNA_INITIATIVE.gallery.find(g => g.id === 'g6') || null)}
              >
                <img
                  src={soilWaterConservation}
                  alt="Soil and Water Conservation in Harenna"
                  className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-800 mb-1">
                    Field Demonstration Plot
                  </span>
                  <h4 className="text-base font-bold font-display">Contour Trenches &amp; Stone Bunds</h4>
                  <p className="text-xs text-stone-300">Capturing monsoon runoff and preserving moisture for Arabica root zones</p>
                </div>
              </div>

              {/* Coffee Product Card */}
              <div 
                className="p-4 bg-white rounded-xl border border-stone-300 shadow-sm flex items-center gap-4 cursor-pointer hover:border-emerald-600 transition-colors"
                onClick={() => setSelectedPhoto(HARENNA_INITIATIVE.gallery.find(g => g.id === 'g2') || null)}
              >
                <img
                  src={harennaCoffeeProduct}
                  alt="Harenna Arabica Coffee"
                  className="w-20 h-20 rounded-lg object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase">Specialty Coffee</span>
                    <span className="text-xs text-stone-400">100% Arabica</span>
                  </div>
                  <h5 className="font-bold text-sm text-stone-900 font-display">Harenna Arabica Specialty Coffee</h5>
                  <p className="text-xs text-stone-600 line-clamp-1">Forest-shade grown in buffer zones • Hand-picked red cherries</p>
                </div>
                <ChevronRight className="w-5 h-5 text-stone-400 shrink-0" />
              </div>
            </div>

            {/* Right: Narrative & Technical Depth */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900">
                <Droplets className="w-3.5 h-3.5 text-emerald-700" />
                Soil &amp; Water Conservation
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-stone-950 leading-tight">
                Rainwater Retention Trenches &amp; Coffee Agroforestry
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                In the steep terrain of Harenna Bulluq, rapid rainwater runoff washes away rich topsoil and deprives crops of moisture. Rather than allowing torrential rains to erode the landscape, we excavate <strong>soil and water conservation contour trenches</strong>.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Slow, Retain, and Infiltrate</h4>
                    <p className="text-xs text-stone-600">
                      Trenches intercept water flowing down slopes, allowing it to slowly sink deep into the root stratum where coffee plants access it during dry intervals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Outside the Protected Forest</h4>
                    <p className="text-xs text-stone-600">
                      All coffee agroforestry is established strictly on dedicated agricultural land outside delineated park boundaries, disproving the misconception that farmers must expand into virgin forest for fertile soils.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Conservation-Linked Coffee Value</h4>
                    <p className="text-xs text-stone-600">
                      Premium cup quality translates to higher farmgate prices. When smallholders earn substantially more per kilogram from existing trees, their economic pressure to cut timber vanishes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Coffee Cupping Profile Tag Box */}
              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">Specialty Cupping Profile</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Wild Blackberry', 'Jasmine Blossom', 'Bergamot Citrus', 'Raw Forest Honey', 'Silky Body', 'Highland Microclimate'].map((note, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-stone-100 text-stone-800 rounded-md border border-stone-200">
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => openInquiryWithTopic('Harenna Arabica Specialty Coffee Sourcing')}
                  className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Inquire for Coffee Direct Trade
                </button>
                <button
                  onClick={() => setIsDocOpen(true)}
                  className="px-5 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Review Agronomic Data
                </button>
                <a
                  href="#forest-map"
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 rounded-xl text-xs font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>View Farm on Map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CULTURAL BEEKEEPING & PURE FOREST HONEY */}
      <section id="beekeeping-honey" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: Narrative */}
            <div className="space-y-6 order-2 lg:order-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                Non-Timber Forest Products
              </span>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-emerald-800 tracking-wide">
                  ሀረና የማር ቤት • Bosonni Harennaa Soora Hormaataati
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-stone-950 leading-tight">
                  Cultural Beekeeping &amp; Pure Forest Honey Enterprise
                </h2>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                Beekeeping is an ancestral tradition in Harenna Forest. We honor indigenous knowledge by incorporating traditional log hives while incrementally introducing improved box hives adapted to local climatic variations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">Indigenous Tree Hives</div>
                  <p className="text-xs text-stone-600">
                    Cultural log hives placed in coffee agroforestry canopy to observe natural colony migration and defense behavior.
                  </p>
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">Modern Box Hives</div>
                  <p className="text-xs text-stone-600">
                    Trained youth managing yellow box hives on wooden stands, maximizing harvest volume without harming bees or trees.
                  </p>
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">Floral Biodiversity</div>
                  <p className="text-xs text-stone-600">
                    Bees forage on Schefflera abyssinica, Syzygium guineense, wild coffee flowers, and endemic mountain flora.
                  </p>
                </div>
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900">Zero Forest Destruction</div>
                  <p className="text-xs text-stone-600">
                    Honey generation provides regular income while giving families a direct stake in keeping the forest intact.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-xl text-xs text-amber-950 space-y-1">
                <strong>Development Pathway:</strong> Traditional knowledge &rarr; Local adaptation &rarr; Productive beekeeping &rarr; Improved practices &rarr; Increased income &rarr; Wider community adoption.
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => openInquiryWithTopic('Harenna Forest Honey Sourcing & Apiculture')}
                  className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Inquire for Honey Off-Take
                </button>
                <button
                  onClick={() => setSelectedPhoto(HARENNA_INITIATIVE.gallery.find(g => g.id === 'g3') || null)}
                  className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  View Honey Jar &amp; Packaging
                </button>
                <a
                  href="#forest-map"
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-700 rounded-xl text-xs font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>View Apiary on Map</span>
                </a>
              </div>
            </div>

            {/* Right: Honey Visual */}
            <div className="order-1 lg:order-2 space-y-4">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-300 group cursor-pointer"
                onClick={() => setSelectedPhoto(HARENNA_INITIATIVE.gallery.find(g => g.id === 'g3') || null)}
              >
                <img
                  src={harennaHoneyJar}
                  alt="Harenna Organic Pure Forest Honey"
                  className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-700 mb-1">
                    Organic Forest Honey
                  </span>
                  <h4 className="text-base font-bold font-display">Harenna Organic Honey Jar</h4>
                  <p className="text-xs text-stone-300">Pure golden nectar harvested in the misty canopy of Bale Mountains</p>
                </div>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
                <span>Botanical origin: Schefflera, Syzygium &amp; Wild Coffee</span>
                <span className="font-semibold text-emerald-800">100% Raw &amp; Unfiltered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HORA HOBE ECO-LODGE & NATURE-BASED TOURISM */}
      <section id="hora-hobe" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: Lodge and Landscape Photos */}
            <div className="space-y-4">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800 group cursor-pointer"
                onClick={() => setSelectedPhoto(HARENNA_INITIATIVE.gallery.find(g => g.id === 'g5') || null)}
              >
                <img
                  src={horaHobeLodge}
                  alt="Hora Hobe Eco-Lodge Scenic Ridge"
                  className="w-full h-[300px] sm:h-[380px] object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-700 text-white mb-1">
                    Development-Ready Site
                  </span>
                  <h4 className="text-base font-bold font-display text-white">Hora Hobe Eco-Lodge Viewpoint</h4>
                  <p className="text-xs text-stone-300">Overlooking the crater basin and ancient forest canopy</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div 
                  className="relative rounded-xl overflow-hidden border border-stone-800 h-32 group cursor-pointer"
                  onClick={() => setSelectedPhoto(HARENNA_INITIATIVE.gallery.find(g => g.id === 'g1') || null)}
                >
                  <img
                    src={harennaWaterfallHero}
                    alt="Waterfall Amphitheater"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/60 p-2 flex flex-col justify-end">
                    <span className="text-[11px] font-bold text-white">Waterfall Amphitheater</span>
                    <span className="text-[10px] text-emerald-400">Viewing Terrace</span>
                  </div>
                </div>

                <div 
                  className="relative rounded-xl overflow-hidden border border-stone-800 h-32 group cursor-pointer"
                  onClick={() => setSelectedPhoto(HARENNA_INITIATIVE.gallery.find(g => g.id === 'g4') || null)}
                >
                  <img
                    src={harennaCloudForest}
                    alt="Cloud Forest Epiphytes"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/60 p-2 flex flex-col justify-end">
                    <span className="text-[11px] font-bold text-white">Cloud Forest Transects</span>
                    <span className="text-[10px] text-emerald-400">Moss-Draped Canopy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                Nature-Based Tourism
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white leading-tight">
                Hora Hobe Eco-Lodge &amp; Youth Nature Guiding
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
                Hora Hobe Eco-Lodge is a planned, development-ready eco-tourism hub located on the edge of the scenic crater and overlooking the thundering Harenna Forest waterfall. Backed by an official land confirmation letter and GPS survey, the project connects conservation with youth livelihoods.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-stone-950/60 border border-stone-800 rounded-xl space-y-1">
                  <div className="text-xs font-bold text-emerald-400">Documented Land Basis</div>
                  <p className="text-xs text-stone-300">
                    Official map and administrative confirmation letter secured from Harenna Bulluq District for responsible eco-tourism development.
                  </p>
                </div>

                <div className="p-3 bg-stone-950/60 border border-stone-800 rounded-xl space-y-1">
                  <div className="text-xs font-bold text-emerald-400">Certified Local Leadership</div>
                  <p className="text-xs text-stone-300">
                    Founder Ebrahim Abdurazak holds an official Tour Guide Certificate from Bale Mountains National Park, with years of naturalist guiding experience.
                  </p>
                </div>

                <div className="p-3 bg-stone-950/60 border border-stone-800 rounded-xl space-y-1">
                  <div className="text-xs font-bold text-emerald-400">Youth Employment Corridor</div>
                  <p className="text-xs text-stone-300">
                    Direct training and career pathways for local youth as naturalist guides, birdwatchers, hospitality staff, and trail maintainers.
                  </p>
                </div>
              </div>

              {/* Trek highlights */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => openInquiryWithTopic('Hora Hobe Eco-Lodge Investment & Development')}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Partner on Eco-Lodge Development
                </button>
                <button
                  onClick={() => openInquiryWithTopic('Trekking & Naturalist Guiding in Harenna')}
                  className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded-xl text-xs font-semibold transition-colors cursor-pointer"
                >
                  Book Guided Naturalist Trek
                </button>
                <a
                  href="#forest-map"
                  className="px-4 py-2.5 bg-stone-950 hover:bg-stone-800 border border-stone-700 text-emerald-300 rounded-xl text-xs font-semibold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-emerald-400" />
                  <span>View Site &amp; Waterfall on Map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INTERACTIVE MAP & BUFFER ZONE VISUALIZATION */}
      <InteractiveForestMap
        onSelectPhoto={(galleryId) => {
          const item = HARENNA_INITIATIVE.gallery.find((g) => g.id === galleryId);
          if (item) setSelectedPhoto(item);
        }}
        onOpenDocument={() => setIsDocOpen(true)}
        onOpenInquiry={(topic) => openInquiryWithTopic(topic)}
        galleryItems={HARENNA_INITIATIVE.gallery}
      />

      {/* SECTION: FIELD DOCUMENTATION, GALLERY & VIDEO ARCHIVE */}
      <div id="gallery" className="scroll-mt-20">
        <GalleryAndVideoSection
          galleryItems={HARENNA_INITIATIVE.gallery}
          onSelectPhoto={(item) => setSelectedPhoto(item)}
          onSelectVideo={(video) => setSelectedVideo(video)}
          onOpenDocument={() => setIsDocOpen(true)}
        />
      </div>

      {/* SECTION: FOUNDER STATEMENT & LEADERSHIP */}
      <section id="founder" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-200 scroll-mt-16">
        <div id="founder-statement" className="max-w-5xl mx-auto space-y-10 scroll-mt-20">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300/60">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              Leadership &amp; Guiding Vision
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-stone-950">
              Founder Vision &amp; Community Action
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Explore our guiding statement &ldquo;From Heritage to Action&rdquo; and the on-the-ground qualifications driving Harenna Forest Heritage.
            </p>
          </div>

          {/* Section Navigation Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 bg-stone-100 border border-stone-300/80 rounded-2xl shadow-inner gap-1 max-w-full overflow-x-auto">
              <button
                id="founder-tab-statement-btn"
                onClick={() => setActiveFounderTab('statement')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeFounderTab === 'statement'
                    ? 'bg-emerald-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-white/80'
                }`}
              >
                <Quote className="w-4 h-4 text-emerald-400" />
                <span>Founder Statement: From Heritage to Action</span>
              </button>

              <button
                id="founder-tab-profile-btn"
                onClick={() => setActiveFounderTab('profile')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeFounderTab === 'profile'
                    ? 'bg-emerald-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-white/80'
                }`}
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Founder Profile &amp; Credentials</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Founder Statement */}
          {activeFounderTab === 'statement' && (
            <div className="bg-stone-50 border border-stone-300 rounded-3xl p-6 sm:p-10 shadow-sm">
              <FounderStatementView
                onOpenDocument={() => setIsDocOpen(true)}
                onOpenInquiry={openInquiryWithTopic}
              />
            </div>
          )}

          {/* Tab 2: Founder Profile & Credentials */}
          {activeFounderTab === 'profile' && (
            <div className="bg-stone-50 border border-stone-300 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-emerald-900 text-emerald-100 font-display font-extrabold text-3xl flex items-center justify-center shadow-inner shrink-0">
                  EA
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-950">
                      {HARENNA_INITIATIVE.founder.name}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      Founder &amp; Naturalist
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600">
                    Young Innovator • Environmental Volunteer • Native of Harenna Bulluq District
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-stone-700 pt-1">
                    <span>Email: {HARENNA_INITIATIVE.founder.contacts.email}</span>
                    <span>•</span>
                    <span>WhatsApp: {HARENNA_INITIATIVE.founder.contacts.phone}</span>
                  </div>
                </div>
              </div>

              {/* Key Qualifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {HARENNA_INITIATIVE.founder.credentials.map((cred, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-stone-200 space-y-1.5 shadow-xs">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{cred.title}</span>
                    </div>
                    <div className="text-xs font-semibold text-stone-900">{cred.institution}</div>
                    <p className="text-xs text-stone-600 leading-normal">{cred.description}</p>
                  </div>
                ))}
              </div>

              {/* Personal Quote */}
              <div className="p-5 rounded-2xl bg-emerald-900 text-emerald-50 space-y-2">
                <p className="text-sm sm:text-base font-display italic leading-relaxed">
                  &ldquo;Rather than limiting our contribution to awareness, we have focused on testing and demonstrating locally appropriate conservation and livelihood practices on the ground. Global environmental commitments become meaningful only when translated into practical action with the local community.&rdquo;
                </p>
                <div className="text-xs text-emerald-300 font-semibold tracking-wide uppercase">
                  — Ebrahim Abdurazak
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                <button
                  onClick={() => setActiveFounderTab('statement')}
                  className="inline-flex items-center gap-1.5 text-emerald-800 font-bold hover:underline cursor-pointer"
                >
                  <Quote className="w-3.5 h-3.5" />
                  <span>Switch to &ldquo;From Heritage to Action&rdquo; Statement →</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openInquiryWithTopic('Inquiry to Founder')}
                    className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl font-bold cursor-pointer transition-colors"
                  >
                    Direct Message Founder
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION: GECCI 6 COLLABORATION PILLARS WITH DYNAMIC SCALE COUNTERS & ANIMATED PROGRESS BARS */}
      <CorePillarsSection
        onOpenDocument={() => setIsDocOpen(true)}
        onOpenInquiry={openInquiryWithTopic}
        partnershipValue={HARENNA_INITIATIVE.partnershipValue}
      />

      {/* SECTION: CUMULATIVE CONSERVATION IMPACT DASHBOARD (RECHARTS DATA VISUALIZATION) */}
      <ImpactDashboard
        onOpenDocument={() => setIsDocOpen(true)}
        onOpenInquiry={openInquiryWithTopic}
      />

      {/* SECTION: DIRECT CONTACT & INQUIRY */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-100">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              Direct Communication
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white">
              Connect With Founder Ebrahim Abdurazak
            </h2>
            <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto">
              We welcome inquiries from GECCI, conservation organizations, researchers, specialty coffee importers, and responsible travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* WhatsApp Direct */}
            <a
              href={`https://wa.me/${HARENNA_INITIATIVE.founder.contacts.whatsapp}?text=${encodeURIComponent('Hello Ebrahim, I am contacting you regarding Harenna Forest Heritage.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-stone-950/80 border border-stone-800 hover:border-emerald-600 rounded-2xl space-y-3 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-900/80 text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold font-display text-white">WhatsApp / Phone</div>
              <div className="text-xs font-mono text-emerald-400">{HARENNA_INITIATIVE.founder.contacts.phone}</div>
              <p className="text-xs text-stone-400">Direct instant messaging for quick consultation and field coordination.</p>
            </a>

            {/* Email Primary */}
            <a
              href={`mailto:${HARENNA_INITIATIVE.founder.contacts.email}?subject=${encodeURIComponent('Partnership Inquiry: Harenna Forest Heritage')}`}
              className="p-6 bg-stone-950/80 border border-stone-800 hover:border-emerald-600 rounded-2xl space-y-3 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-900/80 text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold font-display text-white">Official Primary Email</div>
              <div className="text-xs font-mono text-emerald-400">{HARENNA_INITIATIVE.founder.contacts.email}</div>
              <p className="text-xs text-stone-400">Send formal partnership briefs, proposals, and institutional requests.</p>
            </a>

            {/* Alternative Email */}
            <a
              href={`mailto:${HARENNA_INITIATIVE.founder.contacts.altEmail}?subject=${encodeURIComponent('Partnership Inquiry: Harenna Forest Heritage')}`}
              className="p-6 bg-stone-950/80 border border-stone-800 hover:border-emerald-600 rounded-2xl space-y-3 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-900/80 text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold font-display text-white">Alternative Email</div>
              <div className="text-xs font-mono text-emerald-400">{HARENNA_INITIATIVE.founder.contacts.altEmail}</div>
              <p className="text-xs text-stone-400">Secondary contact address for Bale and Harenna regional correspondence.</p>
            </a>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => openInquiryWithTopic('GECCI Partnership & Collaboration')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-950/60 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Launch Guided Inquiry Dialog</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER & MANIFESTO */}
      <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Closing Manifesto */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-stone-900 to-emerald-950/80 border border-emerald-800/40 text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">Harenna Community Manifesto</span>
            <div className="text-lg sm:text-2xl font-bold font-display text-emerald-100">
              &ldquo;{HARENNA_INITIATIVE.closingManifesto}&rdquo;
            </div>
            <p className="text-xs text-stone-400 max-w-xl mx-auto">
              Harenna Bulluq District, Bale Zone, Oromia, Ethiopia • In collaborative spirit with GECCI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs pt-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white p-0.5 border border-emerald-500/80 shadow-xs shrink-0">
                <img
                  src={harennaLogo}
                  alt="Harenna Forest Heritage Logo"
                  className="w-full h-full object-contain rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-stone-300 font-semibold">Harenna Forest Heritage</span>
              <span>• Bale Mountains, Ethiopia</span>
            </div>

            <div className="flex flex-wrap gap-4 text-stone-400">
              <button onClick={() => setIsDocOpen(true)} className="hover:text-stone-200 transition-colors cursor-pointer">
                GECCI Concept Brief
              </button>
              <span>•</span>
              <a href="#overview" className="hover:text-stone-200 transition-colors">Who We Are</a>
              <span>•</span>
              <a href="#coffee-agroforestry" className="hover:text-stone-200 transition-colors">Specialty Coffee</a>
              <span>•</span>
              <a href="#beekeeping-honey" className="hover:text-stone-200 transition-colors">Forest Honey</a>
              <span>•</span>
              <a href="#hora-hobe" className="hover:text-stone-200 transition-colors">Hora Hobe Lodge</a>
              <span>•</span>
              <a href="#gallery-and-video" className="hover:text-stone-200 transition-colors">Gallery &amp; Video</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
