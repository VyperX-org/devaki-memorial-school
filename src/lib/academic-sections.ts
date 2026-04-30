export type AcademicSection = {
  slug: 'pre-primary' | 'primary' | 'juniors' | 'seniors';
  title: string;
  href: string;
  intro: string;
  image: string;
  highlights: string[];
  gallery: string[];
};

export const academicSections: AcademicSection[] = [
  {
    slug: 'pre-primary',
    title: 'Pre-Primary',
    href: '/academics/pre-primary',
    intro:
      'A joyful foundation stage where children learn through stories, rhythm, play, and guided discovery in a warm and caring environment.',
    image: 'https://i.ibb.co/ccrt9K2K/image.png',
    highlights: [
      'Activity-based learning with phonics and numeracy readiness',
      'Fine-motor and sensory development through art and craft',
      'Circle time to build communication and social confidence',
    ],
    gallery: ['https://i.ibb.co/LGvqwWF/C0418-frame-at-0m2s-jpg.jpg', 'https://i.ibb.co/KczNdbWH/DSC-3636-jpg.jpg'],
  },
  {
    slug: 'primary',
    title: 'Primary',
    href: '/academics/primary',
    intro:
      'Primary classes focus on strong fundamentals in language, mathematics, EVS, and digital literacy while nurturing curiosity and discipline.',
    image: 'https://i.ibb.co/jYPWqyH/image.png',
    highlights: [
      'Concept-first teaching supported by classroom projects',
      'Weekly reading and expression activities',
      'Balanced timetable with sports and co-curricular periods',
    ],
    gallery: ['https://i.ibb.co/xSB2MSzS/C0444-frame-at-0m15s-jpg.jpg', 'https://i.ibb.co/qL3KrGrG/kids-jpg.jpg'],
  },
  {
    slug: 'juniors',
    title: 'Juniors',
    href: '/academics/juniors',
    intro:
      'The junior school builds analytical thinking with deeper subject exposure, practical work, and collaborative learning across classrooms.',
    image: 'https://i.ibb.co/ccrt9K2K/image.png',
    highlights: [
      'Structured assessments with regular feedback cycles',
      'Laboratory exposure and guided project-based assignments',
      'Value education and leadership opportunities',
    ],
    gallery: ['https://i.ibb.co/23JRLtx9/DSC-3749.png', 'https://i.ibb.co/Txn75JJp/1777541983221-jpg.jpg'],
  },
  {
    slug: 'seniors',
    title: 'Seniors',
    href: '/academics/seniors',
    intro:
      'Senior classes are tailored for ICSE and ISC preparation with focused mentoring, stream guidance, and exam-ready study practices.',
    image: 'https://i.ibb.co/jYPWqyH/image.png',
    highlights: [
      'Subject specialization for Science and Commerce pathways',
      'Career counselling, mock tests, and performance tracking',
      'Board-oriented revision plans with doubt-clearing sessions',
    ],
    gallery: ['https://i.ibb.co/20C6mfH5/DSC-3736.png', 'https://i.ibb.co/v4dg5rkd/DSC-3770.png', 'https://i.ibb.co/FqySJFNJ/select-i.png'],
  },
];

export function getAcademicSectionBySlug(slug: string): AcademicSection | undefined {
  return academicSections.find((section) => section.slug === slug);
}
