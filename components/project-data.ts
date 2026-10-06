export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type Project = {
  slug: string;
  title: string;
  descriptor: string;
  cover: ProjectImage;
  introduction: string;
  images: ProjectImage[];
};

function projectImage(
  slug: string,
  projectTitle: string,
  file: string,
  width: number,
  height: number,
): ProjectImage {
  return {
    src: `/images/projects/${slug}/${file}`,
    alt: `Interior view from ${projectTitle}.`,
    width,
    height,
  };
}

const dh68Images = [
  projectImage("dh-68", "DH 68", "6.jpg", 8500, 5667),
  projectImage("dh-68", "DH 68", "1.jpg", 8500, 5667),
  projectImage("dh-68", "DH 68", "2.jpg", 5667, 8500),
  projectImage("dh-68", "DH 68", "3.jpg", 5667, 8500),
  projectImage("dh-68", "DH 68", "4.jpg", 5667, 8500),
  projectImage("dh-68", "DH 68", "5.jpg", 5667, 8500),
  projectImage("dh-68", "DH 68", "7.jpg", 8500, 5667),
  projectImage("dh-68", "DH 68", "8.jpg", 8500, 5667),
  projectImage("dh-68", "DH 68", "9.jpg", 8500, 5667),
  projectImage("dh-68", "DH 68", "53.jpg", 8500, 5667),
];

const gp225Images = [
  projectImage("gp-225", "GP 225", "IMG_3217.jpeg", 4032, 3024),
  projectImage("gp-225", "GP 225", "IMG_5390.jpeg", 4032, 3024),
  projectImage("gp-225", "GP 225", "IMG_5389.jpeg", 4032, 3024),
  projectImage("gp-225", "GP 225", "IMG_5403.jpeg", 4032, 3024),
  projectImage("gp-225", "GP 225", "IMG_3195.jpeg", 4032, 3024),
  projectImage("gp-225", "GP 225", "IMG_5406.jpeg", 4032, 3024),
  projectImage("gp-225", "GP 225", "IMG_5402.jpeg", 4032, 3024),
  projectImage("gp-225", "GP 225", "IMG_5391.jpeg", 4032, 3024),
  projectImage("gp-225", "GP 225", "IMG_5386.jpeg", 4032, 3024),
  projectImage("gp-225", "GP 225", "IMG_3214.jpeg", 4032, 3024),
  projectImage("gp-225", "GP 225", "IMG_5379.jpeg", 4032, 3024),
];

const leReveImages = [
  projectImage("le-reve", "Le Reve", "IMG_0795.jpeg", 5712, 4284),
  projectImage("le-reve", "Le Reve", "IMG_0790.jpeg", 4284, 5712),
  projectImage("le-reve", "Le Reve", "IMG_0787.jpeg", 4284, 5712),
  projectImage("le-reve", "Le Reve", "IMG_0786.jpeg", 4284, 5712),
  projectImage("le-reve", "Le Reve", "IMG_0093.jpeg", 4032, 3024),
  projectImage("le-reve", "Le Reve", "IMG_0106.jpeg", 4284, 5712),
  projectImage("le-reve", "Le Reve", "IMG_0091.jpeg", 4032, 3024),
  projectImage("le-reve", "Le Reve", "IMG_0092.jpeg", 4032, 3024),
  projectImage("le-reve", "Le Reve", "IMG_0107.jpeg", 4284, 5712),
  projectImage("le-reve", "Le Reve", "IMG_0103.jpeg", 4032, 3024),
];

