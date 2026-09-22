import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Mountain,
  Compass,
  Layers,
  Droplets,
  Sprout,
  Coffee,
  Sun,
  Shield,
  Home,
  ChevronRight,
  ExternalLink,
  Info,
  Maximize2,
  CheckCircle2,
  TreePine,
  ArrowUpRight,
  Sliders,
  Sparkles,
  Flame
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ReferenceDot,
  CartesianGrid
} from 'recharts';
import {
  FOREST_ZONES,
  PROJECT_SITES,
  ELEVATION_TRANSECT_DATA,
  ProjectSite,
  ForestZone
} from '../data/mapData';
import { GalleryItem } from '../data/harennaData';

interface InteractiveForestMapProps {
  onSelectPhoto?: (galleryId: string) => void;
  onOpenDocument?: () => void;
  onOpenInquiry?: (topic: string) => void;
  galleryItems?: GalleryItem[];
}

export const InteractiveForestMap: React.FC<InteractiveForestMapProps> = ({
  onSelectPhoto,
  onOpenDocument,
  onOpenInquiry,
  galleryItems = []
}) => {
  const [selectedSiteId, setSelectedSiteId] = useState<string>('hora-hobe');
  const [selectedZoneId, setSelectedZoneId] = useState<string | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'map' | 'elevation' | 'both'>('both');
  const [hoveredSiteId, setHoveredSiteId] = useState<string | null>(null);

  const selectedSite = useMemo(() => {
    return PROJECT_SITES.find((s) => s.id === selectedSiteId) || PROJECT_SITES[0];
  }, [selectedSiteId]);

  const activeZone = useMemo(() => {
    return FOREST_ZONES.find((z) => z.id === selectedSite.zoneId) || FOREST_ZONES[2];
  }, [selectedSite]);

  const filteredSites = useMemo(() => {
    return PROJECT_SITES.filter((site) => {
      const matchCategory = categoryFilter === 'all' || site.category === categoryFilter;
      const matchZone = selectedZoneId === 'all' || site.zoneId === selectedZoneId;
      return matchCategory && matchZone;
    });
  }, [categoryFilter, selectedZoneId]);

  // Find associated photo if exists
  const associatedPhoto = useMemo(() => {
    if (!selectedSite.associatedGalleryId || !galleryItems.length) return null;
    return galleryItems.find((g) => g.id === selectedSite.associatedGalleryId) || null;
  }, [selectedSite, galleryItems]);

  const getSiteIcon = (category: ProjectSite['category'], className = 'w-4 h-4') => {
    switch (category) {
      case 'tourism':
        return <Mountain className={className} />;
      case 'conservation':
        return <Droplets className={className} />;
      case 'coffee':
        return <Coffee className={className} />;
      case 'honey':
        return <Sun className={className} />;
      case 'community':
        return <Sprout className={className} />;
      case 'park':
        return <Shield className={className} />;
      case 'biodiversity':
        return <Sparkles className={className} />;
      default:
        return <MapPin className={className} />;
    }
  };

  const getCategoryBadgeClass = (category: ProjectSite['category']) => {
    switch (category) {
      case 'tourism':
        return 'bg-purple-900/80 text-purple-200 border-purple-700';
      case 'conservation':
        return 'bg-blue-900/80 text-blue-200 border-blue-700';
      case 'coffee':
        return 'bg-amber-900/80 text-amber-200 border-amber-700';
      case 'honey':
        return 'bg-yellow-900/80 text-yellow-200 border-yellow-700';
      case 'community':
        return 'bg-emerald-900/80 text-emerald-200 border-emerald-700';
      case 'park':
        return 'bg-stone-800 text-stone-200 border-stone-600';
      case 'biodiversity':
        return 'bg-teal-900/80 text-teal-200 border-teal-600';
      default:
        return 'bg-stone-800 text-stone-200 border-stone-600';
    }
  };

  return (
    <section
      id="forest-map"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-100 border-b border-stone-800 relative overflow-hidden"
    >
      {/* Background ambient subtle glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-950/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-stone-800">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>Spatial Landscape &amp; Ecological Zones</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Interactive Map of Harenna Forest Buffer &amp; Project Sites
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Explore the vertical descent of the Bale Mountains: from the 4,000m Afroalpine plateau through the primeval cloud forest into our <span className="text-amber-400 font-medium">1,400m – 1,900m Agroforestry Buffer Zone</span> where community conservation and green enterprises protect the forest core.
            </p>
          </div>

          {/* View mode toggle */}
          <div className="flex flex-wrap items-center gap-2 bg-stone-950/80 p-1.5 rounded-xl border border-stone-800 shrink-0">
            <button
              id="view-both-btn"
              onClick={() => setViewMode('both')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'both'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Dual View
            </button>
            <button
              id="view-map-btn"
              onClick={() => setViewMode('map')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'map'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Spatial Map
            </button>
            <button
              id="view-elevation-btn"
              onClick={() => setViewMode('elevation')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'elevation'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Elevation Transect
            </button>
          </div>
        </div>

        {/* Filter Bar: Category & Zone selection */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-stone-950/60 p-4 rounded-2xl border border-stone-800">
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-stone-400" />
              Filter Sites:
            </span>
            {[
              { id: 'all', label: 'All Sites (9)' },
              { id: 'biodiversity', label: 'Species Discoveries' },
              { id: 'tourism', label: 'Eco-Tourism' },
              { id: 'conservation', label: 'Soil & Water' },
              { id: 'coffee', label: 'Specialty Coffee' },
              { id: 'honey', label: 'Forest Honey' },
              { id: 'park', label: 'Park Boundaries' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  categoryFilter === cat.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-stone-900/90 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Zone Highlighting Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-stone-400 font-medium">Zone Focus:</span>
            <select
              value={selectedZoneId}
              onChange={(e) => setSelectedZoneId(e.target.value)}
              className="bg-stone-900 text-stone-200 border border-stone-700 rounded-lg text-xs px-3 py-1.5 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="all">Entire Landscape Transect</option>
              <option value="buffer-agroforestry">Target Buffer Zone (1,400m - 1,900m)</option>
              <option value="cloud-forest-core">Primary Cloud Forest Core</option>
              <option value="sanetti-core">Sanetti Afroalpine Core</option>
              <option value="transition-zone">District Transition Fringe</option>
            </select>
          </div>
        </div>

        {/* Main Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* MAP & ELEVATION VISUALIZATION COLUMN */}
          <div className={`${viewMode === 'both' ? 'lg:col-span-8' : 'lg:col-span-8'} space-y-6`}>
            {/* 1. TOPOGRAPHIC SPATIAL MAP */}
            {(viewMode === 'map' || viewMode === 'both') && (
              <div className="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden shadow-2xl relative">
                {/* Map Title Bar */}
                <div className="p-4 bg-stone-900/90 border-b border-stone-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-200">
                      Bale Mountains – Harenna Forest Cartographic View
                    </span>
                  </div>
                  <div className="text-[11px] text-stone-400 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Click any site pin to inspect</span>
                  </div>
                </div>

                {/* SVG Cartographic Area */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-stone-950 select-none overflow-hidden">
                  <svg
                    viewBox="0 0 800 600"
                    className="w-full h-full object-cover"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      {/* Gradient for Sanetti Afroalpine Zone */}
                      <linearGradient id="grad-sanetti" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#334155" stopOpacity="0.8" />
                      </linearGradient>

                      {/* Gradient for Cloud Forest Core */}
                      <linearGradient id="grad-cloud-forest" x1="0%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stopColor="#064e3b" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#022c22" stopOpacity="0.95" />
                      </linearGradient>

                      {/* Gradient for Agroforestry Buffer Zone */}
                      <linearGradient id="grad-buffer" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14532d" stopOpacity="0.75" />
                        <stop offset="50%" stopColor="#78350f" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#166534" stopOpacity="0.7" />
                      </linearGradient>

                      {/* Pattern for Strict Protected Core */}
                      <pattern
                        id="protected-hatch"
                        width="20"
                        height="20"
                        patternTransform="rotate(45 0 0)"
                        patternUnits="userSpaceOnUse"
                      >
                        <line x1="0" y1="0" x2="0" y2="20" stroke="#059669" strokeWidth="1" strokeOpacity="0.35" />
                      </pattern>

                      {/* Radial pulse glow for selected site */}
                      <radialGradient id="pulse-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* BASE TOPOGRAPHY CONTOUR ZONES */}
                    {/* Zone 1: Sanetti Afroalpine Plateau (North, Top) */}
                    <path
                      d="M 0 0 L 800 0 L 800 130 C 650 140, 520 110, 380 135 C 240 160, 100 120, 0 140 Z"
                      fill="url(#grad-sanetti)"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />

                    {/* Zone 2: Escarpment & Primary Cloud Forest Core (Middle-North) */}
                    <path
                      d="M 0 140 C 100 120, 240 160, 380 135 C 520 110, 650 140, 800 130 L 800 330 C 660 345, 520 310, 370 335 C 220 360, 90 320, 0 340 Z"
                      fill="url(#grad-cloud-forest)"
                      stroke="#059669"
                      strokeWidth="1.5"
                      opacity={selectedZoneId === 'cloud-forest-core' || selectedZoneId === 'all' ? 1 : 0.4}
                    />

                    {/* Hatch overlay on strict protected cloud forest */}
                    <path
                      d="M 0 140 C 100 120, 240 160, 380 135 C 520 110, 650 140, 800 130 L 800 330 C 660 345, 520 310, 370 335 C 220 360, 90 320, 0 340 Z"
                      fill="url(#protected-hatch)"
                      opacity={0.6}
                    />

                    {/* Zone 3: TARGET AGROFORESTRY BUFFER ZONE (Middle-South, 1,400m - 1,900m) */}
                    <path
                      d="M 0 340 C 90 320, 220 360, 370 335 C 520 310, 660 345, 800 330 L 800 510 C 680 520, 510 490, 390 515 C 260 540, 110 500, 0 520 Z"
                      fill="url(#grad-buffer)"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      className="transition-all duration-300"
                      opacity={selectedZoneId === 'buffer-agroforestry' || selectedZoneId === 'all' ? 1 : 0.35}
                    />

                    {/* Zone 4: Lowland Transition & Agricultural Foothills (South, Bottom) */}
                    <path
                      d="M 0 520 C 110 500, 260 540, 390 515 C 510 490, 680 520, 800 510 L 800 600 L 0 600 Z"
                      fill="#1c1917"
                      stroke="#44403c"
                      strokeWidth="1"
                      opacity={selectedZoneId === 'transition-zone' || selectedZoneId === 'all' ? 1 : 0.4}
                    />

                    {/* TOPOGRAPHIC CONTOUR LINES */}
                    <path
                      d="M 0 60 C 200 45, 400 80, 600 50 L 800 65"
                      fill="none"
                      stroke="#64748b"
                      strokeWidth="0.75"
                      strokeDasharray="3 3"
                      opacity="0.4"
                    />
                    <path
                      d="M 0 200 C 220 180, 480 230, 800 190"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="0.75"
                      strokeDasharray="3 3"
                      opacity="0.4"
                    />
                    <path
                      d="M 0 270 C 250 250, 500 290, 800 260"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="0.75"
                      strokeDasharray="3 3"
                      opacity="0.4"
                    />
                    <path
                      d="M 0 410 C 230 380, 520 430, 800 395"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="0.75"
                      strokeDasharray="4 4"
                      opacity="0.5"
                    />
                    <path
                      d="M 0 460 C 260 440, 550 475, 800 450"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="0.75"
                      strokeDasharray="4 4"
                      opacity="0.5"
                    />

                    {/* WATERWAYS: HARENNA & SHAWE RIVERS FLOWING SOUTH */}
                    {/* Main Harenna River Path descending from glacier tarns */}
                    <path
                      d="M 280 40 Q 320 110, 310 180 T 360 270 T 350 330 T 355 420 T 420 510 T 470 600"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                    {/* Waterfall Gorge indicator at Hora Hobe */}
                    <circle cx="352" cy="326" r="7" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 2" className="animate-spin" />
                    <text x="365" y="324" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                      Harenna Falls
                    </text>

                    {/* Tributary Shawe Stream */}
                    <path
                      d="M 520 160 Q 490 230, 440 310 T 420 430 T 470 600"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                      opacity="0.65"
                    />

                    {/* TRANSECT ROAD: Bale High Pass descending to Harenna Bulluq */}
                    <path
                      d="M 180 0 Q 230 70, 200 130 T 260 210 T 230 290 T 300 380 T 420 460 T 590 560"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      strokeDasharray="5 3"
                      opacity="0.7"
                    />

                    {/* ZONE LABELS ON MAP */}
                    <text x="30" y="45" fill="#94a3b8" fontSize="11" fontWeight="bold" letterSpacing="1" opacity="0.8">
                      SANETTI AFROALPINE PLATEAU (3,800m – 4,377m)
                    </text>
                    <text x="30" y="165" fill="#34d399" fontSize="11" fontWeight="bold" letterSpacing="1" opacity="0.9">
                      PRIMARY CLOUD FOREST CORE — ZERO EXTRACTION (1,900m – 3,200m)
                    </text>
                    <text x="30" y="365" fill="#fcd34d" fontSize="12" fontWeight="bold" letterSpacing="1">
                      ★ TARGET AGROFORESTRY BUFFER ZONE (1,400m – 1,900m)
                    </text>
                    <text x="30" y="382" fill="#d97706" fontSize="10" fontWeight="medium">
                      HARENNA FOREST HERITAGE WORKING FOOTPRINT
                    </text>
                    <text x="30" y="540" fill="#a8a29e" fontSize="11" fontWeight="bold" letterSpacing="1" opacity="0.8">
                      LOWLAND AGRICULTURAL FRINGE (HARENNA BULLUQ)
                    </text>

                    {/* CONTOUR ALTITUDE ANNOTATIONS */}
                    <rect x="710" y="15" width="75" height="20" rx="4" fill="#0f172a" opacity="0.8" />
                    <text x="747" y="29" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">
                      4,000m ASL
                    </text>

                    <rect x="710" y="145" width="75" height="20" rx="4" fill="#064e3b" opacity="0.8" />
                    <text x="747" y="159" fill="#6ee7b7" fontSize="10" fontWeight="bold" textAnchor="middle">
                      3,000m ASL
                    </text>

                    <rect x="710" y="315" width="75" height="20" rx="4" fill="#78350f" opacity="0.8" />
                    <text x="747" y="329" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">
                      1,900m ASL
                    </text>

                    <rect x="710" y="495" width="75" height="20" rx="4" fill="#292524" opacity="0.8" />
                    <text x="747" y="509" fill="#d6d3d1" fontSize="10" fontWeight="bold" textAnchor="middle">
                      1,400m ASL
                    </text>

                    {/* PROJECT SITES SVG PINS */}
                    {filteredSites.map((site) => {
                      const isSelected = site.id === selectedSiteId;
                      const isHovered = site.id === hoveredSiteId;
                      const cx = (site.coordinates.xPercent / 100) * 800;
                      const cy = (site.coordinates.yPercent / 100) * 600;

                      let pinColor = '#10b981'; // emerald
                      if (site.category === 'tourism') pinColor = '#a855f7'; // purple
                      if (site.category === 'conservation') pinColor = '#38bdf8'; // blue
                      if (site.category === 'coffee') pinColor = '#f59e0b'; // amber
                      if (site.category === 'honey') pinColor = '#eab308'; // yellow
                      if (site.category === 'park') pinColor = '#94a3b8'; // slate
                      if (site.category === 'biodiversity') pinColor = '#14b8a6'; // teal

                      return (
                        <g
                          key={site.id}
                          className="cursor-pointer transition-transform duration-200"
                          onClick={() => setSelectedSiteId(site.id)}
                          onMouseEnter={() => setHoveredSiteId(site.id)}
                          onMouseLeave={() => setHoveredSiteId(null)}
                        >
                          {/* Outer pulse when selected */}
                          {isSelected && (
                            <>
                              <circle
                                cx={cx}
                                cy={cy}
                                r="26"
                                fill={pinColor}
                                opacity="0.2"
                                className="animate-ping"
                              />
                              <circle
                                cx={cx}
                                cy={cy}
                                r="18"
                                fill="none"
                                stroke={pinColor}
                                strokeWidth="2"
                                strokeDasharray="3 3"
                              />
                            </>
                          )}

                          {/* Site Marker Pin Circle */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isSelected ? 13 : isHovered ? 11 : 9}
                            fill={pinColor}
                            stroke="#ffffff"
                            strokeWidth={isSelected ? 3 : 2}
                            className="shadow-lg"
                          />

                          {/* Inner dot */}
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isSelected ? 4 : 3}
                            fill="#ffffff"
                          />

                          {/* Site Name Label Tag */}
                          <g transform={`translate(${cx + 14}, ${cy + 4})`}>
                            <rect
                              x="-2"
                              y="-13"
                              width={site.name.length * 6.8 + 14}
                              height="20"
                              rx="4"
                              fill={isSelected ? '#022c22' : '#0c0a09'}
                              stroke={isSelected ? pinColor : '#44403c'}
                              strokeWidth={isSelected ? 1.5 : 1}
                              opacity="0.95"
                            />
                            <text
                              x="5"
                              y="1"
                              fill={isSelected ? '#ffffff' : '#e7e5e4'}
                              fontSize="10"
                              fontWeight={isSelected ? 'bold' : 'normal'}
                              fontFamily="sans-serif"
                            >
                              {site.name}
                            </text>
                          </g>
                        </g>
                      );
                    })}

                    {/* COMPASS ROSE (Bottom-Left) */}
                    <g transform="translate(45, 540)">
                      <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#475569" strokeWidth="1" opacity="0.9" />
                      <path d="M 0 -14 L 4 0 L 0 -4 L -4 0 Z" fill="#ef4444" />
                      <path d="M 0 14 L 4 0 L 0 4 L -4 0 Z" fill="#94a3b8" />
                      <text x="0" y="-17" fill="#ef4444" fontSize="9" fontWeight="bold" textAnchor="middle">
                        N
                      </text>
                      <text x="0" y="25" fill="#94a3b8" fontSize="8" textAnchor="middle">
                        South to Genale
                      </text>
                    </g>

                    {/* MAP SCALE BAR (Bottom-Center) */}
                    <g transform="translate(640, 570)">
                      <rect x="0" y="0" width="120" height="4" fill="#ffffff" />
                      <line x1="0" y1="-3" x2="0" y2="7" stroke="#ffffff" strokeWidth="1.5" />
                      <line x1="60" y1="-3" x2="60" y2="7" stroke="#ffffff" strokeWidth="1.5" />
                      <line x1="120" y1="-3" x2="120" y2="7" stroke="#ffffff" strokeWidth="1.5" />
                      <text x="0" y="16" fill="#a8a29e" fontSize="9">0</text>
                      <text x="60" y="16" fill="#a8a29e" fontSize="9" textAnchor="middle">10 km</text>
                      <text x="120" y="16" fill="#a8a29e" fontSize="9" textAnchor="end">20 km</text>
                    </g>
                  </svg>
                </div>

                {/* Map Quick Legend */}
                <div className="p-3 bg-stone-900/90 border-t border-stone-800 flex flex-wrap items-center justify-between text-xs gap-3">
                  <div className="flex flex-wrap items-center gap-4 text-[11px] text-stone-300">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-purple-500 inline-block" />
                      <span>Eco-Tourism (Hora Hobe)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-sky-400 inline-block" />
                      <span>Soil &amp; Water Trenches</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                      <span>Arabica Coffee Agroforestry</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                      <span>Cultural Apiary</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                      <span>Community Nursery</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-teal-400 inline-block" />
                      <span>Species Discovery (Dasypeltis)</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                    <span className="w-2.5 h-1.5 border border-dashed border-amber-400 inline-block" />
                    <span>Dashed Line: 1,400m – 1,900m Buffer Zone</span>
                  </div>
                </div>
              </div>
            )}

            {/* 2. RECHARTS ELEVATION TRANSECT PROFILE */}
            {(viewMode === 'elevation' || viewMode === 'both') && (
              <div className="bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden shadow-2xl p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Mountain className="w-4 h-4 text-emerald-400" />
                      <h4 className="text-sm font-bold uppercase tracking-wider text-stone-200">
                        Bale Mountain Escarpment Elevation Cross-Section (Recharts)
                      </h4>
                    </div>
                    <p className="text-xs text-stone-400">
                      North-to-South descent along the 60km transect from 4,120m Sanetti down to 1,250m Harenna lowlands.
                    </p>
                  </div>
                  <div className="text-[11px] font-medium text-emerald-400 bg-emerald-950/70 border border-emerald-800/80 px-2.5 py-1 rounded-lg">
                    Interactive Curve
                  </div>
                </div>

                {/* Recharts Area Profile */}
                <div className="h-64 sm:h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={ELEVATION_TRANSECT_DATA}
                      margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
                      onClick={(e: any) => {
                        if (e && e.activePayload && e.activePayload[0]) {
                          const p = e.activePayload[0].payload as typeof ELEVATION_TRANSECT_DATA[0];
                          if (p.siteId) setSelectedSiteId(p.siteId);
                        }
                      }}
                    >
                      <defs>
                        <linearGradient id="elevationGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#059669" stopOpacity={0.8} />
                          <stop offset="50%" stopColor="#d97706" stopOpacity={0.5} />
                          <stop offset="95%" stopColor="#451a03" stopOpacity={0.2} />
                        </linearGradient>
                      </defs>

                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" vertical={false} />

                      {/* Zone Reference Areas with cast */}
                      <ReferenceArea
                        {...({
                          x1: 0,
                          x2: 12,
                          fill: '#1e293b',
                          fillOpacity: 0.4,
                          label: {
                            value: 'Sanetti Core (>3,800m)',
                            fill: '#94a3b8',
                            fontSize: 10,
                            position: 'insideTopLeft'
                          }
                        } as any)}
                      />

                      <ReferenceArea
                        {...({
                          x1: 12,
                          x2: 32,
                          fill: '#064e3b',
                          fillOpacity: 0.45,
                          label: {
                            value: 'Protected Cloud Forest (BMNP)',
                            fill: '#6ee7b7',
                            fontSize: 10,
                            position: 'insideTop'
                          }
                        } as any)}
                      />

                      <ReferenceArea
                        {...({
                          x1: 32,
                          x2: 50,
                          fill: '#78350f',
                          fillOpacity: 0.4,
                          label: {
                            value: '★ Target Buffer (1,400m-1,900m)',
                            fill: '#fde68a',
                            fontSize: 11,
                            fontWeight: 'bold',
                            position: 'insideTop'
                          }
                        } as any)}
                      />

                      <ReferenceArea
                        {...({
                          x1: 50,
                          x2: 60,
                          fill: '#1c1917',
                          fillOpacity: 0.3,
                          label: {
                            value: 'District Fringe',
                            fill: '#a8a29e',
                            fontSize: 10,
                            position: 'insideTopRight'
                          }
                        } as any)}
                      />

                      <XAxis
                        dataKey="km"
                        stroke="#78716c"
                        fontSize={11}
                        tickFormatter={(v) => `${v} km`}
                      />
                      <YAxis
                        stroke="#78716c"
                        fontSize={11}
                        domain={[1000, 4500]}
                        tickFormatter={(v) => `${v}m`}
                      />

                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload as typeof ELEVATION_TRANSECT_DATA[0];
                            return (
                              <div className="bg-stone-900 border border-stone-700 p-3 rounded-xl shadow-xl space-y-1 text-xs text-stone-200 max-w-xs">
                                <div className="font-bold text-white font-display text-sm">
                                  {data.siteName || data.zoneName}
                                </div>
                                <div className="text-emerald-400 font-semibold">
                                  Altitude: {data.elevation}m ASL • Transect: {data.km} km
                                </div>
                                <div className="text-stone-300">
                                  Zone: {data.zoneName}
                                </div>
                                <div className="text-sky-300">
                                  Est. Precipitation: ~{data.rainfallMm} mm/year
                                </div>
                                {data.siteId && (
                                  <div className="pt-1 text-[10px] text-amber-400 font-medium">
                                    Click point to focus site details →
                                  </div>
                                )}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />

                      <Area
                        type="monotone"
                        dataKey="elevation"
                        stroke="#10b981"
                        strokeWidth={2.5}
                        fill="url(#elevationGrad)"
                      />

                      {/* Reference Dots for specific project sites */}
                      {PROJECT_SITES.map((site) => (
                        <ReferenceDot
                          key={site.id}
                          x={site.coordinates.distanceKm}
                          y={site.elevationMeters}
                          r={site.id === selectedSiteId ? 8 : 5}
                          fill={site.id === selectedSiteId ? '#f59e0b' : '#38bdf8'}
                          stroke="#ffffff"
                          strokeWidth={site.id === selectedSiteId ? 2.5 : 1.5}
                          className="cursor-pointer"
                          onClick={() => setSelectedSiteId(site.id)}
                        />
                      ))}
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex flex-wrap items-center justify-between text-xs text-stone-400 pt-1 border-t border-stone-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span>Gold Pin: Selected Site on Altitude Profile</span>
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Highest Point: Tulluu Dimtuu (4,377m) | Harenna Valley Floor: 1,250m
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SITE INSPECTOR & DETAIL CARD COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            {/* Active Site Inspector Card */}
            <div className="bg-stone-950 rounded-2xl border border-stone-800 p-6 shadow-2xl space-y-5 relative overflow-hidden">
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600" />

              {/* Status and Category */}
              <div className="flex items-center justify-between gap-2 pt-1">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getCategoryBadgeClass(
                    selectedSite.category
                  )}`}
                >
                  {getSiteIcon(selectedSite.category, 'w-3.5 h-3.5')}
                  <span>{selectedSite.category.toUpperCase()}</span>
                </span>

                <span className="text-xs font-medium text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-0.5 rounded-md">
                  {selectedSite.status}
                </span>
              </div>

              {/* Title & Local Name */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {selectedSite.name}
                </h3>
                {selectedSite.localName && (
                  <p className="text-xs font-medium text-stone-400 italic">
                    {selectedSite.localName}
                  </p>
                )}
              </div>

              {/* Altitude & Coordinates Pill Bar */}
              <div className="grid grid-cols-2 gap-2 p-3 bg-stone-900/90 rounded-xl border border-stone-800 text-xs">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Elevation</span>
                  <span className="text-emerald-400 font-bold font-display text-sm">
                    {selectedSite.elevationMeters}m ASL
                  </span>
                </div>
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase font-bold">Coordinates</span>
                  <span className="text-stone-200 font-mono text-[11px]">
                    {selectedSite.coordinates.lat}, {selectedSite.coordinates.lng}
                  </span>
                </div>
              </div>

              {/* Zone info */}
              <div className="p-3 rounded-xl bg-stone-900/50 border border-stone-800/80 space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400 block">
                  Ecological Zone
                </span>
                <div className="text-xs font-semibold text-stone-200">
                  {activeZone.name}
                </div>
                <div className="text-[11px] text-stone-400">
                  {activeZone.legalStatus}
                </div>
              </div>

              {/* Site Description */}
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                {selectedSite.description}
              </p>

              {/* Field Roles */}
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-stone-900/80 border border-stone-800">
                  <span className="font-bold text-emerald-400 block text-[11px] mb-0.5">
                    Ecological Function:
                  </span>
                  <p className="text-stone-300 text-[11px] leading-relaxed">
                    {selectedSite.ecologicalRole}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-stone-900/80 border border-stone-800">
                  <span className="font-bold text-amber-400 block text-[11px] mb-0.5">
                    Community &amp; Youth Livelihood Benefit:
                  </span>
                  <p className="text-stone-300 text-[11px] leading-relaxed">
                    {selectedSite.communityBenefit}
                  </p>
                </div>
              </div>

              {/* Associated Photo Preview if available */}
              {associatedPhoto && (
                <div
                  className="relative rounded-xl overflow-hidden border border-stone-800 group cursor-pointer"
                  onClick={() => onSelectPhoto && onSelectPhoto(associatedPhoto.id)}
                >
                  <img
                    src={associatedPhoto.image}
                    alt={associatedPhoto.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent flex items-end p-2.5">
                    <div className="flex items-center justify-between w-full text-xs">
                      <span className="text-[11px] font-bold text-white truncate max-w-[180px]">
                        {associatedPhoto.title}
                      </span>
                      <span className="text-[10px] text-emerald-300 font-semibold flex items-center gap-1 bg-stone-900/80 px-2 py-0.5 rounded">
                        <span>View Photo</span>
                        <Maximize2 className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => onOpenInquiry && onOpenInquiry(`Inquiry about ${selectedSite.name}`)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-md shadow-emerald-950 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire / Support This Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenDocument && onOpenDocument()}
                  className="w-full py-2 px-4 rounded-xl text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Read Field Documentation</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </button>
              </div>

              {/* Quick site switcher buttons */}
              <div className="pt-2 border-t border-stone-800">
                <div className="text-[10px] uppercase font-bold text-stone-400 mb-2">
                  Browse Other Sites:
                </div>
                <div className="grid grid-cols-2 gap-1.5 max-h-36 overflow-y-auto pr-1">
                  {PROJECT_SITES.map((site) => (
                    <button
                      key={site.id}
                      onClick={() => setSelectedSiteId(site.id)}
                      className={`text-left p-1.5 rounded-lg text-[11px] truncate transition-colors cursor-pointer border ${
                        site.id === selectedSiteId
                          ? 'bg-emerald-950 text-emerald-200 border-emerald-700 font-bold'
                          : 'bg-stone-900/60 text-stone-400 hover:text-stone-200 border-stone-800'
                      }`}
                    >
                      {site.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Why the 1,400m - 1,900m Buffer Zone Matters Card */}
            <div className="bg-stone-950/80 rounded-2xl border border-amber-900/40 p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <h4 className="text-xs font-bold uppercase tracking-wider font-display">
                  Why the 1,400m – 1,900m Buffer Zone is Critical
                </h4>
              </div>
              <p className="text-xs text-stone-300 font-light leading-relaxed">
                Ecologists recognize this exact belt as the human-forest interface. Without viable green livelihoods here, smallholders face economic pressure to clear old-growth cloud forest. Our interventions provide:
              </p>
              <ul className="space-y-1.5 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>15–20% higher soil moisture</strong> through contour retention trenches.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Specialty Arabica price premium</strong> eliminating the need for land clearing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero-timber beekeeping revenue</strong> from wild canopy nectar flows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Hora Hobe Eco-Lodge</strong> anchoring local youth nature guiding.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
