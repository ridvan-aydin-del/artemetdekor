'use client';
import Image from "next/image";
import kisiyeOzel from "@images/features/kisiye-ozel-tasarim.jpg";
import musteriOnayli from "@images/features/musteri-onayli-imalat.jpg";
import hizliTeslimat from "@images/features/hizli-ve-guvenli-teslimat.jpg";

const features = [
  {
    title: "KİŞİYE ÖZEL TASARIM",
    description: "Mekanınıza özel, profesyonel tasarım hizmeti sunuyoruz.",
    image: kisiyeOzel
  },
  {
    title: "MÜŞTERİ ONAYLI İMALAT",
    description: "Üretim sürecinde müşteri onayı ile ilerleyerek memnuniyeti garanti ediyoruz.",
    image: musteriOnayli
  },
  {
    title: "HIZLI VE GÜVENLİ TESLİMAT",
    description: "Ürünlerinizi özenle paketleyip güvenli bir şekilde teslim ediyoruz.",
    image: hizliTeslimat
  }
];

export default function Features() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}