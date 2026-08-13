export type ProjectImage = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export const projectImages: ProjectImage[] = [
  {
    src: "/images/hero/optimized/spa.jpg",
    alt: "A calm spa room with sunken stone pools and illuminated shelves.",
    objectPosition: "center center",
  },
  {
    src: "/images/hero/optimized/gallery.jpg",
    alt: "Warm dining space with a sculptural chandelier, art, and a pale stone staircase.",
    objectPosition: "center center",
  },
  {
    src: "/images/hero/optimized/kitchen-living.jpg",
    alt: "Open-plan living and kitchen space with a pale stone island and curved cream sofa.",
    objectPosition: "center center",
  },
  {
    src: "/images/hero/optimized/lounge.jpg",
    alt: "A warm, contemporary lounge with pale stone, sculptural seating, and soft wood details.",
    objectPosition: "center center",
  },
];
