"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import categories from "../../mock";

export default function KategoriPage() {
  const { kategoriSlug } = useParams();
  const kategori = categories.find((cat) => cat.slug === kategoriSlug);

  if (!kategori) {
    return <div>Kategori bulunamadı.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">{kategori.name}</h1>
      <p className="text-center text-gray-600 mb-8">{kategori.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {kategori.products.map((urun) => (
          <Link
            key={urun.slug}
            href={`/kategoriler/${kategori.slug}/${urun.slug}`}
            className="block bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
          >
            <div className="relative w-full h-40">
              <Image
                src={urun.image}
                alt={urun.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                priority={false}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {urun.name}
              </h2>
              <p className="text-gray-600">{urun.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
