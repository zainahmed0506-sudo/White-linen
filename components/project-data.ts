export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  descriptor: string;
  cover: ProjectImage;
  introduction: string;
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "dh-68",
    title: "Sienna House",
    descriptor: "Sculptural calm",
    cover: { src: "/images/projects/optimized/dh-68-living-room.jpg", alt: "Living room with a curved tan sofa, staircase, and pale stone columns.", caption: "Soft curves and pale stone set a composed rhythm." },
    introduction: "A sequence of light, material, and generous proportion.",
    images: [
      { src: "/images/projects/dh-68/33.jpg", alt: "Interior detail from DH 68.", caption: "A quiet composition in texture and tone." },
      { src: "/images/projects/dh-68/34.jpg", alt: "Interior detail from DH 68.", caption: "Material contrast held in a restrained palette." },
      { src: "/images/projects/dh-68/35.jpg", alt: "Interior detail from DH 68.", caption: "A close study of light across the room." },
      { src: "/images/projects/dh-68/39.jpg", alt: "Interior detail from DH 68.", caption: "Sculptural elements anchor the space." },
    ],
  },
  {
    slug: "le-reve",
    title: "Le Reve",
    descriptor: "Quiet retreat",
    cover: { src: "/images/projects/optimized/le-reve.jpg", alt: "Warm bedroom with a wood bedside table, sculptural lamp, and patterned linens.", caption: "Warm timber and tailored textiles create an intimate setting." },
    introduction: "Soft light and tactile details guide each private room.",
    images: [
      { src: "/images/projects/le-reve/IMG_0054.jpeg", alt: "Interior detail from Le Reve.", caption: "A measured balance of warmth and softness." },
      { src: "/images/projects/le-reve/IMG_0786.jpeg", alt: "Interior detail from Le Reve.", caption: "Layered finishes bring depth to the room." },
      { src: "/images/projects/le-reve/IMG_0790.jpeg", alt: "Interior detail from Le Reve.", caption: "Light falls gently across the material palette." },
      { src: "/images/projects/le-reve/IMG_9452.jpeg", alt: "Interior detail from Le Reve.", caption: "A small moment of texture and tone." },
    ],
  },
  {
    slug: "mansion-06",
    title: "Sage House",
    descriptor: "Softly composed",
    cover: { src: "/images/projects/optimized/mansion-06.jpg", alt: "Refined bedroom with illuminated shelving and pale textured wall panels.", caption: "Ambient light and quiet detail shape the atmosphere." },
    introduction: "A refined interior sequence shaped through light and proportion.",
    images: [
      { src: "/images/projects/mansion-06/IMG_0229.jpeg", alt: "Interior detail from Mansion 06.", caption: "A calm framework of material and shadow." },
      { src: "/images/projects/mansion-06/IMG_0260.jpeg", alt: "Interior detail from Mansion 06.", caption: "Subtle illumination lends depth to the composition." },
      { src: "/images/projects/mansion-06/IMG_0336.jpeg", alt: "Interior detail from Mansion 06.", caption: "Tones are held close for a seamless feel." },
      { src: "/images/projects/mansion-06/IMG_0403.jpeg", alt: "Interior detail from Mansion 06.", caption: "A considered view through the interior." },
    ],
  },
  {
    slug: "mansion-02",
    title: "Garden House",
    descriptor: "Garden-facing living",
    cover: { src: "/images/projects/optimized/mansion-02.jpg", alt: "Living room with a wood slat ceiling, sculptural furniture, and a garden view.", caption: "Natural light and sculptural forms keep the living space open." },
    introduction: "A generous, light-filled setting with a close connection to the outdoors.",
    images: [
      { src: "/images/projects/mansion-02/IMG_3548.jpeg", alt: "Interior detail from Mansion 02.", caption: "A view that gives material and daylight equal presence." },
      { src: "/images/projects/mansion-02/IMG_3835.jpeg", alt: "Interior detail from Mansion 02.", caption: "Furniture and architecture share a softened silhouette." },
      { src: "/images/projects/mansion-02/IMG_3886.jpeg", alt: "Interior detail from Mansion 02.", caption: "A pale palette expands the sense of space." },
      { src: "/images/projects/mansion-02/IMG_3934.jpeg", alt: "Interior detail from Mansion 02.", caption: "The eye moves from interior detail to the landscape beyond." },
    ],
  },
  {
    slug: "lv-38",
    title: "The Arched House",
    descriptor: "Pale materiality",
    cover: { src: "/images/projects/optimized/lv-38.jpg", alt: "Living room with an arched opening, marble table, and softly layered furnishings.", caption: "Pale stone and curved forms give the rooms a relaxed cadence." },
    introduction: "An interior of calm layers, curved lines, and quiet contrast.",
    images: [
      { src: "/images/projects/lv-38/IMG_2919.jpeg", alt: "Interior detail from LV 38.", caption: "A considered interplay of texture and form." },
      { src: "/images/projects/lv-38/IMG_2921.jpeg", alt: "Interior detail from LV 38.", caption: "Natural finishes carry the room without excess." },
      { src: "/images/projects/lv-38/IMG_2952.jpeg", alt: "Interior detail from LV 38.", caption: "A quiet threshold between spaces." },
      { src: "/images/projects/lv-38/IMG_3052.jpg", alt: "Interior detail from LV 38.", caption: "Small details complete the material story." },
    ],
  },
];

export const recentWorkImages: ProjectImage[] = [
  { src: "/images/hero/optimized/spa.jpg", alt: "A calm spa room with sunken stone pools and illuminated shelves.", caption: "Pale stone meets a warm, illuminated backdrop." },
  { src: "/images/hero/optimized/gallery.jpg", alt: "Warm dining space with a sculptural chandelier, art, and a pale stone staircase.", caption: "An open gallery of art, dining, and changing light." },
  { src: "/images/hero/optimized/kitchen-living.jpg", alt: "Open-plan living and kitchen space with a pale stone island and curved cream sofa.", caption: "Curved seating and a stone island shape the heart of the home." },
  { src: "/images/hero/optimized/lounge.jpg", alt: "A warm contemporary lounge with pale stone, sculptural seating, and soft wood details.", caption: "Layered seating and soft timber bring warmth to the room." },
  { src: "/images/hero/optimized/dining.jpg", alt: "A contemporary dining space with layered natural finishes.", caption: "A table setting held within a calm architectural frame." },
  { src: "/images/hero/optimized/living.jpg", alt: "A light-filled contemporary living space.", caption: "A generous living room in a quiet material palette." },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