const barari2Images = [
  projectImage("barari-2", "Barari 2", "IMG_3884.jpeg", 3024, 4032),
  projectImage("barari-2", "Barari 2", "IMG_4681.jpeg", 3690, 4653),
  projectImage("barari-2", "Barari 2", "IMG_4712.jpeg", 4257, 5677),
  projectImage("barari-2", "Barari 2", "IMG_4686.jpeg", 3966, 5288),
  projectImage("barari-2", "Barari 2", "IMG_4715.jpeg", 4254, 5673),
  projectImage("barari-2", "Barari 2", "IMG_4684.jpeg", 4284, 5712),
  projectImage("barari-2", "Barari 2", "IMG_4696.jpeg", 4264, 5686),
  projectImage("barari-2", "Barari 2", "IMG_4682.jpeg", 4014, 5526),
  projectImage("barari-2", "Barari 2", "IMG_4704.jpeg", 4284, 5712),
  projectImage("barari-2", "Barari 2", "IMG_4680.jpeg", 4284, 5712),
  projectImage("barari-2", "Barari 2", "IMG_4689.jpeg", 4284, 5712),
  projectImage("barari-2", "Barari 2", "IMG_4702.jpeg", 4284, 5712),
  projectImage("barari-2", "Barari 2", "IMG_4718.jpeg", 4206, 5608),
  projectImage("barari-2", "Barari 2", "IMG_4720.jpeg", 2960, 3947),
  projectImage("barari-2", "Barari 2", "IMG_4721.jpeg", 4258, 5678),
  projectImage("barari-2", "Barari 2", "IMG_4722.jpeg", 4284, 5712),
  projectImage("barari-2", "Barari 2", "IMG_4726.jpeg", 4266, 5688),
  projectImage("barari-2", "Barari 2", "IMG_4734.jpeg", 4284, 5712),
  projectImage("barari-2", "Barari 2", "IMG_4738.jpeg", 4284, 5712),
  projectImage("barari-2", "Barari 2", "IMG_4745.jpeg", 4284, 5712),
];

const g33Images = [
  projectImage("g33", "G33", "IMG_9377.jpeg", 2956, 3941),
  projectImage("g33", "G33", "IMG_7018.jpeg", 2967, 4204),
  projectImage("g33", "G33", "IMG_7021.jpeg", 3024, 4032),
  projectImage("g33", "G33", "IMG_7014.jpeg", 2878, 3838),
  projectImage("g33", "G33", "IMG_7011.jpeg", 3140, 4464),
  projectImage("g33", "G33", "IMG_7022.jpeg", 3024, 4032),
  projectImage("g33", "G33", "IMG_7028.jpeg", 3024, 4032),
  projectImage("g33", "G33", "IMG_7031.jpeg", 4284, 5712),
  projectImage("g33", "G33", "IMG_7048.jpeg", 3024, 4032),
  projectImage("g33", "G33", "IMG_7051.jpeg", 3024, 4032),
  projectImage("g33", "G33", "IMG_7053.jpeg", 3024, 4032),
  projectImage("g33", "G33", "IMG_7058.jpeg", 4284, 5712),
  projectImage("g33", "G33", "IMG_7074.jpeg", 4284, 5712),
  projectImage("g33", "G33", "IMG_7024.jpeg", 4284, 5712),
  projectImage("g33", "G33", "IMG_7086.jpeg", 2789, 3719),
  projectImage("g33", "G33", "IMG_7088.jpeg", 4284, 5712),
  projectImage("g33", "G33", "IMG_7087.jpeg", 4284, 5712),
  projectImage("g33", "G33", "IMG_7069.jpeg", 4234, 5646),
  projectImage("g33", "G33", "IMG_7079.jpeg", 4284, 5712),
  projectImage("g33", "G33", "IMG_7040.jpeg", 4284, 5712),
];

const lv38Images = [
  projectImage("lv-38", "LV 38", "2026 02 16 388 .jpg", 5464, 8192),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 81.jpg", 5360, 8036),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 160099.jpg", 7605, 5072),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 162306.jpg", 5464, 8192),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 243.jpg", 5464, 8192),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 16 308.jpg", 8192, 5464),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 478.jpg", 5464, 8192),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 81 .jpg", 5360, 8036),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 474.jpg", 5464, 8192),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 25 .jpg", 8192, 5464),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 230.jpg", 5207, 7806),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 16 183.jpg", 5464, 8192),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 16 388.jpg", 5464, 8192),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 291.jpg", 8192, 5464),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 16 270.jpg", 5464, 8192),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 697.jpg", 5121, 7678),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 299.jpg", 5464, 8192),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 346.jpg", 5464, 8192),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 16 278.jpg", 5464, 8192),
  projectImage("lv-38", "LV 38", "Premfors_2026 02 26 379.jpg", 5464, 8192),
];

const mansion6Images = [
  projectImage("mansion-6", "Mansion 6", "IMG_0846.jpeg", 5712, 4284),
  projectImage("mansion-6", "Mansion 6", "IMG_0837.jpeg", 5712, 4284),
  projectImage("mansion-6", "Mansion 6", "IMG_8683.jpeg", 4032, 3024),
  projectImage("mansion-6", "Mansion 6", "IMG_0836.jpeg", 5712, 4284),
  projectImage("mansion-6", "Mansion 6", "IMG_8673.jpeg", 4032, 3024),
  projectImage("mansion-6", "Mansion 6", "IMG_0403.jpeg", 3024, 4032),
  projectImage("mansion-6", "Mansion 6", "IMG_0404.jpeg", 3024, 4032),
  projectImage("mansion-6", "Mansion 6", "IMG_0324.jpeg", 4032, 3024),
  projectImage("mansion-6", "Mansion 6", "IMG_0286.jpeg", 4032, 3024),
  projectImage("mansion-6", "Mansion 6", "IMG_0285.jpeg", 4032, 3024),
];

