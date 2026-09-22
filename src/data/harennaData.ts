// Generated asset images
import harennaWaterfallHero from '../assets/images/harenna_waterfall_hero_1789649473469.jpg';
import harennaCoffeeProduct from '../assets/images/harenna_coffee_product_1789649500485.jpg';
import harennaHoneyJar from '../assets/images/harenna_honey_jar_1789649530017.jpg';
import harennaCloudForest from '../assets/images/harenna_cloud_forest_1789649565457.jpg';
import horaHobeLodge from '../assets/images/hora_hobe_lodge_1789649601652.jpg';
import soilWaterConservation from '../assets/images/soil_water_conservation_1789649671560.jpg';
import dasypeltisAlbigularisPhoto from '../assets/images/dasypeltis_albigularis_1789996358567.jpg';
import harennaLogo from '../assets/images/harenna_forest_logo_1789998446703.jpg';
import harennaHoneyJarGreenLid from '../assets/images/harenna_honey_jar_green_lid_1789999368024.jpg';
import harennaHoneyEmblemDark from '../assets/images/harenna_honey_emblem_dark_1789999384339.jpg';
import videoWildHoneyHarvestPoster from '../assets/images/video_wild_honey_harvest_1789999402010.jpg';
import videoModernYellowHivesPoster from '../assets/images/video_modern_yellow_hives_1789999423249.jpg';
import coffeeCherriesHarvest from '../assets/images/coffee_cherries_harvest_1790000494333.jpg';
import sanettiGiantLobelias from '../assets/images/sanetti_giant_lobelias_1790000508202.jpg';
import cloudForestMossCanopy from '../assets/images/cloud_forest_moss_canopy_1790000521302.jpg';
import communityBambooHiking from '../assets/images/community_bamboo_hiking_1790000535490.jpg';
import farmersWatermelonHarvest from '../assets/images/farmers_watermelon_harvest_1790000548374.jpg';
import ebroMistyMountainRidge from '../assets/images/ebro_misty_mountain_ridge_1790000995909.jpg';
import harennaRiverPalmsBend from '../assets/images/harenna_river_palms_bend_1790001011986.jpg';
import womanCarryingTerraceStones from '../assets/images/woman_carrying_terrace_stones_1790001025916.jpg';
import communitySwcTrenchExcavation from '../assets/images/community_swc_trench_excavation_1790001040553.jpg';
import harennaChildHeartHands from '../assets/images/harenna_child_heart_hands_1790001054656.jpg';
import fieldRangerRiverbedPortrait from '../assets/images/field_ranger_riverbed_portrait_1790001068271.jpg';

export {
  harennaLogo,
  harennaHoneyJarGreenLid,
  harennaHoneyEmblemDark,
  videoWildHoneyHarvestPoster,
  videoModernYellowHivesPoster,
  coffeeCherriesHarvest,
  sanettiGiantLobelias,
  cloudForestMossCanopy,
  communityBambooHiking,
  farmersWatermelonHarvest,
  ebroMistyMountainRidge,
  harennaRiverPalmsBend,
  womanCarryingTerraceStones,
  communitySwcTrenchExcavation,
  harennaChildHeartHands,
  fieldRangerRiverbedPortrait
};

export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  afanOromoText?: string;
  amharicText?: string;
  englishTranslation?: string;
  poster: string;
  duration: string;
  durationSeconds: number;
  location: string;
  recordedBy: string;
  description: string;
  conservationSignificance: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'coffee' | 'honey' | 'conservation' | 'landscape' | 'tourism' | 'community' | 'biodiversity';
  image: string;
  description: string;
  location: string;
  tag: string;
}

export interface PartnershipPillar {
  number: number;
  title: string;
  description: string;
  focusAreas: string[];
}

