import Image from "next/image";
import Link from "next/link";

const products = [
    { id: 1, name: "Masa", slug: "masa", imageUrl: "/images/products/table.jpg" },
    { id: 2, name: "Sandalye", slug: "sandalye", imageUrl: "/images/products/chair.jpg" },
    { id: 3, name: "Sehpa", slug: "sehpa", imageUrl: "/images/products/coffee-table.jpg" },
    { id: 4, name: "Dresuar", slug: "dresuar", imageUrl: "/images/products/console.jpg" },
    { id: 5, name: "Ayna", slug: "ayna", imageUrl: "/images/products/mirror.jpg" },
    { id: 6, name: "Konsol-Tv Ünitesi", slug: "konsol-tv-unitesi", imageUrl: "/images/products/tv-unit.jpg" },
    { id: 7, name: "Berjer", slug: "berjer", imageUrl: "/images/products/armchair.jpg" },
    { id: 8, name: "Bench-Puf", slug: "bench-puf", imageUrl: "/images/products/bench.jpg" },
    { id: 9, name: "Separatör", slug: "separator", imageUrl: "/images/products/partition.jpg" },
    { id: 10, name: "Aydınlatma", slug: "aydinlatma", imageUrl: "/images/products/lighting.jpg" },
    { id: 11, name: "Kitaplık", slug: "kitaplık", imageUrl: "/images/products/bookshelf.jpg" },
    { id: 12, name: "Aksesuar", slug: "aksesuar", imageUrl: "/images/products/accessory.jpg" },
    { id: 13, name: "Koltuk Takımı", slug: "koltuk-takimi", imageUrl: "/images/products/sofa-set.jpg" },
];

export default function Products() {
    return (
        <div className="min-h-screen bg-gray-50">


            {/* Products Grid */}
            <div className="container mt-16 mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <Link 
                            href={`/products/${product.slug}`} 
                            key={product.id}
                            className="group"
                        >
                            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                    {/* Görsel yüklenene kadar gri arka plan gösterilir */}
                                    <Image
                                        src={product.imageUrl}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg text-center font-semibold text-gray-800 group-hover:text-black">
                                        {product.name}
                                    </h3>

                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
} 