const redwoodImages = [
  projectImage("redwood", "Redwood", "living.png", 3840, 2560),
  projectImage("redwood", "Redwood", "bedroom.png", 3840, 2435),
  projectImage("redwood", "Redwood", "dining.png", 3840, 2557),
  projectImage("redwood", "Redwood", "suite.png", 3840, 2557),
  projectImage("redwood", "Redwood", "detail.png", 3840, 2557),
];

const alBarari04Images = [
  projectImage("al-barari-04", "Al Barari 04", "library.png", 3840, 2561),
  projectImage("al-barari-04", "Al Barari 04", "bar.png", 3840, 2557),
  projectImage("al-barari-04", "Al Barari 04", "spa.png", 3840, 2557),
  projectImage("al-barari-04", "Al Barari 04", "master-bedroom.png", 3840, 2560),
  projectImage("al-barari-04", "Al Barari 04", "cinema.png", 3840, 2561),
];

const ilPrimoImages = [
  projectImage("il-primo", "Il Primo", "formal-living.png", 3840, 2560),
  projectImage("il-primo", "Il Primo", "dining.png", 3840, 2560),
  projectImage("il-primo", "Il Primo", "family.png", 3840, 2560),
  projectImage("il-primo", "Il Primo", "hers-master-bedroom.png", 3840, 2497),
  projectImage("il-primo", "Il Primo", "his-bathroom.png", 3840, 2627),
];

const tilalAlGhafImages = [
  projectImage("tilal-al-ghaf", "Tilal Al Ghaf", "overview.png", 3840, 2557),
  projectImage("tilal-al-ghaf", "Tilal Al Ghaf", "living.png", 3840, 2560),
  projectImage("tilal-al-ghaf", "Tilal Al Ghaf", "dining.png", 3840, 2557),
  projectImage("tilal-al-ghaf", "Tilal Al Ghaf", "master-bedroom.png", 3840, 2557),
  projectImage("tilal-al-ghaf", "Tilal Al Ghaf", "master-bathroom.png", 3840, 2557),
];

export const projects: Project[] = [
  { slug: "g33", title: "G33", descriptor: "Residential interior", cover: g33Images[5], introduction: "A White Linen residential interior.", images: g33Images },
  { slug: "lv-38", title: "LV 38", descriptor: "Residential interior", cover: lv38Images[9], introduction: "A White Linen residential interior.", images: lv38Images },
  { slug: "barari-2", title: "Barari 2", descriptor: "Residential interior", cover: barari2Images[1], introduction: "A White Linen residential interior.", images: barari2Images },
  { slug: "dh-68", title: "DH 68", descriptor: "Residential interior", cover: dh68Images[1], introduction: "A White Linen residential interior.", images: dh68Images },
  { slug: "gp-225", title: "GP 225", descriptor: "Residential interior", cover: gp225Images[4], introduction: "A White Linen residential interior.", images: gp225Images },
  { slug: "le-reve", title: "Le Reve", descriptor: "Residential interior", cover: leReveImages[9], introduction: "A White Linen residential interior.", images: leReveImages },
  { slug: "mansion-6", title: "Mansion 6", descriptor: "Residential interior", cover: mansion6Images[5], introduction: "A White Linen residential interior.", images: mansion6Images },
  { slug: "redwood", title: "Redwood", descriptor: "Residential interior", cover: redwoodImages[0], introduction: "A White Linen residential interior.", images: redwoodImages },
  { slug: "al-barari-04", title: "Al Barari 04", descriptor: "Residential interior", cover: alBarari04Images[0], introduction: "A White Linen residential interior.", images: alBarari04Images },
  { slug: "il-primo", title: "Il Primo", descriptor: "Residential interior", cover: ilPrimoImages[0], introduction: "A White Linen residential interior.", images: ilPrimoImages },
  { slug: "tilal-al-ghaf", title: "Tilal Al Ghaf", descriptor: "Residential interior", cover: tilalAlGhafImages[0], introduction: "A White Linen residential interior.", images: tilalAlGhafImages },
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
