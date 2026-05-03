export type ProjectType = 'Residential' | 'Commercial' | 'Farmhouse' | 'Apartment' | 'Duplex';

export interface Project {
  slug: string;
  name: string;
  location: string;
  sqft?: number;
  type: ProjectType;
  cover: string; // path relative to /public served as static asset
  images?: string[]; // additional gallery images
  alt: string;
  description?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'begwani-residence',
    name: 'Begwani Residence',
    location: 'Model Town, Delhi',
    sqft: 8000,
    type: 'Duplex',
    cover: '/images/projects/begwani-residence-1.jpg',
    images: [
      '/images/projects/begwani-residence-2.jpg',
      '/images/projects/begwani-residence-3.jpg',
      '/images/projects/begwani-residence-4.jpg',
    ],
    alt: 'Begwani Residence — 8000 sq ft duplex in Model Town, featuring spiral staircase foyer',
    description: 'An 8,000 sq.ft. duplex residence in Model Town featuring a dramatic spiral staircase foyer, multi-room showcase with marble floors and custom millwork throughout.',
    featured: true,
  },
  {
    slug: 'pioneer-araya',
    name: 'Pioneer Araya',
    location: 'Gurgaon, Haryana',
    sqft: 5600,
    type: 'Apartment',
    cover: '/images/projects/pioneer-araya-1.jpg',
    images: ['/images/projects/pioneer-araya-2.jpg'],
    alt: 'Pioneer Araya — 5600 sq ft apartment in Gurgaon with dramatic ceilings and marble floors',
    description: 'A 5,600 sq.ft. luxury apartment in Gurgaon featuring dramatic double-height ceilings, Calacatta marble floors, and bespoke furniture.',
    featured: true,
  },
  {
    slug: 'nimesh-arora-residence',
    name: 'Nimesh Arora Residence',
    location: 'Delhi',
    sqft: undefined,
    type: 'Residential',
    cover: '/images/projects/nimesh-arora-1.jpg',
    images: ['/images/projects/nimesh-arora-2.jpg'],
    alt: 'Nimesh Arora Residence — 450 yard property in Delhi',
    description: 'A 450-yard residence in Delhi featuring contemporary interiors with natural wood accents, fluted panelling, and curated lighting design.',
    featured: true,
  },
  {
    slug: 'dr-gautam-yadav-farmhouse',
    name: 'Dr. Gautam Yadav Farmhouse',
    location: 'Rewari, Haryana',
    sqft: undefined,
    type: 'Farmhouse',
    cover: '/images/projects/dr-gautam-farmhouse.jpg',
    images: ['/images/projects/dr-gautam-plan.jpg'],
    alt: 'Dr. Gautam Yadav Farmhouse at Rewari — architectural renders and floor plans',
    description: 'A spacious farmhouse retreat in Rewari, Haryana, with Vastu-compliant layouts, open-plan living, and photorealistic 3D renders guiding construction.',
  },
  {
    slug: 'anup-shokeen-residence',
    name: 'Mr. Anup Shokeen Residence',
    location: 'Vikaspuri, Delhi',
    sqft: undefined,
    type: 'Residential',
    cover: '/images/projects/anup-shokeen.jpg',
    alt: 'Anup Shokeen Residence — contemporary dark interiors in Vikaspuri',
    description: 'Contemporary dark interiors for a prominent Delhi figure — deep-toned wall panels, statement pendant lighting, glass partitions, and sculpted bespoke furniture.',
  },
  {
    slug: 'jain-residence',
    name: 'Jain Residence',
    location: 'Pitampura, Delhi',
    sqft: 3000,
    type: 'Residential',
    cover: '/images/projects/jain-residence-1.jpg',
    images: ['/images/projects/jain-residence-2.jpg'],
    alt: 'Jain Residence — 3000 sq ft in Pitampura, Delhi',
    description: 'A 3,000 sq.ft. family residence in Pitampura designed with elegant arch motifs, fluted wall panels, warm walnut accents, and a dedicated prayer room.',
  },
  {
    slug: 'veer-nagar-jain-colony',
    name: '16 Veer Nagar, Jain Colony',
    location: 'Delhi',
    sqft: undefined,
    type: 'Residential',
    cover: '/images/projects/veer-nagar-1.jpg',
    images: ['/images/projects/veer-nagar-2.jpg'],
    alt: '16 Veer Nagar Jain Colony — drawing room and dining area renders',
    description: 'Drawing room and dining area transformation featuring a curated material palette, ribbed ceiling details, stone-effect accent walls, and bespoke lighting.',
  },
  {
    slug: 'vallab-vihar-apartment',
    name: 'Vallab Vihar Apartment',
    location: 'Delhi NCR',
    sqft: undefined,
    type: 'Apartment',
    cover: '/images/projects/vallab-vihar.jpg',
    alt: 'Vallab Vihar Apartment — living and dining area with teal accent wall',
    description: 'Living and dining area for this apartment, combining a bold teal accent wall with clean-lined furniture, warm wood ceiling details, and contemporary art.',
  },
  {
    slug: 'varun-verma-little-unicorns',
    name: 'Little Unicorns Playschool',
    location: 'Delhi NCR',
    sqft: undefined,
    type: 'Commercial',
    cover: '/images/projects/little-unicorns.jpg',
    alt: 'Little Unicorns Playschool — owner Varun Verma commercial interior design',
    description: 'A vibrant, child-friendly playschool interior combining safety-first design principles with an engaging, colourful aesthetic and optimised learning spaces.',
  },
  {
    slug: 'parasvnath-developers',
    name: 'Parasvnath Developers',
    location: 'Delhi NCR',
    sqft: undefined,
    type: 'Commercial',
    cover: '/images/projects/parasvnath.jpg',
    alt: 'Parasvnath Developers — tower lobby, clubhouse, and sample flat interiors',
    description: 'Tower lobby, clubhouse, and sample flat interiors for a leading real estate developer — designed to showcase aspirational premium residential living.',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectTypes: ProjectType[] = [
  'Residential',
  'Commercial',
  'Farmhouse',
  'Apartment',
  'Duplex',
];