export const HARENNA_INITIATIVE = {
  name: "Harenna Forest Heritage",
  logo: harennaLogo,
  tagline: "Local Action, Indigenous Knowledge & Conservation-Linked Green Enterprise",
  motto: "Think Globally. Act Locally.",
  closingManifesto: "One Forest. One Community. One Generation. One Shared Responsibility. One Future.",
  preparedFor: "Global Environmental and Climate Conservation Initiative (GECCI)",
  location: {
    landscape: "Harenna Forest Landscape",
    district: "Harenna Bulluq District",
    zone: "Bale Zone",
    region: "Oromia",
    country: "Ethiopia",
    coordinates: "6°20'N to 6°45'N, Bale Mountains Eco-Region"
  },
  founder: {
    name: "Ebrahim Abdurazak",
    titles: ["Founder – Harenna Forest Heritage", "Young Innovator", "Environmental Volunteer", "Naturalist"],
    contacts: {
      email: "seenahobea@gmail.com",
      altEmail: "baleharenna@gmail.com",
      phone: "+251 909 092 255",
      whatsapp: "+251909092255"
    },
    statement: {
      title: "From Heritage to Action",
      introParagraphs: [
        "Understanding Harenna’s heritage is only the beginning. For Harenna Forest Heritage, heritage protection must also create meaningful opportunities for the communities who live with and depend on this landscape.",
        "We believe that conservation and community prosperity should not be treated as separate goals. When local communities have sustainable green opportunities, conservation can become part of everyday livelihoods and long-term development."
      ],
      flow: ["Conservation", "Knowledge", "Community", "Enterprise", "Partnership"],
      approach: "Through this approach, we aim to support conservation-linked green enterprises, strengthen local knowledge, create opportunities for young people and communities, and encourage responsible tourism and sustainable value chains.",
      whatWeAreBuilding: [
        {
          title: "Forest Conservation",
          description: "supporting practical conservation and forest rehabilitation."
        },
        {
          title: "Local Knowledge",
          description: "recognizing and documenting knowledge connected to nature and the landscape."
        },
        {
          title: "Community Development",
          description: "creating opportunities that strengthen local livelihoods."
        },
        {
          title: "Youth Green Enterprise",
          description: "connecting young people with sustainable economic opportunities."
        },
        {
          title: "Green Tourism",
          description: "developing responsible experiences that connect visitors with forest, water, culture and nature."
        },
        {
          title: "Sustainable Enterprise",
          description: "developing conservation-linked products and services such as coffee, honey and future tourism initiatives."
        },
        {
          title: "Partnership",
          description: "working with communities, institutions, researchers and responsible partners."
        }
      ],
      lookingAhead: [
        "Our journey is still developing. Some initiatives are already underway, while others remain part of our longer-term vision.",
        "We do not claim that Harenna’s challenges have already been solved. Instead, we see an opportunity to learn from the landscape, work with communities, generate evidence through action, and gradually build a model that can contribute to the long-term future of Harenna, the Bale Mountains and the wider Genale Basin."
      ],
      closingLines: [
        "From ancient landscape to living heritage.",
        "From heritage to action.",
        "From local action to a greener future."
      ]
    },
    credentials: [
      {
        title: "Diploma in Plant Sciences",
        institution: "Agarfa Agricultural Technical Vocational Education and Training College",
        description: "Foundational mastery connecting plant biology, agronomy, and agroforestry systems."
      },
      {
        title: "Tour Guide Certificate",
        institution: "Bale Mountains National Park certified guide",
        description: "Extensive naturalist and trekking leadership across afro-alpine and cloud forest trails."
      },
      {
        title: "Green Future Africa Phase II 2026",
        institution: "Green Entrepreneurship Capacity-Building Programme",
        description: "Completed 20–31 August 2026. Specialized in green jobs, carbon markets, eco-enterprise, and finance."
      },
      {
        title: "Hora Hobe Land Documentation & Map",
        institution: "Harenna Bulluq District Administration",
        description: "Documented land basis & confirmation letter for responsible eco-tourism development."
      }
    ]
  },
  coreFormula: {
    components: [
      { name: "Healthy Soil", desc: "Organic mulch, stone bunds & terracing" },
      { name: "Better Water Management", desc: "Retention trenches that capture torrential rain" },
      { name: "Agroforestry", desc: "Native canopy trees shielding wild Arabica varieties" },
      { name: "Improved Coffee Practices", desc: "Selective red cherry harvesting & gentle processing" }
    ],
    outcome: "Stronger Productivity + Sustainable Livelihoods + Reduced Pressure on Natural Forest"
  },
  keyEnterprises: [
    {
      id: "coffee",
      title: "Harenna Arabica Specialty Coffee",
      subtitle: "Forest-Shade Grown Arabica Linking Premium Quality to Habitat Preservation",
      image: harennaCoffeeProduct,
      badge: "Specialty Grade 100% Arabica",
      origin: "Harenna Forest buffer agricultural zone, Bale Zone (1,400m - 1,900m)",
      tastingNotes: ["Wild blackberry", "Jasmine blossom", "Bergamot", "Raw honey sweetness", "Silky body"],
      conservationLink: "Farmers receive higher financial yields on agricultural plots outside the park boundary, creating an economic counter-incentive to forest clearing.",
      practices: [
        "Planted strictly on agricultural land outside primary protected forest",
        "Soil & water conservation trenches retain moisture throughout dry spells",
        "Intercropped with native shade canopies and flowering bee flora",
        "Hand-picked at peak cherry maturity for exceptional cup score"
      ]
    },
    {
      id: "honey",
      title: "Harenna Organic Forest Honey",
      subtitle: "Cultural Beekeeping Harmonizing Indigenous Wisdom with Improved Hives",
      image: harennaHoneyJar,
      badge: "Pure Wild Forest Honey",
      origin: "Harenna indigenous floral canopy & agroforestry apiaries",
      localName: "ሀረና የማር ቤት / Bosonni Harennaa Soora Hormaataati",
      conservationLink: "Bees act as vital pollinators for the cloud forest ecosystem while providing alternative income without timber extraction.",
      practices: [
        "Traditional cultural log hives maintained as observational baseline",
        "Gradual, low-stress transition to improved box hives adapted to local bees",
        "Multi-floral foraging: Schefflera, Syzygium, coffee blossoms & sunflowers",
        "Unfiltered raw honey harvested with sustainable, non-destructive methods"
      ]
    },
    {
      id: "ecotourism",
      title: "Hora Hobe Eco-Lodge & Wilderness Experience",
      subtitle: "Development-Ready Eco-Tourism Hub Connecting Youth to Nature Stewardship",
      image: horaHobeLodge,
      badge: "Planned & Documented Eco-Lodge Site",
      origin: "Scenic waterfall overlook & edge-of-crater ridge, Harenna Bulluq",
      conservationLink: "Transforms the stunning natural landscape into sustainable employment for local youth guides, porters, and hospitality workers.",
      practices: [
        "Fully documented land tenure with municipal confirmation letter & boundary survey",
        "Designed for low-impact, off-grid architecture using local natural materials",
        "Direct connection to Bale Mountains National Park hiking and naturalist trails",
        "Interactive viewing amphitheater overlooking the roaring Harenna waterfall"
      ]
    }
  ],
  pillars: [
    {
      number: 1,
      title: "Technical Mentorship & Knowledge Exchange",
      description: "Strengthening field-tested practices across conservation, coffee agroforestry, apiculture, eco-tourism, and green enterprise.",
      focusAreas: ["Soil moisture tracking", "Agro-ecological tree species", "Beekeeping hive adaptation", "Sustainable tourism master plan"]
    },
    {
      number: 2,
      title: "Documentation & Evidence Building",
      description: "Transforming raw field observations and community progress into rigorous, measurable, and shareable empirical data.",
      focusAreas: ["Runoff reduction metrics", "Soil organic matter assays", "Coffee yield and moisture baselines", "Photographic transect archives"]
    },
    {
      number: 3,
      title: "Youth & Green Entrepreneurship",
      description: "Empowering young men and women in the Harenna Bulluq district with practical skills, mentoring, and green livelihood pathways.",
      focusAreas: ["Naturalist tour guide training", "Specialty coffee cupping & processing", "Hive building & colony management", "Digital visibility & marketing"]
    },
    {
      number: 4,
      title: "Market & Investment Connections",
      description: "Establishing ethical, direct-trade corridors for Harenna Arabica coffee, forest honey, and eco-tourism capital.",
      focusAreas: ["Responsible grant funding", "Impact investment for Hora Hobe lodge", "Direct-trade export roasting partners", "Fair certification frameworks"]
    },
    {
      number: 5,
      title: "Research & Learning Partnerships",
      description: "Linking community demonstration plots with universities, forestry institutes, and international conservation bodies.",
      focusAreas: ["Agarfa Agricultural College collaboration", "Bale Mountains National Park ecological monitoring", "IUCN & academic field studies", "Biodiversity inventories"]
    },
    {
      number: 6,
      title: "Scaling Locally Tested Solutions",
      description: "Taking proven conservation techniques from our demonstration farm and expanding them to adjacent farming families.",
      focusAreas: ["Farmer-to-farmer trench construction", "Apiary cooperative creation", "Community nursery seedling sharing", "Landscape-level watershed stewardship"]
    }
  ],
  partnershipValue: {
    whatWeBring: [
      {
        title: "Direct Community Connection & Local Knowledge",
        detail: "Born and living in Harenna Bulluq, understanding customary rights, cultural perspectives, and practical terrain realities."
      },
      {
        title: "Active Demonstration Farmland",
        detail: "Real working plots implementing rainwater retention trenches, coffee agroforestry, and traditional/modern bee colonies."
      },
      {
        title: "Dynamic Youth Network",
        detail: "Mobilizing motivated young people eager for green entrepreneurship, conservation training, and eco-tourism leadership."
      },
      {
        title: "Action-Oriented Field Coordination",
        detail: "Proven capacity to organize stone terracing, trench excavation, seed planting, and community learning days."
      },
      {
        title: "Humility & Willingness to Learn",
        detail: "Committed to scientific rigor, technical mentorship, peer review, and transparent iterative adaptation."
      }
    ],
    whatWeSeek: [
      {
        title: "Responsible Capital & Working Grants",
        detail: "Funding for coffee drying beds, honey extraction centrifuges, and initial low-impact infrastructure for Hora Hobe Eco-Lodge."
      },
      {
        title: "Agronomic & Apicultural Science",
        detail: "Partnership with entomologists and agronomists to optimize hive acceptance and soil biological vitality."
      },
      {
        title: "Direct-Trade Value Chain Linkages",
        detail: "Connecting premium single-origin buyers with our smallholder conservation lot coffee and pure medicinal forest honey."
      }
    ]
  },
  timeline: [
    {
      step: "01. Local Action",
      desc: "Testing soil trenches & traditional beehives on demonstration plots."
    },
    {
      step: "02. Observation",
      desc: "Monitoring water retention, plant vigor, and bee colony adaptation."
    },
    {
      step: "03. Learning",
      desc: "Iterating based on empirical results rather than untested theory."
    },
    {
      step: "04. Partnership",
      desc: "Engaging GECCI, researchers, and green investors for technical support."
    },
    {
      step: "05. Replication",
      desc: "Scaling successful practices across neighboring Harenna farmsteads."
    }
  ],
  gallery: [
    {
      id: "g1",
      title: "Harenna Forest Waterfall Amphitheater",
      category: "tourism",
      image: harennaWaterfallHero,
      description: "Community wooden viewing terrace situated directly in front of the thundering Harenna Forest cascade, planned as part of Hora Hobe Eco-Lodge.",
      location: "Hora Hobe site, Harenna Forest",
      tag: "Eco-Tourism & Viewpoints"
    },
    {
      id: "g2",
      title: "Harenna Arabica Specialty Coffee",
      category: "coffee",
      image: harennaCoffeeProduct,
      description: "Conservation-linked 100% Arabica packaged coffee, showcasing the Bale Mountain landscape where forest-shade beans mature slowly.",
      location: "Buffer Zone Agroforestry Plots",
      tag: "Conservation Agriculture"
    },
    {
      id: "g3",
      title: "Pure Forest Wild Honey",
      category: "honey",
      image: harennaHoneyJar,
      description: "Raw organic mountain forest honey with unique floral notes harvested from both cultural tree hives and improved apiary boxes.",
      location: "Harenna Forest Canopy & Farm Apiary",
      tag: "Non-Timber Forest Products"
    },
    {
      id: "g4",
      title: "Primeval Cloud Forest Epiphytes & Moss",
      category: "landscape",
      image: harennaCloudForest,
      description: "Ancient moss-draped evergreen canopy of Harenna Forest, one of the largest continuous tropical montane cloud forests in Africa.",
      location: "Bale Mountains National Park buffer",
      tag: "Ecological Heritage"
    },
    {
      id: "g5",
      title: "Hora Hobe Scenic Ridge & Eco-Lodge Basin",
      category: "tourism",
      image: horaHobeLodge,
      description: "Panoramic overview of the forested crater basin and rolling mist hills slated for the community-managed Hora Hobe Eco-Lodge.",
      location: "Harenna Bulluq District",
      tag: "Sustainable Lodging"
    },
    {
      id: "g6",
      title: "Community Soil & Water Retention Works",
      category: "conservation",
      image: soilWaterConservation,
      description: "Community members excavating contour trenches and moving stone bunds to trap rainwater runoff and eliminate topsoil erosion.",
      location: "Demonstration Farm, Harenna",
      tag: "Field Action"
    },
    {
      id: "g7",
      title: "Newly Discovered Snake: Dasypeltis albigularis",
      category: "biodiversity",
      image: dasypeltisAlbigularisPhoto,
      description: "White-throated egg-eater (Dasypeltis albigularis), a harmless new species discovered in Harenna Forest at 1,500m–1,700m elevation. Recorded amid wild Arabica coffee understory where it feeds on eggs of tree-nesting forest birds.",
      location: "Harenna Forest Understory (1,500m – 1,700m asl), Bale Mountains",
      tag: "Species Discovery (Science)"
    },
    {
      id: "g8",
      title: "Harenna Forest Heritage Official Brand Emblem",
      category: "community",
      image: harennaLogo,
      description: "Official visual identity emblem of Harenna Forest Heritage: featuring the sacred acacia umbrella tree, elephant silhouette, Bale Mountains, eco-lodge, soaring bird, flowing river, and the four conservation-based green economy pillars: Ecotourism & Lodges, Specialty Coffee, Forest Honey, and Nature Experiences — Protect • Restore • Inspire.",
      location: "Bale Mountains Eco-Region, Ethiopia",
      tag: "Official Brand Identity"
    },
    {
      id: "g9",
      title: "Harenna Organic Pure Forest Honey (Kitchen Dipper Edition)",
      category: "honey",
      image: harennaHoneyJarGreenLid,
      description: "Packaged raw organic forest honey in hexagonal glass jar with forest green lid and wooden honey dipper stick. Labeled with bilingual Amharic 'ሀረና የማር ቤቴ' (Harenna House of Honey) and English, sourced from wild forest nectar.",
      location: "Harenna Bulluq Forest Demonstration Packaging",
      tag: "Forest Honey Products"
    },
    {
      id: "g10",
      title: "Harenna Organic Forest Honey Emblem & Nectar Blossom",
      category: "honey",
      image: harennaHoneyEmblemDark,
      description: "Visual emblem celebrating Harenna wild honey: featuring the endemic honey bee pollinating fragrant mountain blossoms, a dripping golden honeycomb cell, and the misty rainforest peaks of Bale.",
      location: "Harenna Mountain Eco-Region",
      tag: "Honey Heritage & Pollination"
    },
    {
      id: "g11",
      title: "Wild Arabica Cherry Selective Hand-Harvesting",
      category: "coffee",
      image: coffeeCherriesHarvest,
      description: "Careful selective hand-harvesting of ripe red wild Arabica cherries from wild coffee shrubs beneath the natural moist montane forest canopy. Understory shade allows beans to mature slowly, generating exceptional floral cup profiles.",
      location: "Harenna Bulluq Wild Coffee Biosphere Plots",
      tag: "Agroforestry & Harvest"
    },
    {
      id: "g12",
      title: "Sanetti Afro-Alpine Plateau & Giant Lobelias",
      category: "landscape",
      image: sanettiGiantLobelias,
      description: "Dramatic afro-alpine plateau crowning the Harenna Forest escarpment above 4,000 meters. Prehistoric Giant Lobelias (Lobelia rynchopetalum) stand amid yellow Helichrysum everlasting flowers, feeding the mountain streams that cascade into Harenna below.",
      location: "Sanetti Plateau Afro-Alpine Moorlands (4,100m asl)",
      tag: "Afro-Alpine Ecosystem"
    },
    {
      id: "g13",
      title: "Ancient Cloud Forest Epiphytes & Moss Canopy",
      category: "biodiversity",
      image: cloudForestMossCanopy,
      description: "Interior sanctuary of primeval Hagenia abyssinica and Podocarpus cloud forest cloaked in cascading lichens, bryophytes, and epiphytic ferns. Harenna acts as a critical cloud condensation sponge capturing precipitation for the Horn of Africa.",
      location: "Middle Montane Cloud Belt (2,200m – 2,700m)",
      tag: "Moist Montane Canopy"
    },
    {
      id: "g14",
      title: "Highland Bamboo Trail & Eco-Trekking Guides",
      category: "tourism",
      image: communityBambooHiking,
      description: "Community-guided walking expeditions through the indigenous highland bamboo zone (Arundinaria alpina). Eco-trekking provides youth with dignified ranger, naturalist, and guiding vocations, directly disincentivizing illegal timber extraction.",
      location: "Highland Bamboo Belt, Bale Escarpment",
      tag: "Eco-Trekking & Guidance"
    },
    {
      id: "g15",
      title: "Buffer Zone Agro-Ecology & Watermelon Harvest",
      category: "conservation",
      image: farmersWatermelonHarvest,
      description: "Local farmers proudly showcasing fresh striped watermelons harvested from fertile alluvial soil in the lower Harenna river valley. Regenerative agriculture along forest margins provides vital food sovereignty and community wealth without encroaching into primary canopy.",
      location: "Harenna Bulluq River Valley Agro-Buffers",
      tag: "Food Sovereignty & Soil"
    },
    {
      id: "g16",
      title: "Ebro Mountain Range & Misty Ridge Foothills",
      category: "landscape",
      image: ebroMistyMountainRidge,
      description: "Breathtaking field view of twin misty green mountain ridges overlooking the Harenna savanna and wild acacia groves in early morning light, showcasing the natural high-altitude water catchment hills of the Bale eco-region.",
      location: "Ebro Foothills, Harenna Escarpment",
      tag: "Mountain Landscape"
    },
    {
      id: "g17",
      title: "Harenna River Bend & Wild Date Palms (Phoenix reclinata)",
      category: "tourism",
      image: harennaRiverPalmsBend,
      description: "Tranquil bend of the Harenna river fringed by indigenous wild palm trees and pristine riparian evergreen vegetation, mirroring cloud reflections in still pools and nourishing local biodiversity.",
      location: "Harenna Forest Riparian River Basin",
      tag: "River Corridor"
    },
    {
      id: "g18",
      title: "Community Terracing: Stone Carrying for Check-Dams",
      category: "conservation",
      image: womanCarryingTerraceStones,
      description: "Resilient community member carrying heavy basalt stones to construct dry-stone check-dams and contour retention walls, halting gully erosion and securing vulnerable topsoil across steep slopes.",
      location: "Harenna Buffer Watershed Slopes",
      tag: "Community SWC Action"
    },
    {
      id: "g19",
      title: "Hillside Soil & Water Conservation Trench Excavation",
      category: "conservation",
      image: communitySwcTrenchExcavation,
      description: "Large-scale community watershed mobilization cutting continuous contour infiltration trenches along steep red-soil ridges to capture seasonal rainfall, stop runoff, and recharge downstream springs.",
      location: "Bale Highland Contour Watershed Slopes",
      tag: "Watershed Terracing"
    },
    {
      id: "g20",
      title: "Smiles of Tomorrow: Youth & Community Warmth",
      category: "community",
      image: harennaChildHeartHands,
      description: "Young forest resident playfully framing the world with heart-shaped hands under the shade of the forest edge, symbolizing the intergenerational hope and community heart at the core of Harenna's preservation.",
      location: "Harenna Forest Community Village",
      tag: "Future Generations"
    },
    {
      id: "g21",
      title: "Forest Ranger & Stream Field Expedition",
      category: "tourism",
      image: fieldRangerRiverbedPortrait,
      description: "Local conservationist and eco-guide on the sandy bed of a mountain river, monitoring riverbed ecology, water clarity, and natural forest boundary lines on an active field survey.",
      location: "Harenna Riparian Stream Basin",
      tag: "Field Naturalist"
    }
  ]
};

