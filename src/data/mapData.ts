export interface ProjectSite {
  id: string;
  name: string;
  localName?: string;
  category: 'tourism' | 'conservation' | 'coffee' | 'honey' | 'community' | 'park' | 'biodiversity';
  zoneId: 'sanetti-core' | 'cloud-forest-core' | 'buffer-agroforestry' | 'transition-zone';
  elevationMeters: number;
  coordinates: {
    lat: string;
    lng: string;
    xPercent: number; // For SVG map positioning (0 - 100)
    yPercent: number; // For SVG map positioning (0 - 100)
    distanceKm: number; // Transect distance from Sanetti (0 - 60km)
  };
  status: 'Development-Ready' | 'Active Demonstration' | 'Production & Harvesting' | 'Protected Core';
  description: string;
  ecologicalRole: string;
  communityBenefit: string;
  associatedGalleryId?: string;
}

export interface ForestZone {
  id: 'sanetti-core' | 'cloud-forest-core' | 'buffer-agroforestry' | 'transition-zone';
  name: string;
  elevationRange: string;
  minElevation: number;
  maxElevation: number;
  minKm: number;
  maxKm: number;
  legalStatus: string;
  color: string;
  badgeColor: string;
  bgLight: string;
  borderColor: string;
  description: string;
  keySpecies: string[];
}

export interface ElevationTransectPoint {
  km: number;
  elevation: number;
  zone: string;
  zoneName: string;
  rainfallMm: number;
  siteName?: string;
  siteId?: string;
}

export const FOREST_ZONES: ForestZone[] = [
  {
    id: 'sanetti-core',
    name: 'Sanetti Afroalpine Core & High Pass',
    elevationRange: '3,800m – 4,377m',
    minElevation: 3800,
    maxElevation: 4377,
    minKm: 0,
    maxKm: 12,
    legalStatus: 'Bale Mountains National Park (Strict Protection - UNESCO World Heritage)',
    color: '#3b82f6',
    badgeColor: 'bg-blue-900/80 text-blue-200 border-blue-700',
    bgLight: 'bg-blue-50/80',
    borderColor: 'border-blue-300',
    description: 'High-altitude alpine plateau with giant Lobelia rynchopetalum, freezing night mists, and the world\'s densest population of endangered Ethiopian Wolves.',
    keySpecies: ['Ethiopian Wolf', 'Giant Lobelia', 'Bale Rock Hyrax', 'Starck\'s Hare']
  },
  {
    id: 'cloud-forest-core',
    name: 'Primary Montane Cloud Forest Core',
    elevationRange: '1,900m – 3,200m',
    minElevation: 1900,
    maxElevation: 3200,
    minKm: 12,
    maxKm: 32,
    legalStatus: 'National Park Core Sanctuary (Zero Resource Extraction)',
    color: '#047857',
    badgeColor: 'bg-emerald-900/90 text-emerald-200 border-emerald-700',
    bgLight: 'bg-emerald-50/80',
    borderColor: 'border-emerald-300',
    description: 'Moss-cloaked primeval evergreen canopy dominated by Schefflera abyssinica, Syzygium guineense, and mountain bamboo. Critical watershed headwater for southern Ethiopia.',
    keySpecies: ['Bale Monkey', 'Prince Ruspoli\'s Turaco', 'Mountain Nyala', 'Wild Schefflera']
  },
  {
    id: 'buffer-agroforestry',
    name: 'Multi-Use Agroforestry Buffer Zone (Target Area)',
    elevationRange: '1,400m – 1,900m',
    minElevation: 1400,
    maxElevation: 1900,
    minKm: 32,
    maxKm: 50,
    legalStatus: 'Customary Smallholder Agroforestry & Eco-Tourism Buffer',
    color: '#d97706',
    badgeColor: 'bg-amber-900/80 text-amber-200 border-amber-700',
    bgLight: 'bg-amber-50/80',
    borderColor: 'border-amber-300',
    description: 'The core footprint of Harenna Forest Heritage. Farmland where contour retention trenches, forest-shade coffee, and cultural beekeeping prevent clearing of the core forest.',
    keySpecies: ['Wild Arabica Coffee', 'Apis mellifera monticola (Forest Bees)', 'Cordia africana', 'Albizia gummifera']
  },
  {
    id: 'transition-zone',
    name: 'Lowland Agricultural Fringe & District Hub',
    elevationRange: '1,200m – 1,400m',
    minElevation: 1200,
    maxElevation: 1400,
    minKm: 50,
    maxKm: 60,
    legalStatus: 'Municipal & Smallholder Farmland (Harenna Bulluq)',
    color: '#78716c',
    badgeColor: 'bg-stone-800 text-stone-200 border-stone-600',
    bgLight: 'bg-stone-50',
    borderColor: 'border-stone-300',
    description: 'Transition into deciduous woodlands and valley agricultural settlements with market access, administrative offices, and road links to southern markets.',
    keySpecies: ['Acacia abyssinica', 'Combretum-Terminalia', 'Croton macrostachyus']
  }
];

