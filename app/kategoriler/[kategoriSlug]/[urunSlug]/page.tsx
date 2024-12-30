"use client"

import { useParams } from "next/navigation";
import Image from "next/image";
import categories from "../../../mock";

export default function UrunDetayPage() {
  const { kategoriSlug, urunSlug } = useParams();

  const kategori = categories.find((cat) => cat.slug === kategoriSlug);
  const urun = kategori?.products.find((prod) => prod.slug === urunSlug);

  if (!kategori || !urun) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-red-500">Ürün Bulunamadı</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">{urun.name}</h1>
        <div className="relative w-full h-80 mb-6">
          <Image
            src={urun.image}
            alt={urun.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>
        <p className="text-gray-600 text-center">{urun.description}</p>
        <p className="text-gray-500 text-center mt-4">
          Kategori: <span className="font-semibold">{kategori.name}</span>
        </p>
      </div>
    </div>
  );
}
