import { masaImages, sehpaImages } from "@images/images";

export const categories = [
  {
    name: "Masalar",
    slug: "masalar",
    description: "Şık ve modern masalar kategorisi.",
    products: masaImages.map((image, index) => ({
      name: `Masa${index + 1}`,
      slug: `masa${index + 1}`,
      image,
      description: `Masa${index + 1} hakkında açıklama.`,
    })),
  },
  {
    name: "Sehpalar",
    slug: "sehpalar",
    description: "Her mekana uyum sağlayan sehpalar kategorisi.",
    products: sehpaImages.map((image, index) => ({
      name: `Sehpa${index + 1}`,
      slug: `sehpa${index + 1}`,
      image,
      description: `Sehpa${index + 1} hakkında açıklama.`,
    })),
  },
];

export default categories;
