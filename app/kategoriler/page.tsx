import Link from "next/link";
import {categories} from "../mock";

export default function KategorilerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Kategoriler</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((kategori) => (
          <Link
            key={kategori.slug}
            href={`/kategoriler/${kategori.slug}`}
            className="block bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {kategori.name}
              </h2>
              <p className="text-gray-600">{kategori.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
