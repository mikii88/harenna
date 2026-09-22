import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, FileText, Menu, X, Leaf, Send, Sparkles } from 'lucide-react';
import { natureAudio } from '../utils/audioSynth';
import { harennaLogo } from '../data/harennaData';

interface NavbarProps {
  onOpenDocument: () => void;
  onOpenInquiry: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDocument, onOpenInquiry }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const playing = natureAudio.toggle();
    setIsPlayingAudio(playing);
  };

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Discoveries', href: '#discoveries' },
    { label: 'Soil & Coffee', href: '#coffee-agroforestry' },
    { label: 'Forest Honey', href: '#beekeeping-honey' },
    { label: 'Hora Hobe Lodge', href: '#hora-hobe' },
    { label: 'Buffer Map', href: '#forest-map' },
    { label: 'Gallery & Video', href: '#gallery-and-video' },
    { label: 'GECCI Pillars', href: '#pillars' },
    { label: 'Impact Dashboard', href: '#impact-dashboard' },
    { label: 'Founder Statement', href: '#founder-statement' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-stone-800/80 py-3'
          : 'bg-gradient-to-b from-stone-950/90 via-stone-950/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white p-0.5 border-2 border-emerald-400/90 shadow-md group-hover:scale-105 group-hover:border-emerald-300 transition-all shrink-0">
            <img
              src={harennaLogo}
              alt="Harenna Forest Heritage Logo"
              className="w-full h-full object-contain rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-base sm:text-lg font-bold font-display tracking-wider text-stone-100 group-hover:text-emerald-300 transition-colors">
              HARENNA FOREST HERITAGE
            </div>
            <div className="text-[11px] font-medium tracking-widest text-emerald-400 uppercase">
              Bale Mountains • Ethiopia
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Utilities */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Nature Audio Synthesizer Toggle */}
          <button
            id="ambient-sound-toggle-btn"
            onClick={toggleSound}
            title={isPlayingAudio ? 'Mute Forest Ambience' : 'Play Ambient Forest Breeze & Birds'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer ${
              isPlayingAudio
                ? 'bg-emerald-900/80 text-emerald-200 border-emerald-600 shadow-sm animate-pulse'
                : 'bg-stone-900/60 text-stone-400 border-stone-700 hover:text-stone-200 hover:border-stone-500'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px]">Forest Breeze On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="text-[11px]">Play Ambience</span>
              </>
            )}
          </button>

          {/* GECCI Concept Brief Modal Button */}
          <button
            id="open-gecci-doc-btn"
            onClick={onOpenDocument}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Concept Brief</span>
          </button>

          {/* Direct CTA */}
          <button
            id="nav-partner-btn"
            onClick={() => onOpenInquiry('GECCI Partnership & Collaboration')}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-md shadow-emerald-950/40 transition-all hover:scale-102 cursor-pointer"
          >
            <Send className="w-3 h-3" />
            <span>Partner With Us</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleSound}
            className={`p-2 rounded-lg text-xs border ${
              isPlayingAudio
                ? 'bg-emerald-900 text-emerald-200 border-emerald-600'
                : 'bg-stone-900 text-stone-400 border-stone-700'
            }`}
            aria-label="Toggle nature audio"
          >
            {isPlayingAudio ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white bg-stone-900/80 border border-stone-700 rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950/95 border-b border-stone-800 px-6 py-5 space-y-4 text-stone-200 backdrop-blur-lg">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold tracking-wide hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDocument();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-stone-900 border border-stone-700 text-stone-200"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Read GECCI Concept Document</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('GECCI Partnership & Collaboration');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white"
            >
              <Send className="w-4 h-4" />
              <span>Contact Founder / Partner</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