export const PROJECT_SITES: ProjectSite[] = [
  {
    id: 'hora-hobe',
    name: 'Hora Hobe Eco-Lodge & Waterfall Amphitheater',
    localName: 'Hora Hobe / Finfinnee Harennaa',
    category: 'tourism',
    zoneId: 'buffer-agroforestry',
    elevationMeters: 1740,
    coordinates: {
      lat: '6°28\'14"N',
      lng: '39°43\'52"E',
      xPercent: 44,
      yPercent: 54,
      distanceKm: 38
    },
    status: 'Development-Ready',
    description: 'Development-ready eco-tourism site on the edge of the scenic crater basin, directly overlooking the thundering Harenna waterfall cascade. Backed by official municipal land documentation.',
    ecologicalRole: 'Provides a non-extractive economic revenue model, channeling tourist revenue to community conservation and naturalist trail maintenance.',
    communityBenefit: 'Employs 25+ local youth as certified naturalist guides, cultural interpreters, porters, and lodge hospitality staff.',
    associatedGalleryId: 'g1'
  },
  {
    id: 'soil-water-trenches',
    name: 'Soil & Water Conservation Demonstration Plots',
    localName: 'Biyyoof Bishaan Eeguu',
    category: 'conservation',
    zoneId: 'buffer-agroforestry',
    elevationMeters: 1620,
    coordinates: {
      lat: '6°25\'40"N',
      lng: '39°45\'18"E',
      xPercent: 53,
      yPercent: 64,
      distanceKm: 42
    },
    status: 'Active Demonstration',
    description: 'Hand-dug contour rainwater retention trenches, stone bunds, and organic mulch layers constructed along steep 15–25% agricultural hillsides outside the park boundary.',
    ecologicalRole: 'Stops soil wash-off into river headwaters and infiltrates monsoon rainfall into the subsoil, maintaining moisture through long dry seasons.',
    communityBenefit: 'Triples moisture availability for smallholder crops, stabilizes hillsides, and serves as an outdoor classroom for neighboring farmers.',
    associatedGalleryId: 'g6'
  },
  {
    id: 'specialty-coffee-plots',
    name: 'Harenna Arabica Forest-Shade Coffee Plots',
    localName: 'Buna Bosona Harennaa',
    category: 'coffee',
    zoneId: 'buffer-agroforestry',
    elevationMeters: 1580,
    coordinates: {
      lat: '6°23\'55"N',
      lng: '39°46\'30"E',
      xPercent: 59,
      yPercent: 71,
      distanceKm: 45
    },
    status: 'Production & Harvesting',
    description: 'Agroforestry plots producing single-origin 100% Arabica coffee under native shade canopies. Harvested exclusively at peak red cherry ripeness for high cupping scores.',
    ecologicalRole: 'Maintains 40–60% native canopy cover on farmland, creating safe migratory corridors for forest birds and maintaining soil biodiversity.',
    communityBenefit: 'Unlocks specialty export pricing for smallholders, generating higher income on existing plots rather than cutting new forest.',
    associatedGalleryId: 'g2'
  },
  {
    id: 'cultural-apiary',
    name: 'Cultural & Transitional Apiary Station',
    localName: 'ሀረና የማር ቤት / Bosonni Harennaa Soora Hormaataati',
    category: 'honey',
    zoneId: 'buffer-agroforestry',
    elevationMeters: 1690,
    coordinates: {
      lat: '6°27\'02"N',
      lng: '39°44\'25"E',
      xPercent: 48,
      yPercent: 58,
      distanceKm: 40
    },
    status: 'Active Demonstration',
    description: 'Observation and training apiary testing traditional tree log hives suspended high in Schefflera canopies alongside low-stress transitional Kenyan top-bar and modern box hives.',
    ecologicalRole: 'Protects wild mountain bee populations which are crucial pollinators for endangered indigenous cloud forest canopy flora.',
    communityBenefit: 'Yields pure, chemical-free forest honey sold at premium prices without felling trees or using smoke fires that risk forest burns.',
    associatedGalleryId: 'g3'
  },
  {
    id: 'community-nursery',
    name: 'Indigenous Tree Nursery & Farmer Hub',
    localName: 'Biqiltuu Bosonaa Harennaa',
    category: 'community',
    zoneId: 'buffer-agroforestry',
    elevationMeters: 1510,
    coordinates: {
      lat: '6°22\'10"N',
      lng: '39°47\'15"E',
      xPercent: 65,
      yPercent: 76,
      distanceKm: 48
    },
    status: 'Active Demonstration',
    description: 'Community-tended nursery cultivating indigenous seedlings (Podocarpus falcatus, Hagenia abyssinica, Syzygium guineense) distributed freely to participating buffer farmers.',
    ecologicalRole: 'Accelerates reforestation along eroded field margins and reintroduces nitrogen-fixing native trees into degraded farm edges.',
    communityBenefit: 'Provides free planting stock to youth and women farming collectives, cementing community ownership of tree planting.',
    associatedGalleryId: 'g6'
  },
  {
    id: 'bmnp-ranger-post',
    name: 'Bale Mountains NP Southern Ranger Post',
    localName: 'Waajjira Eegumsa Paarkii',
    category: 'park',
    zoneId: 'cloud-forest-core',
    elevationMeters: 2180,
    coordinates: {
      lat: '6°32\'45"N',
      lng: '39°41\'20"E',
      xPercent: 36,
      yPercent: 36,
      distanceKm: 27
    },
    status: 'Protected Core',
    description: 'The southern boundary monitoring checkpoint and ranger base of Bale Mountains National Park. Guides register here before leading naturalist hikes up to the escarpment.',
    ecologicalRole: 'Acts as the official legal boundary between human-managed buffer agroforestry and strict wildlife preservation zones.',
    communityBenefit: 'Facilitates collaboration between community scouts and government park rangers for anti-poaching and forest fire prevention.',
    associatedGalleryId: 'g4'
  },
  {
    id: 'harenna-district-town',
    name: 'Harenna Bulluq District Center',
    localName: 'Magaalaa Bulluq',
    category: 'community',
    zoneId: 'transition-zone',
    elevationMeters: 1440,
    coordinates: {
      lat: '6°20\'15"N',
      lng: '39°48\'50"E',
      xPercent: 74,
      yPercent: 86,
      distanceKm: 54
    },
    status: 'Active Demonstration',
    description: 'Administrative capital of Harenna Bulluq District. Location of the district agricultural office, municipal land registry, and trade marketplace.',
    ecologicalRole: 'Focal coordination point for environmental bylaws, green entrepreneurship certification, and municipal watershed agreements.',
    communityBenefit: 'Connects farm produce to road transit going north to Robe/Goba and south to Meda Welabu and Negelle.',
    associatedGalleryId: undefined
  },
  {
    id: 'sanetti-high-pass',
    name: 'Sanetti Plateau & Afroalpine Crest',
    localName: 'Tulluu Dimtuu Pass',
    category: 'park',
    zoneId: 'sanetti-core',
    elevationMeters: 3980,
    coordinates: {
      lat: '6°50\'10"N',
      lng: '39°49\'30"E',
      xPercent: 22,
      yPercent: 12,
      distanceKm: 4
    },
    status: 'Protected Core',
    description: 'High-altitude Afroalpine summit ridge and the beginning of the dramatic southern descent down into the Harenna cloud forest escarpment.',
    ecologicalRole: 'Glacial lakes and wetlands here act as the sponge feeding perennial streams that roar down Harenna waterfall into the buffer zone.',
    communityBenefit: 'Global trekking destination bringing high-value international eco-travelers through the Harenna route.',
    associatedGalleryId: undefined
  },
  {
    id: 'snake-discovery-site',
    name: 'Dasypeltis albigularis Discovery Site (White-Throated Egg-Eater)',
    localName: 'Bofa Boqolloo Harennaa / ሀረና ልዩ የእባብ ዝርያ',
    category: 'biodiversity',
    zoneId: 'buffer-agroforestry',
    elevationMeters: 1640,
    coordinates: {
      lat: '6°26\'18"N',
      lng: '39°44\'50"E',
      xPercent: 50,
      yPercent: 61,
      distanceKm: 41
    },
    status: 'Active Demonstration',
    description: 'The dense moist evergreen forest understory (1,500m–1,700m asl) covered by wild Arabica coffee plants where the harmless white-throated egg-eater snake (Dasypeltis albigularis) was discovered by Tiutenko and formally described after 7 years of research.',
    ecologicalRole: 'Feeds exclusively on eggs laid by tree-nesting birds; specialized throat vertebrae crack eggshells without swallowing bone or shell. Demonstrates intact food web in coffee agroforestry understory.',
    communityBenefit: 'Proves the immense international scientific and eco-tourism value of the Harenna coffee buffer zone, attracting researchers, nature filmers, and naturalist travelers.',
    associatedGalleryId: 'g7'
  }
];

