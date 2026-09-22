import React, { useState, useEffect, useRef } from 'react';
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Droplets,
  Trees,
  Users,
  Activity,
  RefreshCw,
  Target,
  ShieldCheck,
  Award,
  Sparkles,
  ChevronRight,
  FileText
} from 'lucide-react';
import { PartnershipPillar } from '../data/harennaData';

export interface ConservationImpactMetric {
  id: string;
  title: string;
  shortDesc: string;
  currentValue: number;
  targetValue: number;
  unit: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  fieldNote: string;
}

export interface EnrichedPillar extends PartnershipPillar {
  metricLabel: string;
  currentValue: number;
  targetValue: number;
  unit: string;
  percentage: number;
  milestoneTitle: string;
  milestoneDetail: string;
  statusBadge: string;
}

// Global Conservation Scale & Real-Time Impact Data
export const CORE_CONSERVATION_METRICS: ConservationImpactMetric[] = [
  {
    id: 'forest-buffer',
    title: 'Protected Forest Buffer',
    shortDesc: 'Montane cloud forest under local community stewardship',
    currentValue: 2450,
    targetValue: 3200,
    unit: 'Hectares',
    decimals: 0,
    icon: Trees,
    category: 'Landscape Habitat',
    fieldNote: 'Buffer zone between 1,400m and 1,900m altitude in Bale Eco-Region'
  },
  {
    id: 'soil-trenches',
    title: 'Rainwater Retention Trenches',
    shortDesc: 'Hand-excavated contour ditches intercepting monsoonal runoff',
    currentValue: 18.5,
    targetValue: 25.0,
    unit: 'km excavated',
    decimals: 1,
    icon: Droplets,
    category: 'Watershed & Soil',
    fieldNote: 'Trapping torrents on steep slopes to hydrate Arabica root zones'
  },
  {
    id: 'stewards-mobilized',
    title: 'Youth & Farmers Mobilized',
    shortDesc: 'Active smallholders, naturalist guides, and young apiculturists',
    currentValue: 148,
    targetValue: 200,
    unit: 'Active Stewards',
    decimals: 0,
    icon: Users,
    category: 'Community Capital',
    fieldNote: 'Local youth network across Harenna Bulluq farming cooperatives'
  },
  {
    id: 'native-trees',
    title: 'Native Canopy & Shade Trees',
    shortDesc: 'Schefflera, Syzygium & wild coffee canopy protected and planted',
    currentValue: 38500,
    targetValue: 50000,
    unit: 'Canopy Trees',
    decimals: 0,
    icon: ShieldCheck,
    category: 'Canopy Density',
    fieldNote: 'Preserving multi-story forest microclimate essential for wild bees'
  },
  {
    id: 'bee-hives',
    title: 'Traditional & Improved Hives',
    shortDesc: 'Cultural log hives & modern yellow box hives in forest canopy',
    currentValue: 96,
    targetValue: 120,
    unit: 'Active Colonies',
    decimals: 0,
    icon: Sparkles,
    category: 'Forest Pollinators',
    fieldNote: '100% wild forage on endemic highland flowers without sugar feeding'
  },
  {
    id: 'runoff-reduction',
    title: 'Soil Erosion Intercepted',
    shortDesc: 'Measured reduction in topsoil silt wash from steep agricultural plots',
    currentValue: 64,
    targetValue: 80,
    unit: '% Runoff Retained',
    suffix: '%',
    decimals: 0,
    icon: TrendingUp,
    category: 'Empirical Assays',
    fieldNote: 'Documented field plots comparing stone bund trenches vs control plots'
  }
];

