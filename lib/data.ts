import { format, addDays } from 'date-fns';

// Define interfaces for TypeScript
interface ChemicalProfile {
  molecularWeight: string;
  purity: string;
  form: string;
  stability: string;
}

interface Manufacturing {
  process?: string;
  quality?: string;
  batchSize?: string;
  capabilities?: string;
  capacities?: string;
}

interface SupplyRisk {
  level: string;
  factors: string[];
  mitigation: string;
}

interface Contract {
  length: string;
  expiry: string;
  terms: string;
  exclusivity: string;
  qualityMetrics: string;
}

interface Geopolitical {
  region: string;
  tradeAgreements: string[];
  politicalStability: string;
  logisticsRisk: string;
  additionalRisk?: string;
}

interface Financial {
  rating: string;
  marketCap: string;
  revenue: string;
}

interface ESG {
  environmentalScore: number;
  socialScore: number;
  governanceScore: number;
  certifications: string[];
}

interface Profile {
  background: string;
  generalInfo: string;
}

interface GeographicPresence {
  locations: string[];
  infrastructure: string;
}

interface Quality {
  compliance: string[];
  qualitySystems: string;
  auditHistory: string;
  certifications: string[];
}

interface Pricing {
  structures: string;
  paymentTerms: string;
  financialStability: string;
  negotiationLevers: string;
  costTransparency: string;
}

interface SupplierDetail {
  name: string;
  materials: string[];
}

interface Material {
  id: number;
  name: string;
  cas: string;
  grade: string;
  price: string;
  leadTime: string;
  chemicalProfile: ChemicalProfile;
  manufacturing: Manufacturing;
  supplyRisk: SupplyRisk;
  substitutes: string[];
  suppliers: string[];
}

interface Supplier {
  id: number;
  name: string;
  region: string;
  contract: Contract;
  capacity: string;
  compliance: string[];
  riskRating: string;
  geopolitical: Geopolitical;
  financial: Financial;
  esg: ESG;
  alternateProducts: string[];
  riskAlerts: string[];
  profile?: Profile;
  manufacturing?: Manufacturing;
  geographicPresence?: GeographicPresence;
  quality?: Quality;
  pricing?: Pricing;
}

interface Program {
  id: number;
  therapeuticArea: string;
  programName: string;
  status: string;
  criticality: string;
  suppliers: SupplierDetail[];
}

// Mock data
export const alerts = [
  { id: 1, type: 'contract', message: 'Supplier A contract expires in 30 days', severity: 'high' },
  { id: 2, type: 'risk', message: 'New trade restrictions in Region B', severity: 'medium' },
  { id: 3, type: 'supply', message: 'Material X stock below threshold', severity: 'low' },
];

export const materials: Material[] = [
  {
    id: 1,
    name: 'PG-Seq Indexing Primers',
    cas: '123-45-6',
    grade: 'Pharma-grade',
    price: '$500/unit',
    leadTime: '14-21 days',
    chemicalProfile: {
      molecularWeight: '15,000-20,000 g/mol',
      purity: '≥98%',
      form: 'Lyophilized powder',
      stability: 'Stable at -20°C for 24 months',
    },
    manufacturing: {
      process: 'Solid-phase synthesis',
      quality: 'GMP certified',
      batchSize: '100-500 units',
    },
    supplyRisk: {
      level: 'Medium',
      factors: ['Limited manufacturers', 'Raw material dependency'],
      mitigation: 'Multiple supplier agreements in place',
    },
    substitutes: ['Modified Seq Primers (85% comparable)', 'Alternative Indexing Kit (70% comparable)'],
    suppliers: ['Supplier A', 'Supplier B', 'Supplier C'],
  },
  {
    id: 2,
    name: 'Chromatography Resins',
    cas: '789-01-2',
    grade: 'Industrial-grade',
    price: '$300/unit',
    leadTime: '10-15 days',
    chemicalProfile: {
      molecularWeight: '5,000-10,000 g/mol',
      purity: '≥95%',
      form: 'Beaded resin',
      stability: 'Stable at 4°C for 18 months',
    },
    manufacturing: {
      process: 'Polymerization',
      quality: 'ISO certified',
      batchSize: '500-1000 units',
    },
    supplyRisk: {
      level: 'Low',
      factors: ['Stable supply chain'],
      mitigation: 'Regular inventory checks',
    },
    substitutes: ['Alternative Resins (90% comparable)'],
    suppliers: ['Supplier D', 'Supplier E'],
  },
  {
    id: 3,
    name: 'Cell Culture Media',
    cas: '456-78-9',
    grade: 'Research-grade',
    price: '$200/unit',
    leadTime: '7-10 days',
    chemicalProfile: {
      molecularWeight: 'Variable',
      purity: '≥99%',
      form: 'Liquid',
      stability: 'Stable at 2-8°C for 12 months',
    },
    manufacturing: {
      process: 'Fermentation',
      quality: 'GMP compliant',
      batchSize: '1000-2000 units',
    },
    supplyRisk: {
      level: 'High',
      factors: ['Raw material shortages', 'Geopolitical instability'],
      mitigation: 'Diversified supplier base',
    },
    substitutes: ['Synthetic Media (80% comparable)'],
    suppliers: ['Supplier F', 'Supplier G'],
  },
];

