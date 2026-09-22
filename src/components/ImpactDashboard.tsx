import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart
} from 'recharts';
import {
  TrendingUp,
  Trees,
  Users,
  Sparkles,
  Droplets,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  FileText,
  MessageSquare,
  Award,
  Filter,
  CheckCircle2
} from 'lucide-react';

export interface ImpactDataPoint {
  year: string;
  periodLabel: string;
  isProjected?: boolean;
  forestHectares: number;
  beehivesTotal: number;
  beehivesTraditional: number;
  beehivesModern: number;
  coffeeFarmers: number;
  soilTrenchesKm: number;
  canopyTrees: number;
  milestone: string;
}

export const CUMULATIVE_IMPACT_HISTORY: ImpactDataPoint[] = [
  {
    year: '2022',
    periodLabel: 'Baseline Pilot',
    isProjected: false,
    forestHectares: 420,
    beehivesTotal: 18,
    beehivesTraditional: 18,
    beehivesModern: 0,
    coffeeFarmers: 16,
    soilTrenchesKm: 2.4,
    canopyTrees: 6500,
    milestone: 'First demonstration plots and contour trenches excavated; 18 cultural log hives monitored.'
  },
  {
    year: '2023',
    periodLabel: 'Agroforestry Phase',
    isProjected: false,
    forestHectares: 980,
    beehivesTotal: 34,
    beehivesTraditional: 26,
    beehivesModern: 8,
    coffeeFarmers: 38,
    soilTrenchesKm: 6.8,
    canopyTrees: 15200,
    milestone: 'Introduction of modern yellow box hives; preliminary rainfall runoff assays.'
  },
  {
    year: '2024',
    periodLabel: 'Youth Network',
    isProjected: false,
    forestHectares: 1650,
    beehivesTotal: 58,
    beehivesTraditional: 35,
    beehivesModern: 23,
    coffeeFarmers: 68,
    soilTrenchesKm: 11.5,
    canopyTrees: 24800,
    milestone: 'Tour Guide certification; trench replication across 12 adjacent smallholder farms.'
  },
  {
    year: '2025',
    periodLabel: 'Direct-Trade Pilot',
    isProjected: false,
    forestHectares: 2100,
    beehivesTotal: 78,
    beehivesTraditional: 38,
    beehivesModern: 40,
    coffeeFarmers: 95,
    soilTrenchesKm: 15.2,
    canopyTrees: 32400,
    milestone: 'Specialty coffee cupping score 86+; endemic snake species field discovery.'
  },
  {
    year: '2026',
    periodLabel: 'GECCI Active Field',
    isProjected: false,
    forestHectares: 2450,
    beehivesTotal: 96,
    beehivesTraditional: 40,
    beehivesModern: 56,
    coffeeFarmers: 120,
    soilTrenchesKm: 18.5,
    canopyTrees: 38500,
    milestone: 'Hora Hobe land documentation confirmed; 18.5 km trenches operational.'
  },
  {
    year: '2027 (Target)',
    periodLabel: 'GECCI Scaled Target',
    isProjected: true,
    forestHectares: 3200,
    beehivesTotal: 150,
    beehivesTraditional: 50,
    beehivesModern: 100,
    coffeeFarmers: 180,
    soilTrenchesKm: 25.0,
    canopyTrees: 50000,
    milestone: 'Eco-lodge operational; watershed-level replication across 35+ farmsteads.'
  }
];

interface ImpactDashboardProps {
  onOpenDocument?: () => void;
  onOpenInquiry?: (topic?: string) => void;
}

