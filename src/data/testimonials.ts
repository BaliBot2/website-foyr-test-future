export interface Testimonial {
  id: string;
  reviewer: string;
  badge?: string; // e.g. "Local Guide"
  rating: number;
  quote: string;
  source: 'Google Review';
}

export const testimonials: Testimonial[] = [
  {
    id: 'varun-verma',
    reviewer: 'Varun Verma',
    badge: 'Local Guide',
    rating: 5,
    quote:
      'Anchal has done complete justice to the project! Our infrastructure is being much appreciated by anyone who visits the school.',
    source: 'Google Review',
  },
  {
    id: 'neha-jain',
    reviewer: 'Neha Jain',
    rating: 5,
    quote:
      'Right from the designing to execution you put lot of efforts in our project… Highly recommend.',
    source: 'Google Review',
  },
  {
    id: 'ritika-khatri',
    reviewer: 'Ritika Khatri',
    rating: 5,
    quote:
      'Their quotation & work against the services they provide are pretty much reasonable and up to the mark as compared to other interior designers out there.',
    source: 'Google Review',
  },
  {
    id: 'gaurav-batla',
    reviewer: 'Gaurav Batla',
    rating: 5,
    quote:
      'She accompanied us to multiple vendors as well in helping us choose the right furniture. She\'s really good at her job and should definitely be hired.',
    source: 'Google Review',
  },
  {
    id: 'amit-malik',
    reviewer: 'Amit Malik',
    rating: 5,
    quote:
      'I am very impressed with their unique designs and ideas. Will recommend this firm to others.',
    source: 'Google Review',
  },
  {
    id: 'aashima-baweja',
    reviewer: 'Aashima Baweja',
    badge: 'Local Guide · 127 reviews',
    rating: 5,
    quote:
      'Very dedicated and passionate towards her work. Extremely talented and diligent.',
    source: 'Google Review',
  },
  {
    id: 'garima-arora',
    reviewer: 'Garima Arora',
    rating: 5,
    quote:
      'Great listening skills, designed things in a way to suit our needs while looking amazing!',
    source: 'Google Review',
  },
  {
    id: 'kamal-gupta',
    reviewer: 'Kamal Gupta',
    rating: 5,
    quote:
      'Best interior designer and architect. Focuses on minute details and customer choices.',
    source: 'Google Review',
  },
];