export const suppliers: Supplier[] = [
  {
    id: 1,
    name: 'CDMO Alpha',
    region: 'North America',
    contract: {
      length: '2-year contract',
      expiry: format(addDays(new Date(), 120), 'MMM dd, yyyy'),
      terms: 'Net 60, Volume-based pricing',
      exclusivity: 'Non-exclusive',
      qualityMetrics: '98% acceptance rate required',
    },
    capacity: '200+ batch runs annually',
    compliance: ['ISO 9001', 'GMP'],
    riskRating: 'Low',
    geopolitical: {
      region: 'Stable',
      tradeAgreements: ['USMCA', 'CPTPP'],
      politicalStability: 'High',
      logisticsRisk: 'Low',
    },
    financial: {
      rating: 'A+',
      marketCap: '$2.5B',
      revenue: '$500M annually',
    },
    esg: {
      environmentalScore: 85,
      socialScore: 78,
      governanceScore: 92,
      certifications: ['ISO 14001', 'Carbon Neutral'],
    },
    alternateProducts: ['Chromatography Resins', 'Cell Culture Media', 'Filtration Systems'],
    riskAlerts: [
      'Minor supply chain disruption expected Q3 2025',
      'Planned facility maintenance in August 2025',
    ],
    profile: {
      background: 'Founded in 1995, CDMO Alpha specializes in biopharmaceutical manufacturing.',
      generalInfo: 'Employs 1,200 staff across 3 facilities, focusing on innovative therapies.',
    },
    manufacturing: {
      capabilities: 'Aseptic processing, lyophilization, and large-scale fermentation.',
      capacities: 'Up to 500L bioreactors and 200+ batch runs annually.',
    },
    geographicPresence: {
      locations: ['USA (HQ)', 'Canada', 'Mexico'],
      infrastructure: '3 manufacturing plants, 2 distribution centers.',
    },
    quality: {
      compliance: ['ISO 9001', 'GMP', 'FDA registered'],
      qualitySystems: 'Six Sigma, real-time quality monitoring.',
      auditHistory: 'Last audit: Q1 2025, no major findings.',
      certifications: ['ISO 14001', 'Carbon Neutral'],
    },
    pricing: {
      structures: 'Spot pricing for small orders; contract pricing for >100 units.',
      paymentTerms: 'Net 60 days, discounts for early payment.',
      financialStability: 'A+ rating, stable cash flow.',
      negotiationLevers: 'Volume discounts, long-term contracts.',
      costTransparency: 'Detailed cost breakdowns provided quarterly.',
    },
  },
  {
    id: 2,
    name: 'BioProcess Solutions',
    region: 'Europe',
    contract: {
      length: '1-year contract',
      expiry: format(addDays(new Date(), 90), 'MMM dd, yyyy'),
      terms: 'Net 30, Fixed pricing',
      exclusivity: 'Exclusive',
      qualityMetrics: '95% acceptance rate required',
    },
    capacity: '150 batch runs annually',
    compliance: ['ISO 9001', 'EU GMP'],
    riskRating: 'Medium',
    geopolitical: {
      region: 'Moderately stable',
      tradeAgreements: ['EU-UK Trade Agreement'],
      politicalStability: 'Moderate',
      logisticsRisk: 'Medium',
      additionalRisk: 'Brexit-related delays',
    },
    financial: {
      rating: 'A',
      marketCap: '$1.8B',
      revenue: '$400M annually',
    },
    esg: {
      environmentalScore: 80,
      socialScore: 75,
      governanceScore: 88,
      certifications: ['ISO 14001'],
    },
    alternateProducts: ['Monoclonal Antibodies', 'Buffers'],
    riskAlerts: ['Potential regulatory changes in Q4 2025'],
    profile: {
      background: 'Established in 2000, specializing in biologics production.',
      generalInfo: 'Operates 2 facilities with 800 employees.',
    },
    manufacturing: {
      capabilities: 'Bioreactor production, purification.',
      capacities: 'Up to 300L bioreactors.',
    },
    geographicPresence: {
      locations: ['Germany (HQ)', 'France'],
      infrastructure: '2 manufacturing plants.',
    },
    quality: {
      compliance: ['ISO 9001', 'EU GMP'],
      qualitySystems: 'Lean manufacturing, quality audits.',
      auditHistory: 'Last audit: Q2 2025, minor findings.',
      certifications: ['ISO 14001'],
    },
    pricing: {
      structures: 'Contract pricing only.',
      paymentTerms: 'Net 30 days.',
      financialStability: 'A rating, steady growth.',
      negotiationLevers: 'Long-term commitments.',
      costTransparency: 'Quarterly reports.',
    },
  },
  {
    id: 3,
    name: 'AsiaPharma Tech',
    region: 'Asia Pacific',
    contract: {
      length: '3-year contract',
      expiry: format(addDays(new Date(), 180), 'MMM dd, yyyy'),
      terms: 'Net 90, Tiered pricing',
      exclusivity: 'Non-exclusive',
      qualityMetrics: '97% acceptance rate required',
    },
    capacity: '300 batch runs annually',
    compliance: ['ISO 9001', 'GMP'],
    riskRating: 'High',
    geopolitical: {
      region: 'Unstable',
      tradeAgreements: ['RCEP'],
      politicalStability: 'Low',
      logisticsRisk: 'High',
      additionalRisk: 'Trade tensions with US',
    },
    financial: {
      rating: 'BBB',
      marketCap: '$1.2B',
      revenue: '$300M annually',
    },
    esg: {
      environmentalScore: 70,
      socialScore: 65,
      governanceScore: 80,
      certifications: ['ISO 14001'],
    },
    alternateProducts: ['API Intermediates', 'Excipients'],
    riskAlerts: ['Port congestion delays expected in Q3 2025'],
    profile: {
      background: 'Founded in 2010, focuses on API manufacturing.',
      generalInfo: 'Employs 500 staff across 2 facilities.',
    },
    manufacturing: {
      capabilities: 'Chemical synthesis, API production.',
      capacities: 'Up to 400L reactors.',
    },
    geographicPresence: {
      locations: ['China (HQ)', 'India'],
      infrastructure: '2 production sites.',
    },
    quality: {
      compliance: ['ISO 9001', 'GMP'],
      qualitySystems: 'Quality control testing.',
      auditHistory: 'Last audit: Q4 2024, major findings.',
      certifications: ['ISO 14001'],
    },
    pricing: {
      structures: 'Tiered pricing based on volume.',
      paymentTerms: 'Net 90 days.',
      financialStability: 'BBB rating, volatile.',
      negotiationLevers: 'Bulk discounts.',
      costTransparency: 'Limited transparency.',
    },
  },
];

export const programs: Program[] = [
  {
    id: 1,
    therapeuticArea: 'Central Nervous System (CNS)',
    programName: 'RD20',
    status: 'Active',
    criticality: 'High',
    suppliers: [
      {
        name: 'CDMO Alpha',
        materials: ['Chromatography Resins', 'Cell Culture Media'],
      },
      {
        name: 'BioProcess Solutions',
        materials: ['Monoclonal Antibodies'],
      },
    ],
  },
  {
    id: 2,
    therapeuticArea: 'Oncology',
    programName: 'ONC45',
    status: 'Inactive',
    criticality: 'Low',
    suppliers: [
      {
        name: 'AsiaPharma Tech',
        materials: ['API Intermediates'],
      },
    ],
  },
  {
    id: 3,
    therapeuticArea: 'Cardiovascular',
    programName: 'CV10',
    status: 'Active',
    criticality: 'Medium',
    suppliers: [
      {
        name: 'CDMO Alpha',
        materials: ['Excipients'],
      },
      {
        name: 'BioProcess Solutions',
        materials: ['Buffers'],
      },
    ],
  },
];