// Elevation Transect Data for Recharts AreaChart
export const ELEVATION_TRANSECT_DATA: ElevationTransectPoint[] = [
  { km: 0, elevation: 4120, zone: 'sanetti-core', zoneName: 'Sanetti Plateau', rainfallMm: 1100 },
  { km: 4, elevation: 3980, zone: 'sanetti-core', zoneName: 'Sanetti High Pass', rainfallMm: 1150, siteName: 'Sanetti Afroalpine Crest', siteId: 'sanetti-high-pass' },
  { km: 8, elevation: 3750, zone: 'sanetti-core', zoneName: 'Alpine Ericaceous Ridge', rainfallMm: 1250 },
  { km: 12, elevation: 3400, zone: 'cloud-forest-core', zoneName: 'Giant Heather & Bamboo Escarpment', rainfallMm: 1400 },
  { km: 17, elevation: 2950, zone: 'cloud-forest-core', zoneName: 'Upper Cloud Forest (Bamboo)', rainfallMm: 1550 },
  { km: 22, elevation: 2550, zone: 'cloud-forest-core', zoneName: 'Primary Cloud Forest Canopy', rainfallMm: 1600 },
  { km: 27, elevation: 2180, zone: 'cloud-forest-core', zoneName: 'National Park Border Post', rainfallMm: 1500, siteName: 'BMNP Ranger Checkpoint', siteId: 'bmnp-ranger-post' },
  { km: 32, elevation: 1900, zone: 'buffer-agroforestry', zoneName: 'Buffer Zone Entrance (1,900m)', rainfallMm: 1350 },
  { km: 38, elevation: 1740, zone: 'buffer-agroforestry', zoneName: 'Waterfall Ridge', rainfallMm: 1300, siteName: 'Hora Hobe Eco-Lodge', siteId: 'hora-hobe' },
  { km: 40, elevation: 1690, zone: 'buffer-agroforestry', zoneName: 'Canopy Apiary Zone', rainfallMm: 1280, siteName: 'Cultural & Transitional Apiary', siteId: 'cultural-apiary' },
  { km: 41, elevation: 1640, zone: 'buffer-agroforestry', zoneName: 'Wild Coffee Understory', rainfallMm: 1260, siteName: 'Dasypeltis albigularis Discovery Site', siteId: 'snake-discovery-site' },
  { km: 42, elevation: 1620, zone: 'buffer-agroforestry', zoneName: 'Terrace & Trench Slope', rainfallMm: 1240, siteName: 'Soil & Water Demo Plots', siteId: 'soil-water-trenches' },
  { km: 45, elevation: 1580, zone: 'buffer-agroforestry', zoneName: 'Forest Coffee Plots', rainfallMm: 1200, siteName: 'Harenna Arabica Coffee Plots', siteId: 'specialty-coffee-plots' },
  { km: 48, elevation: 1510, zone: 'buffer-agroforestry', zoneName: 'Valley Nursery Hub', rainfallMm: 1150, siteName: 'Indigenous Tree Nursery', siteId: 'community-nursery' },
  { km: 52, elevation: 1440, zone: 'transition-zone', zoneName: 'Agricultural Foothills', rainfallMm: 1050, siteName: 'Harenna Bulluq Center', siteId: 'harenna-district-town' },
  { km: 56, elevation: 1360, zone: 'transition-zone', zoneName: 'Acacia-Combretum Woodland', rainfallMm: 980 },
  { km: 60, elevation: 1250, zone: 'transition-zone', zoneName: 'Genale River Watershed Fringe', rainfallMm: 920 }
];