// Rich Pillar Metadata with Real-Time Field Milestones
export const ENRICHED_PILLARS: EnrichedPillar[] = [
  {
    number: 1,
    title: 'Technical Mentorship & Knowledge Exchange',
    description: 'Strengthening field-tested practices across conservation, coffee agroforestry, apiculture, eco-tourism, and green enterprise.',
    focusAreas: ['Soil moisture tracking', 'Agro-ecological tree species', 'Beekeeping hive adaptation', 'Sustainable tourism master plan'],
    metricLabel: 'Technical Field Sessions',
    currentValue: 12,
    targetValue: 15,
    unit: 'Exchange Sessions',
    percentage: 80,
    milestoneTitle: 'Agarfa College Protocol Integration',
    milestoneDetail: 'Mastery in soil moisture assay and seed propagation deployed across local farmsteads.',
    statusBadge: 'Active Field Phase'
  },
  {
    number: 2,
    title: 'Documentation & Evidence Building',
    description: 'Transforming raw field observations and community progress into rigorous, measurable, and shareable empirical data.',
    focusAreas: ['Runoff reduction metrics', 'Soil organic matter assays', 'Coffee yield and moisture baselines', 'Photographic transect archives'],
    metricLabel: 'Empirical Transect Datasets',
    currentValue: 48,
    targetValue: 60,
    unit: 'Transect Samples',
    percentage: 80,
    milestoneTitle: 'GPS Elevation & Canopy Mapping',
    milestoneDetail: 'Georeferenced data points logged for runoff velocity and seasonal flora bloom cycles.',
    statusBadge: 'Continuous Logging'
  },
  {
    number: 3,
    title: 'Youth & Green Entrepreneurship',
    description: 'Empowering young men and women in the Harenna Bulluq district with practical skills, mentoring, and green livelihood pathways.',
    focusAreas: ['Naturalist tour guide training', 'Specialty coffee cupping & processing', 'Hive building & colony management', 'Digital visibility & marketing'],
    metricLabel: 'Youth Certified & Trained',
    currentValue: 36,
    targetValue: 50,
    unit: 'Certified Youth',
    percentage: 72,
    milestoneTitle: 'Park-Accredited Guiding Cohort',
    milestoneDetail: 'Young naturalist guides trained on Bale Mountains flora, birding, and safety ethics.',
    statusBadge: 'Cohort in Progress'
  },
  {
    number: 4,
    title: 'Market & Investment Connections',
    description: 'Establishing ethical, direct-trade corridors for Harenna Arabica coffee, forest honey, and eco-tourism capital.',
    focusAreas: ['Responsible grant funding', 'Impact investment for Hora Hobe lodge', 'Direct-trade export roasting partners', 'Fair certification frameworks'],
    metricLabel: 'Direct-Trade Corridors',
    currentValue: 3,
    targetValue: 5,
    unit: 'Trade Linkages',
    percentage: 60,
    milestoneTitle: 'Specialty Coffee Farmgate Premiums',
    milestoneDetail: 'Direct buyer interest secured for 100% Arabica washed and natural micro-lots.',
    statusBadge: 'Expansion Phase'
  },
  {
    number: 5,
    title: 'Research & Learning Partnerships',
    description: 'Linking community demonstration plots with universities, forestry institutes, and international conservation bodies.',
    focusAreas: ['Agarfa Agricultural College collaboration', 'Bale Mountains National Park ecological monitoring', 'IUCN & academic field studies', 'Biodiversity inventories'],
    metricLabel: 'Institutional Research MoUs',
    currentValue: 5,
    targetValue: 6,
    unit: 'MoUs & Field Plots',
    percentage: 83,
    milestoneTitle: 'Endemic Reptile Discovery Verification',
    milestoneDetail: 'Field collaboration documenting Dasypeltis albigularis and high-altitude floral species.',
    statusBadge: 'Peer Reviewed'
  },
  {
    number: 6,
    title: 'Scaling Locally Tested Solutions',
    description: 'Taking proven conservation techniques from our demonstration farm and expanding them to adjacent farming families.',
    focusAreas: ['Farmer-to-farmer trench construction', 'Apiary cooperative creation', 'Community nursery seedling sharing', 'Landscape-level watershed stewardship'],
    metricLabel: 'Adjoining Smallholder Plots',
    currentValue: 24,
    targetValue: 35,
    unit: 'Replicated Farmsteads',
    percentage: 69,
    milestoneTitle: 'Watershed-Wide Contour Diffusion',
    milestoneDetail: 'Demonstration plots replicated on 24 family farms outside primary protected boundaries.',
    statusBadge: 'Replication Mode'
  }
];

