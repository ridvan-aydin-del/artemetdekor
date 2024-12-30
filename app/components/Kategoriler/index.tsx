'use client';
import Image from "next/image";
import Link from "next/link";
import { categories } from "../../mock"

export default function Kategoriler() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Ürün Kategorilerimiz</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link 
            href={`/kategoriler/${category.slug}`} 
            key={category.slug}
            className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl"
          >
            <div className="aspect-square relative">

              <Image
                src={category.products[0]?.image || '/placeholder.jpg'}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-white text-lg md:text-xl font-semibold text-center">
                  {category.name}
                </h3>

                <div className="flex justify-center">
                  <span className="text-white text-sm bg-black/50 px-4 py-2 rounded-full mt-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Ürünleri İncele
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 