export const ImpactDashboard: React.FC<ImpactDashboardProps> = ({
  onOpenDocument,
  onOpenInquiry
}) => {
  // Chart visual modes
  const [activeMetricTab, setActiveMetricTab] = useState<'all' | 'forest' | 'beehives' | 'coffee'>('all');
  const [includeProjections, setIncludeProjections] = useState<boolean>(true);

  // Filter dataset based on projection toggle
  const chartData = includeProjections
    ? CUMULATIVE_IMPACT_HISTORY
    : CUMULATIVE_IMPACT_HISTORY.filter((d) => !d.isProjected);

  const latestActive = CUMULATIVE_IMPACT_HISTORY.find((d) => d.year === '2026')!;
  const targetYear = CUMULATIVE_IMPACT_HISTORY.find((d) => d.isProjected)!;

  // Custom tooltips for clean, accessible visual presentation
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = chartData.find((d) => d.year === label);
      return (
        <div className="bg-stone-900/95 text-stone-100 p-4 rounded-xl shadow-2xl border border-stone-700/80 text-xs space-y-2 max-w-xs backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-stone-800 pb-1.5">
            <span className="font-bold text-sm font-display text-white">{label}</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              dataPoint?.isProjected 
                ? 'bg-amber-900/80 text-amber-200 border border-amber-600/40' 
                : 'bg-emerald-900/80 text-emerald-200 border border-emerald-600/40'
            }`}>
              {dataPoint?.periodLabel}
            </span>
          </div>

          <div className="space-y-1.5 pt-1">
            {payload.map((entry: any, index: number) => (
              <div key={`item-${index}`} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 text-stone-300">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                  {entry.name}:
                </span>
                <span className="font-mono font-bold text-white">
                  {typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}
                </span>
              </div>
            ))}
          </div>

          {dataPoint?.milestone && (
            <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-400 italic">
              <strong>Milestone:</strong> {dataPoint.milestone}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section 
      id="impact-dashboard" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-100 border-b border-stone-800 scroll-mt-16 relative overflow-hidden"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-950/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-stone-800">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800/80 shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Conservation Data &amp; Field Analytics</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Cumulative Impact Dashboard
            </h2>
            
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light">
              Mapping multi-year landscape scale, habitat stewardship, bee colonization, and coffee farmer livelihoods in Harenna Forest from baseline field trials through the 2027 GECCI partnership targets.
            </p>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenInquiry && onOpenInquiry('Conservation Impact Data & Verification')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Request GIS &amp; Field Data</span>
            </button>
            <button
              onClick={onOpenDocument}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>View GECCI Concept Brief</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TOP CUMULATIVE STAT CARDS (Hectares, Beehives, Farmers) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* 1. Hectares of Forest Protected */}
          <div className="p-5 rounded-2xl bg-stone-950/70 border border-stone-800 hover:border-emerald-600/70 transition-all space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Trees className="w-4 h-4 text-emerald-400" />
                <span>Forest Protected</span>
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                +483% since 2022
              </span>
            </div>
            <div>
              <div className="text-3xl font-extrabold font-display text-white">
                {latestActive.forestHectares.toLocaleString()} <span className="text-base font-normal text-stone-400">ha</span>
              </div>
              <p className="text-xs text-stone-400 mt-1">
                Active montane buffer zone stewardship (Target: {targetYear.forestHectares.toLocaleString()} ha)
              </p>
            </div>
            <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
              <span>Altitude: 1,400m–1,900m</span>
              <span className="text-emerald-400 font-semibold">Cloud Forest Buffer</span>
            </div>
          </div>

          {/* 2. Number of Beehives */}
          <div className="p-5 rounded-2xl bg-stone-950/70 border border-stone-800 hover:border-amber-600/70 transition-all space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Beehive Colonies</span>
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                +433% since 2022
              </span>
            </div>
            <div>
              <div className="text-3xl font-extrabold font-display text-white">
                {latestActive.beehivesTotal} <span className="text-base font-normal text-stone-400">colonies</span>
              </div>
              <p className="text-xs text-stone-400 mt-1">
                40 cultural log hives + 56 modern box hives (Target: {targetYear.beehivesTotal})
              </p>
            </div>
            <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
              <span>Flora: Schefflera &amp; Coffee</span>
              <span className="text-amber-400 font-semibold">100% Wild Raw Honey</span>
            </div>
          </div>

          {/* 3. Coffee Farmers Supported */}
          <div className="p-5 rounded-2xl bg-stone-950/70 border border-stone-800 hover:border-emerald-600/70 transition-all space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>Farmers Supported</span>
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                +650% since 2022
              </span>
            </div>
            <div>
              <div className="text-3xl font-extrabold font-display text-white">
                {latestActive.coffeeFarmers} <span className="text-base font-normal text-stone-400">smallholders</span>
              </div>
              <p className="text-xs text-stone-400 mt-1">
                Outside national park boundary (Target: {targetYear.coffeeFarmers} smallholders)
              </p>
            </div>
            <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
              <span>Cup Score: 86+ Arabica</span>
              <span className="text-emerald-400 font-semibold">Direct-Trade Value</span>
            </div>
          </div>

          {/* 4. Rainwater Retention Trenches */}
          <div className="p-5 rounded-2xl bg-stone-950/70 border border-stone-800 hover:border-teal-600/70 transition-all space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                <Droplets className="w-4 h-4 text-teal-400" />
                <span>Soil Trenches</span>
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                +671% since 2022
              </span>
            </div>
            <div>
              <div className="text-3xl font-extrabold font-display text-white">
                {latestActive.soilTrenchesKm} <span className="text-base font-normal text-stone-400">km</span>
              </div>
              <p className="text-xs text-stone-400 mt-1">
                Contour ditches trapping runoff (Target: {targetYear.soilTrenchesKm} km)
              </p>
            </div>
            <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
              <span>Silt Runoff: -64%</span>
              <span className="text-teal-400 font-semibold">Moisture Infiltration</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE DATA VISUALIZATION STAGE (RECHARTS) */}
        {/* ========================================================================= */}
        <div className="bg-stone-950/80 rounded-3xl border border-stone-800 p-6 sm:p-8 space-y-6 shadow-xl">
          {/* Controls & Metric Selectors */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-800/80">
            {/* Metric Mode Switcher */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-900 border border-stone-800 rounded-xl">
              <button
                id="impact-tab-all-btn"
                onClick={() => setActiveMetricTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeMetricTab === 'all'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                }`}
              >
                Overview (Multi-Metric)
              </button>
              <button
                id="impact-tab-forest-btn"
                onClick={() => setActiveMetricTab('forest')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeMetricTab === 'forest'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                }`}
              >
                Forest Hectares
              </button>
              <button
                id="impact-tab-beehives-btn"
                onClick={() => setActiveMetricTab('beehives')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeMetricTab === 'beehives'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                }`}
              >
                Beehive Colonies
              </button>
              <button
                id="impact-tab-coffee-btn"
                onClick={() => setActiveMetricTab('coffee')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeMetricTab === 'coffee'
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                }`}
              >
                Farmers &amp; Trenches
              </button>
            </div>

            {/* Time Horizon Filter Toggle */}
            <div className="flex items-center gap-3 self-start md:self-auto text-xs">
              <span className="text-stone-400">Time Horizon:</span>
              <button
                id="impact-horizon-toggle-btn"
                onClick={() => setIncludeProjections(!includeProjections)}
                className={`px-3 py-1.5 rounded-xl font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                  includeProjections
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
                    : 'bg-stone-900 text-stone-300 border-stone-700'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${includeProjections ? 'text-emerald-400' : 'text-stone-500'}`} />
                <span>Include 2027 GECCI Targets</span>
              </button>
            </div>
          </div>

          {/* ==================== CHART RENDERING ==================== */}
          <div className="w-full h-[360px] sm:h-[400px] pt-2">
            <ResponsiveContainer width="100%" height="100%">
              {activeMetricTab === 'all' ? (
                /* Multi-Metric Composed Chart */
                <ComposedChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                >
                  <defs>
                    <linearGradient id="forestGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#059669" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#059669" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#292524" vertical={false} />
                  <XAxis
                    dataKey="year"
                    stroke="#a8a29e"
                    tick={{ fill: '#d6d3d1', fontSize: 12 }}
                    tickLine={{ stroke: '#57534e' }}
                  />
                  {/* Left Axis for Hectares */}
                  <YAxis
                    yAxisId="left"
                    stroke="#059669"
                    tick={{ fill: '#34d399', fontSize: 11 }}
                    tickLine={{ stroke: '#059669' }}
                    label={{
                      value: 'Forest Protected (ha)',
                      angle: -90,
                      position: 'insideLeft',
                      fill: '#34d399',
                      fontSize: 11
                    }}
                  />
                  {/* Right Axis for Beehives & Farmers Count */}
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#f59e0b"
                    tick={{ fill: '#fbbf24', fontSize: 11 }}
                    tickLine={{ stroke: '#f59e0b' }}
                    label={{
                      value: 'Farmers & Beehives (Units)',
                      angle: 90,
                      position: 'insideRight',
                      fill: '#fbbf24',
                      fontSize: 11
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    verticalAlign="top"
                    height={36}
                    wrapperStyle={{ paddingBottom: '10px', fontSize: '12px' }}
                  />
                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="forestHectares"
                    name="Forest Protected (ha)"
                    stroke="#10b981"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#forestGradient)"
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="beehivesTotal"
                    name="Beehives Active"
                    fill="#d97706"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={32}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="coffeeFarmers"
                    name="Supported Coffee Farmers"
                    stroke="#38bdf8"
                    strokeWidth={2.5}
                    dot={{ fill: '#38bdf8', r: 4 }}
                  />
                </ComposedChart>
              ) : activeMetricTab === 'forest' ? (
                /* Forest Protected Hectares Chart */
                <AreaChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                >
                  <defs>
                    <linearGradient id="forestPureGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#047857" stopOpacity={0.08} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#292524" vertical={false} />
                  <XAxis
                    dataKey="year"
                    stroke="#a8a29e"
                    tick={{ fill: '#d6d3d1', fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#34d399"
                    tick={{ fill: '#34d399', fontSize: 11 }}
                    label={{
                      value: 'Hectares (ha)',
                      angle: -90,
                      position: 'insideLeft',
                      fill: '#34d399',
                      fontSize: 11
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="top" height={36} />
                  <Area
                    type="monotone"
                    dataKey="forestHectares"
                    name="Forest Buffer Stewardship (Hectares)"
                    stroke="#34d399"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#forestPureGradient)"
                  />
                </AreaChart>
              ) : activeMetricTab === 'beehives' ? (
                /* Beehives Breakdown: Traditional vs Modern Box Hives */
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#292524" vertical={false} />
                  <XAxis
                    dataKey="year"
                    stroke="#a8a29e"
                    tick={{ fill: '#d6d3d1', fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#fbbf24"
                    tick={{ fill: '#fbbf24', fontSize: 11 }}
                    label={{
                      value: 'Active Hives Count',
                      angle: -90,
                      position: 'insideLeft',
                      fill: '#fbbf24',
                      fontSize: 11
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="top" height={36} />
                  <Bar
                    dataKey="beehivesTraditional"
                    name="Cultural Log Hives"
                    stackId="hives"
                    fill="#92400e"
                    radius={[0, 0, 0, 0]}
                  />
                  <Bar
                    dataKey="beehivesModern"
                    name="Improved Modern Box Hives"
                    stackId="hives"
                    fill="#f59e0b"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              ) : (
                /* Coffee Farmers & Trenches Comparison */
                <ComposedChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#292524" vertical={false} />
                  <XAxis
                    dataKey="year"
                    stroke="#a8a29e"
                    tick={{ fill: '#d6d3d1', fontSize: 12 }}
                  />
                  <YAxis
                    yAxisId="left"
                    stroke="#38bdf8"
                    tick={{ fill: '#38bdf8', fontSize: 11 }}
                    label={{
                      value: 'Farmers Mobilized',
                      angle: -90,
                      position: 'insideLeft',
                      fill: '#38bdf8',
                      fontSize: 11
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#2dd4bf"
                    tick={{ fill: '#2dd4bf', fontSize: 11 }}
                    label={{
                      value: 'Trenches Excavated (km)',
                      angle: 90,
                      position: 'insideRight',
                      fill: '#2dd4bf',
                      fontSize: 11
                    }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend verticalAlign="top" height={36} />
                  <Bar
                    yAxisId="left"
                    dataKey="coffeeFarmers"
                    name="Coffee Farmers Supported"
                    fill="#0284c7"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={36}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="soilTrenchesKm"
                    name="Retention Trenches (km)"
                    stroke="#2dd4bf"
                    strokeWidth={3}
                    dot={{ fill: '#2dd4bf', r: 4 }}
                  />
                </ComposedChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Chart Context Strip */}
          <div className="pt-4 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-400">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 shrink-0" />
              <div>
                <strong className="text-stone-200">Strict Buffer Zone Focus:</strong>
                <p>All coffee farming and hive stands are located outside primary protected forest borders.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-1 shrink-0" />
              <div>
                <strong className="text-stone-200">Non-Timber Value:</strong>
                <p>Wild Schefflera and coffee blossoms produce medicinal forest honey with zero deforestation.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500 mt-1 shrink-0" />
              <div>
                <strong className="text-stone-200">Verified Empirical Data:</strong>
                <p>Documented in GECCI Concept Brief and corroborated by Bale Mountains National Park surveys.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* METHODOLOGICAL INTEGRATION BANNER */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-950 via-stone-950 to-emerald-950 border border-emerald-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-emerald-900/80 text-emerald-300 border border-emerald-700/60">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Evidence-Driven Conservation</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white">
              Data Grounded in Local Demonstration Plots
            </h3>
            <p className="text-xs text-stone-300 max-w-2xl leading-relaxed font-light">
              Rather than theoretical projections, our impact charts reflect measured field achievements from Ebrahim Abdurazak&rsquo;s demonstration plots in Harenna Bulluq District. Contact us for coordinates, soil samples, and farmer registry.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenInquiry && onOpenInquiry('GECCI Conservation Scaling Partnership')}
              className="px-5 py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all cursor-pointer"
            >
              Collaborate on 2027 Target
            </button>
            <button
              onClick={onOpenDocument}
              className="px-5 py-3 rounded-xl text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 transition-all cursor-pointer"
            >
              Review Full Concept Paper
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