// Smooth Animated Number Counter Component
export const DynamicCounter: React.FC<{
  targetValue: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  triggerKey?: number | string;
}> = ({
  targetValue,
  duration = 1400,
  decimals = 0,
  prefix = '',
  suffix = '',
  triggerKey
}) => {
  const [currentDisplay, setCurrentDisplay] = useState<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const startValRef = useRef<number>(0);

  useEffect(() => {
    let animId: number;
    startTimeRef.current = null;
    startValRef.current = 0;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth Ease-Out Cubic: 1 - (1 - t)^3
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const calculated = startValRef.current + (targetValue - startValRef.current) * easeProgress;
      
      setCurrentDisplay(calculated);

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setCurrentDisplay(targetValue);
      }
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [targetValue, duration, triggerKey]);

  const formattedNumber = decimals > 0 
    ? currentDisplay.toFixed(decimals)
    : Math.round(currentDisplay).toLocaleString();

  return (
    <span className="font-mono font-bold tracking-tight">
      {prefix}{formattedNumber}{suffix}
    </span>
  );
};

// Fluid Animated Progress Bar Component with Shimmer Effect
export const AnimatedProgressBar: React.FC<{
  percentage: number;
  colorClass?: string;
  showPercentageText?: boolean;
  heightClass?: string;
  triggerKey?: number | string;
}> = ({
  percentage,
  colorClass = 'from-emerald-700 via-emerald-600 to-teal-500',
  showPercentageText = false,
  heightClass = 'h-2.5',
  triggerKey
}) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Reset briefly then animate smoothly to trigger visual motion
    setWidth(0);
    const timeout = setTimeout(() => {
      setWidth(Math.min(Math.max(percentage, 0), 100));
    }, 60);
    return () => clearTimeout(timeout);
  }, [percentage, triggerKey]);

  return (
    <div className="w-full space-y-1.5">
      <div className={`w-full ${heightClass} bg-stone-200/80 rounded-full overflow-hidden p-0.5 border border-stone-300/60 relative shadow-inner`}>
        <div
          className={`h-full bg-gradient-to-r ${colorClass} rounded-full transition-all duration-1000 ease-out relative`}
          style={{ width: `${width}%` }}
        >
          {/* Subtle light shimmer sweep */}
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse opacity-60" />
        </div>
      </div>
      {showPercentageText && (
        <div className="flex justify-between items-center text-[11px] text-stone-500">
          <span>0%</span>
          <span className="font-bold text-emerald-800">{Math.round(percentage)}% Milestone Met</span>
          <span>100% Target</span>
        </div>
      )}
    </div>
  );
};

interface CorePillarsSectionProps {
  onOpenDocument: () => void;
  onOpenInquiry: (topic?: string) => void;
  partnershipValue: {
    whatWeBring: Array<{ title: string; detail: string }>;
    whatWeSeek: Array<{ title: string; detail: string }>;
  };
}

