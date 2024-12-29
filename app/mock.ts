import { masaImages, sehpaImages, aynaImages, berjerImages, seperatorImages, kitaplikImages, sandalyeImages } from "@images/images";

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
  {
    name: "Aynalar",
    slug: "aynalar",
    description: "Evinize zarafet katacak aynalar kategorisi.",
    products: aynaImages.map((image, index) => ({
      name: `Ayna${index + 1}`,
      slug: `ayna${index + 1}`,
      image,
      description: `Ayna${index + 1} hakkında açıklama.`,
    })),
  },
  {
    name: "Berjerler",
    slug: "berjerler",
    description: "Berjerler kategorisi.",
    products: berjerImages.map((image, index) => ({
      name: `Berjer${index + 1}`,
      slug: `berjer${index + 1}`,
      image,
      description: `Berjer${index + 1} hakkında açıklama.`,
    })),
  },
  {
    name: "Seperatörler",
    slug: "seperatorler",
    description: "Seperatörler kategorisi.",
    products: seperatorImages.map((image, index) => ({
      name: `Seperator${index + 1}`,
      slug: `seperator${index + 1}`,
      image,
      description: `Seperatör${index + 1} hakkında açıklama.`,
    })),
  },
  {
    name: "Kitapliklar",
    slug: "kitapliklar",
    description: "Kitapliklar kategorisi.",
    products: kitaplikImages.map((image, index) => ({
      name: `Kitaplik${index + 1}`,
      slug: `kitaplik${index + 1}`,
      image,
      description: `Kitaplik${index + 1} hakkında açıklama.`,
    })),
  },
  {
    name: "Sandalyeler",
    slug: "sandalyeler",
    description: "Şık ve modern sandalyeler kategorisi.",
    products: sandalyeImages.map((image, index) => ({
      name: `Sandalye${index + 1}`,
      slug: `sandalye${index + 1}`,
      image,
      description: `Sandalye${index + 1} hakkında açıklama.`,
    })),
  },
];

export default categories;
