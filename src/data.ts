import { Project, Service, Testimony, TimelineStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'luxury-residential',
    title: 'Luxury Residential',
    description: 'Bespoke custom estates, ultra-luxury high-rises, and smart villas designed for multi-generational elegance and structural permanence.',
    icon: 'Home',
    features: [
      'Seismic-resistant monolithic concrete casting',
      'Smart building automation & home IoT integration',
      'Italian marble masonry & premium high-cavity brickwork',
      'Custom acoustic insulation & double-glazed fenestration'
    ],
    specs: [
      { label: 'Avg. Project Scale', value: '15,000+ sq. ft.' },
      { label: 'Structural Warranty', value: '25 Years' },
      { label: 'Design Precision', value: 'LOD 400 BIM Modeling' }
    ]
  },
  {
    id: 'commercial-landmark',
    title: 'Commercial Landmarks',
    description: 'Corporate headquarters, state-of-the-art IT parks, and high-density commercial centers engineered with modular column spans.',
    icon: 'Building2',
    features: [
      'Post-tensioned concrete slab systems for open spans',
      'LEED Gold & Platinum green building certified compliance',
      'Intelligent high-speed elevator structural shaft cores',
      'Advanced HVAC, mechanical, and fire-suppression layouts'
    ],
    specs: [
      { label: 'Avg. Project Scale', value: '250,000+ sq. ft.' },
      { label: 'Structural Warranty', value: '50 Years' },
      { label: 'Steel Standard', value: 'Fe 550D / Fe 600 High Strength' }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Strategic Infrastructure',
    description: 'Heavy civil works, high-speed transit terminals, industrial warehousing, and arterial roadway engineering projects.',
    icon: 'Cpu',
    features: [
      'Precast concrete segmental girder installation',
      'Heavy piling and soil stabilization techniques',
      'High-durability marine-grade concrete compounds',
      'Rigorous hydrological and geotechnical stress testing'
    ],
    specs: [
      { label: 'Design Lifecycle', value: '100+ Years' },
      { label: 'Piling Depth', value: 'Up to 45m' },
      { label: 'Material Quality', value: 'M60/M80 Grade Concrete' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'The Aurelia Sky-Villas',
    category: 'residential',
    location: 'Worli Sea Face, Mumbai',
    year: '2025',
    area: '48,000 sq. ft.',
    cost: '₹72 Crores',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'A structural masterpiece rising over the Arabian Sea, featuring post-tensioned cantilever decks, an infinity pool suspended 120 feet in the air, and bespoke Italian travertine cladding.',
    highlights: [
      'Column-free floor plates with 8.5m clear heights',
      'High-grade anti-corrosive marine epoxy concrete foundation',
      'Triple-glazed sound-dampening facade with low-E rating'
    ],
    client: 'Aurelia Realty Group'
  },
  {
    id: 'p2',
    title: 'Nesco IT Galleria',
    category: 'commercial',
    location: 'Whitefield, Bengaluru',
    year: '2024',
    area: '420,000 sq. ft.',
    cost: '₹240 Crores',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'An eco-futuristic corporate campus certified LEED Platinum. Engineered with custom structural composite columns and a central solar atrium that generates 35% of the building’s power.',
    highlights: [
      'Central atrium steel-truss spanning 45 meters',
      'BMS-integrated active chiller and thermal insulation system',
      'Rainwater harvesting and integrated zero-discharge water plant'
    ],
    client: 'Nesco Tech Parks India'
  },
  {
    id: 'p3',
    title: 'Giga-Port Logistics Hub',
    category: 'infrastructure',
    location: 'JNPT Phase-II, Navi Mumbai',
    year: '2025',
    area: '1,200,000 sq. ft.',
    cost: '₹180 Crores',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    description: 'A mega-scale heavy industrial storage and multi-modal transit center, utilizing high-load concrete hard standings, pre-engineered steel frames, and advanced seismic expansion dampers.',
    highlights: [
      'Ultra-flat FM2 category floor finish for robotic forklifts',
      'Clear-span portals of 60m length without internal columns',
      'Sub-surface soil consolidation using geo-textile stone columns'
    ],
    client: 'Adani Logistics & Infrastructure'
  },
  {
    id: 'p4',
    title: 'The Zephyr Corporate Suites',
    category: 'commercial',
    location: 'OMR Road, Chennai',
    year: '2023',
    area: '185,000 sq. ft.',
    cost: '₹95 Crores',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'An architectural marvel combining double-skin kinetic facades that shift with daylight to reduce solar gain, built with premium structural steel framework and polished concrete cores.',
    highlights: [
      'Double-skin facade reducing cooling loads by 28%',
      'Sleek structural steel and composite column grid',
      'Double-height premium lobby with cantilevered mezzanine'
    ],
    client: 'Zephyr Capital Partners'
  }
];

export const TESTIMONIALS: Testimony[] = [
  {
    id: 't1',
    name: 'Rajesh Singhania',
    role: 'Managing Director',
    company: 'Singhania Real Estate Group',
    content: 'Balaji Constructions executed our signature commercial tower in Bengaluru. Their commitment to LOD 400 BIM modeling meant zero on-site coordination clashes, delivering the project 3 months ahead of schedule. Truly elite work.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ananya Deshmukh',
    role: 'Luxury Homeowner',
    company: 'The Aurelia Penthouse',
    content: 'Building a home of this scale could have been stressful. Balaji Constructions brought an unprecedented level of professionalism. From the seismic-tested concrete formulation to the flawless alignment of the marble, their craftsmanship is world-class.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: 't3',
    name: 'Dr. Vikram Malhotra',
    role: 'Infrastructure Consultant',
    company: 'Apex Port Authority',
    content: 'Managing high-strength marine concrete pours under tight deadlines requires severe engineering rigor. Balaji Constructions exceeded our specifications in core compression tests and soil piling durability. They are our go-to civil contractor.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    phase: 'Phase 01',
    title: 'Pre-Construction & BIM 3D Design',
    duration: '4 - 6 Weeks',
    description: 'We translate architectural concepts into comprehensive virtual assets, simulating structural loading, utility pathways, and constructability.',
    tasks: [
      'High-resolution geotechnical soil-bearing investigation',
      'LOD 400 BIM 3D model creation to eliminate clashes',
      'Rigorous structural safety analysis & seismic calculations',
      'Value engineering and itemized material procurement planning'
    ]
  },
  {
    phase: 'Phase 02',
    title: 'Foundations & Civil Substructure',
    duration: '8 - 12 Weeks',
    description: 'Establishing an unyielding bedrock foundation. This phase forms the physical skeleton designed to endure seismic activity and marine environment conditions.',
    tasks: [
      'Heavy piling with specialized hydraulic rotary rigs',
      'Anti-capillary sub-base waterproofing and stone column packing',
      'Monolithic concrete raft pouring using M40+ grade compounds',
      'Installation of electronic pile integrity testing sensors'
    ]
  },
  {
    phase: 'Phase 03',
    title: 'Structural Framing & Superstructure',
    duration: '16 - 24 Weeks',
    description: 'The vertical rise. Our master engineering teams build the core concrete shear-walls, post-tensioned floor plates, and structural steel trusses.',
    tasks: [
      'Climbing formwork assembly for vertical core alignment',
      'Post-tensioned tendon tensioning to maximize ceiling heights',
      'Integrated electrical and plumbing conduit casting',
      'Strict quality-assurance compression testing of concrete batching'
    ]
  },
  {
    phase: 'Phase 04',
    title: 'High-Performance Facade & MEP Fitout',
    duration: '10 - 14 Weeks',
    description: 'Enclosing the building and equipping it with intelligent circulatory systems—high-efficiency HVAC, advanced fire protection, and smart automation.',
    tasks: [
      'Double-glazed facade insulation for maximum heat deflection',
      'Installation of energy-recovery ventilation systems',
      'High-speed digital fiber and integrated home/office automation',
      'Hydrostatic testing of entire wet-infrastructure piping network'
    ]
  },
  {
    phase: 'Phase 05',
    title: 'Master Finishes & Handover Audit',
    duration: '6 - 8 Weeks',
    description: 'Applying premium-grade finishes and performing deep QA inspections. We handover a pristine, zero-defect landmark backed by a comprehensive structural warranty.',
    tasks: [
      'Artisan-led marble laying, architectural joinery, and fit-outs',
      'Full commission diagnostic testing of MEP and fire systems',
      'Deep chemical cleaning and architectural aesthetic polishing',
      'Handover of detailed "As-Built" digital models and warranties'
    ]
  }
];