export const CorePillarsSection: React.FC<CorePillarsSectionProps> = ({
  onOpenDocument,
  onOpenInquiry,
  partnershipValue
}) => {
  // Mode: 'active' (current field measurements) vs 'target' (2026/2027 projected partnership scale)
  const [viewMode, setViewMode] = useState<'active' | 'target'>('active');
  const [animationTrigger, setAnimationTrigger] = useState<number>(0);
  const [selectedPillarId, setSelectedPillarId] = useState<number | null>(null);
  const [livePulseTick, setLivePulseTick] = useState<number>(0);

  // Simulated live field telemetry pulse every few seconds to visualize ongoing dynamic scale
  useEffect(() => {
    const timer = setInterval(() => {
      setLivePulseTick((prev) => (prev + 1) % 100);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleReplayAnimation = () => {
    setAnimationTrigger((prev) => prev + 1);
  };

  return (
    <section 
      id="pillars" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-100 border-b border-stone-200 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300/80 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Strategic Partnership Profile &amp; Core Pillars</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-stone-950 tracking-tight">
            Six Pillars of Collaboration with GECCI
          </h2>
          
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Prepared for the Global Environmental and Climate Conservation Initiative (GECCI) and conservation partners. Explore real-time metrics tracking on-the-ground scale across our 6 strategic action pillars.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* DYNAMIC IMPACT VISUALIZER: REAL-TIME CONSERVATION SCALE CONTROLLER & METRICS */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl border border-stone-300 p-6 sm:p-10 shadow-sm space-y-8">
          {/* Top Control Bar with Live Telemetry Badge and View Mode Toggles */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Real-Time Conservation Impact &amp; Scale
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-stone-100 text-stone-600 border border-stone-200">
                  Telemetry: Harenna Bulluq Plots #{101 + (livePulseTick % 5)}
                </span>
              </div>
              <p className="text-xs text-stone-500">
                Live quantitative progress tracking conservation plots, moisture retention trenches, and youth livelihoods.
              </p>
            </div>

            {/* Interactive Mode Switcher & Replay Button */}
            <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
              <div className="inline-flex p-1 bg-stone-100 border border-stone-300/80 rounded-xl shadow-inner text-xs font-semibold">
                <button
                  id="pillars-toggle-active-btn"
                  onClick={() => {
                    setViewMode('active');
                    handleReplayAnimation();
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    viewMode === 'active'
                      ? 'bg-emerald-900 text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                  }`}
                >
                  Current Field Baseline
                </button>
                <button
                  id="pillars-toggle-target-btn"
                  onClick={() => {
                    setViewMode('target');
                    handleReplayAnimation();
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    viewMode === 'target'
                      ? 'bg-emerald-900 text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                  }`}
                >
                  2026/27 Scale Target
                </button>
              </div>

              <button
                id="pillars-replay-anim-btn"
                onClick={handleReplayAnimation}
                title="Replay counter and progress animation"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-300 rounded-xl transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5 text-emerald-700" />
                <span className="hidden sm:inline">Animate</span>
              </button>
            </div>
          </div>

          {/* 6 Key Macro Metrics Cards with Dynamic Counters & Progress Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_CONSERVATION_METRICS.map((metric) => {
              const Icon = metric.icon;
              const displayVal = viewMode === 'active' ? metric.currentValue : metric.targetValue;
              const progressPct = Math.round((metric.currentValue / metric.targetValue) * 100);

              return (
                <div
                  key={metric.id}
                  className="p-5 rounded-2xl bg-stone-50/80 border border-stone-200 hover:border-emerald-600/60 transition-all shadow-xs flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-100/80 text-emerald-900">
                        {metric.category}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-stone-900 font-display">
                      {metric.title}
                    </h3>
                    <p className="text-xs text-stone-500 leading-snug line-clamp-2">
                      {metric.shortDesc}
                    </p>
                  </div>

                  {/* Dynamic Counter Display */}
                  <div className="space-y-2 pt-2 border-t border-stone-200/80">
                    <div className="flex items-baseline justify-between">
                      <div className="text-2xl sm:text-3xl font-extrabold text-stone-950 font-display">
                        <DynamicCounter
                          targetValue={displayVal}
                          decimals={metric.decimals || 0}
                          prefix={metric.prefix || ''}
                          suffix={metric.suffix || ''}
                          triggerKey={`${metric.id}-${viewMode}-${animationTrigger}`}
                        />
                      </div>
                      <span className="text-xs font-semibold text-emerald-800 font-mono">
                        {metric.unit}
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-stone-500 font-medium">
                        <span>{viewMode === 'active' ? 'Active Field Progress' : 'Projected Scale'}</span>
                        <span className="font-bold text-emerald-800">{progressPct}%</span>
                      </div>
                      <AnimatedProgressBar
                        percentage={viewMode === 'active' ? progressPct : 100}
                        heightClass="h-2"
                        triggerKey={`${metric.id}-${viewMode}-${animationTrigger}`}
                      />
                    </div>

                    <p className="text-[11px] text-stone-400 italic pt-1">
                      {metric.fieldNote}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Aggregate Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-stone-900 to-emerald-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-emerald-800/40">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 uppercase tracking-wider">
                <Target className="w-3.5 h-3.5 text-emerald-400" />
                <span>Conservation Formula in Motion</span>
              </div>
              <div className="text-sm sm:text-base font-bold font-display text-white">
                Healthy Soil + Retention Trenches + Native Agroforestry = Scaled Community Prosperity
              </div>
              <p className="text-xs text-stone-300">
                100% of conservation interventions take place on agricultural buffer land outside delineated national park boundaries.
              </p>
            </div>
            
            <button
              onClick={onOpenDocument}
              className="shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Methodology &amp; Data</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SIX CORE PILLARS GRID WITH DEDICATED PROGRESS BARS & DETAILED STATS */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Core Pillar Execution Matrix
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900">
                Pillar Scale, Milestones &amp; Real-Time Capacity
              </h3>
            </div>
            <div className="text-xs text-stone-500 font-medium">
              Click any pillar card to inspect recent field evidence
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENRICHED_PILLARS.map((pillar) => {
              const isSelected = selectedPillarId === pillar.number;
              const displayVal = viewMode === 'active' ? pillar.currentValue : pillar.targetValue;
              const currentPct = viewMode === 'active' ? pillar.percentage : 100;

              return (
                <div
                  key={pillar.number}
                  onClick={() => setSelectedPillarId(isSelected ? null : pillar.number)}
                  className={`p-6 bg-white rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-5 shadow-xs relative overflow-hidden group ${
                    isSelected 
                      ? 'border-emerald-600 ring-2 ring-emerald-600/20 shadow-md' 
                      : 'border-stone-200 hover:border-emerald-500 hover:shadow-sm'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Header: Number, Title and Status */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-900 text-emerald-100 font-display font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                        0{pillar.number}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-200 whitespace-nowrap">
                        {pillar.statusBadge}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-base font-bold font-display text-stone-950 leading-snug group-hover:text-emerald-950 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Progress Bar & Dynamic Metric Visualizer */}
                    <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/90 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-stone-700">{pillar.metricLabel}</span>
                        <span className="font-bold text-emerald-800">
                          <DynamicCounter
                            targetValue={displayVal}
                            triggerKey={`pillar-${pillar.number}-${viewMode}-${animationTrigger}`}
                          />
                          {' '}/ {pillar.targetValue} {pillar.unit}
                        </span>
                      </div>

                      <AnimatedProgressBar
                        percentage={currentPct}
                        colorClass="from-emerald-700 via-emerald-600 to-teal-500"
                        heightClass="h-2"
                        triggerKey={`pillar-bar-${pillar.number}-${viewMode}-${animationTrigger}`}
                      />

                      <div className="flex justify-between items-center text-[11px] text-stone-500 pt-0.5">
                        <span>Milestone Progress</span>
                        <span className="font-mono font-bold text-emerald-800">{pillar.percentage}%</span>
                      </div>
                    </div>

                    {/* Active Field Milestone */}
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1">
                        <Award className="w-3 h-3 text-emerald-600" />
                        <span>Key Milestone: {pillar.milestoneTitle}</span>
                      </div>
                      <p className="text-[11px] text-stone-600 leading-normal">
                        {pillar.milestoneDetail}
                      </p>
                    </div>
                  </div>

                  {/* Focus Areas Pill Group */}
                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Priority Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {pillar.focusAreas.map((fa, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2 py-0.5 bg-stone-100 text-stone-700 rounded-md border border-stone-200 whitespace-nowrap"
                        >
                          {fa}
                        </span>
                      ))}
                    </div>

                    {isSelected && (
                      <div className="pt-2 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenInquiry(`Partnership Inquiry on Pillar ${pillar.number}: ${pillar.title}`);
                          }}
                          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline cursor-pointer"
                        >
                          <span>Partner on this Pillar</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* WHAT WE BRING VS WHAT WE SEEK (PRESERVED & ENHANCED) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          {/* What We Bring */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-300 space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-600" />
              <h4 className="text-lg font-bold font-display text-stone-900">
                What We Bring to the Partnership
              </h4>
            </div>
            <div className="space-y-3">
              {partnershipValue.whatWeBring.map((item, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-stone-600 pl-5">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Seek */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-300 space-y-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-600" />
              <h4 className="text-lg font-bold font-display text-stone-900">
                What We Seek from Partners &amp; GECCI
              </h4>
            </div>
            <div className="space-y-3">
              {partnershipValue.whatWeSeek.map((item, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-stone-600 pl-5">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FULL CONCEPT BRIEF CTA BANNER */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-emerald-800">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-emerald-900 text-emerald-300 border border-emerald-700">
              <FileText className="w-3 h-3" />
              Official Documentation
            </div>
            <h4 className="text-xl font-bold font-display">
              View the Verbatim GECCI Concept Document
            </h4>
            <p className="text-xs text-emerald-200 max-w-xl leading-relaxed">
              Access the full official documentation prepared by Ebrahim Abdurazak covering background, technical methodology, landscape buffer maps, and soil retention assays.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#impact-dashboard"
              className="px-5 py-3 bg-stone-900/90 hover:bg-stone-900 text-emerald-300 border border-emerald-500/40 rounded-xl text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cumulative Impact Charts ↓</span>
            </a>
            <button
              onClick={onOpenDocument}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg cursor-pointer shrink-0"
            >
              Open Complete Document
            </button>
            <button
              onClick={() => onOpenInquiry('GECCI Strategic Partnership on Six Pillars')}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-semibold transition-all cursor-pointer shrink-0"
            >
              Inquire on Pillars
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