export const HARENNA_VIDEOS: VideoItem[] = [
  {
    id: "v1",
    title: "Wild Honeycomb Harvest in Dense Harenna Forest",
    subtitle: "Indigenous Traditional Beekeeping & Forest Nourishment",
    afanOromoText: "Midhaanilleen dhabamu Bosonni Harennaa Soora Hormaataati",
    amharicText: "በባሌ፡ የሀረና ጥበቃ የተፈጥሮ ደን ልጆቹን እንዲህ ይመግባል ::",
    englishTranslation: "Even when conventional crops face shortages, the Harenna Forest is a timeless sanctuary of nourishment: In Bale, forest conservation feeds its children with natural abundance.",
    poster: videoWildHoneyHarvestPoster,
    duration: "0:35",
    durationSeconds: 35,
    location: "Harenna Forest Understory, Wild Coffee Canopy (Bale Mountains)",
    recordedBy: "Ebrahim Abdurazak & Field Team",
    description: "Authentic documentary footage from the heart of Harenna Forest. A local beekeeper demonstrates the direct bounty of indigenous forest stewardship, harvesting fresh dark wild comb dripping with pure medicinal honey among wild coffee understory trees.",
    conservationSignificance: "Proves to local communities that protecting intact forest canopy yields immediate, high-value nutritional and economic returns without clearing trees for conventional farming.",
    tags: ["Wild Honey Harvest", "Indigenous Knowledge", "Canopy Stewardship", "Field Video"]
  },
  {
    id: "v2",
    title: "Modern Raised Apiary Hive Boxes in Forest Clearing",
    subtitle: "Harenna Forest Heritage Sustainable Apiary Demonstration",
    poster: videoModernYellowHivesPoster,
    duration: "0:18",
    durationSeconds: 18,
    location: "Demonstration Apiary Site, Harenna Forest Buffer Zone",
    recordedBy: "Harenna Forest Heritage Field Documentation",
    description: "Close-up field footage of modern yellow wooden transitional beehives mounted on elevated timber stilts in a sun-drenched forest clearing. Swarms of healthy worker bees actively arrive laden with pollen from wild forest flora.",
    conservationSignificance: "Elevating hives onto protected stilts prevents honey badger predation and ground moisture while doubling yields and eliminating the hazardous need to burn bark or fell ancient trees.",
    tags: ["Modern Apiary", "Beehive Boxes", "Pollinator Sanctuary", "Field Video"]
  }
];

export interface ForestDiscovery {
  id: string;
  speciesName: string;
  scientificName: string;
  genus: string;
  discoveryLocation: string;
  elevation: string;
  microHabitat: string;
  dietSpecialization: string;
  physicalCharacteristics: string[];
  scientificSignificance: string;
  researcherNote: string;
  externalSource: string;
  externalUrl: string;
  quoteAmharic: string;
  quoteEnglish: string;
  image: string;
  keyFacts: { label: string; value: string }[];
}

export const HARENNA_DISCOVERIES: ForestDiscovery[] = [
  {
    id: "dasypeltis-albigularis",
    speciesName: "White-Throated Egg-Eater",
    scientificName: "Dasypeltis albigularis",
    genus: "Dasypeltis (Harmless African Egg-Eating Snakes)",
    discoveryLocation: "Harenna Forest, Bale Mountains National Park, Ethiopia",
    elevation: "1,500 – 1,700 m above sea level (asl)",
    microHabitat: "Dense moist evergreen montane cloud forest understory covered by wild Arabica coffee plants (Coffea arabica)",
    dietSpecialization: "Exclusively feeds on tree-nesting bird eggs. Equipped with specialized hypapophyses (vertebrae projections in the throat) that harmlessly crack eggshells after swallowing, regurgitating the crushed shell clean.",
    physicalCharacteristics: [
      "Distinctive creamy white throat and ventral belly plates",
      "Pale, subtle bluish skin visible between its delicate overlapping scales",
      "Completely harmless to humans; toothless specialized egg-eating anatomy",
      "Adult females can reach approximately 92 centimeters in length"
    ],
    scientificSignificance: "Harenna Forest remains one of the last extensive, continuous natural moist forests in the Horn of Africa. This discovery highlights the urgent imperative of preserving the 1,400m–1,900m buffer zone where wild coffee plants and pristine biodiversity interlock.",
    researcherNote: "Formal scientific description and taxonomic distinction took researcher Philipp Wagner & Tiutenko seven years of meticulous morphological and genetic investigation.",
    externalSource: "Phys.org & Herpetological Taxonomy",
    externalUrl: "https://phys.org",
    quoteAmharic: "ሀረናን እና የሀረናን ተፈጥሮ እስከጥጉ ማወቅ አይቻልም ። ለማንኛውም በድጋሜ በልዩ መስህብ ብቅ ብዬልሀለሁ — The mystery of Bale mountains is endless!",
    quoteEnglish: "It is impossible to fully comprehend Harenna and its nature to the end. The mystery of the Bale Mountains is truly endless.",
    image: dasypeltisAlbigularisPhoto,
    keyFacts: [
      { label: "Conservation Status", value: "Endemic to Bale Mountains" },
      { label: "Elevation Range", value: "1,500m – 1,700m asl" },
      { label: "Specialized Diet", value: "100% Tree Bird Eggs" },
      { label: "Understory Habitat", value: "Wild Arabica Coffee Forest" },
      { label: "Maximum Female Length", value: "~92 cm" },
      { label: "Taxonomic Research", value: "7 Years (Tiutenko et al.)" }
    ]
  }
];

