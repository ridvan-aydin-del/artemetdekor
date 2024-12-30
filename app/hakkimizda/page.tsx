import Image from "next/image";
import logo from "@images/header/logo.png";
import Vizyonumuz  from "@images/hakkimizda/vizyonumuz.jpg"
import Misyonumuz from "@images/hakkimizda/misyonumuz.jpg"


export default function Hakkimizda() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center">
            <Image 
              src={logo} 
              alt="Artem E-Dekor Logo" 
              width={200} 
              height={80} 
              className="mb-8"
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Artemet Dekor Hakkında
            </h1>
            <p className="max-w-2xl text-gray-300">
              2020 yılından bu yana mobilya sektöründe kalite ve estetiği bir araya getirerek, 
              yaşam alanlarınıza değer katıyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Vizyonumuz</h2>
            <p className="text-gray-600 mb-4">
              Mobilya sektöründe yenilikçi tasarımlarımız ve kaliteli ürünlerimizle, 
              müşterilerimizin yaşam alanlarını daha estetik ve konforlu hale getirmeyi hedefliyoruz.
            </p>
            <p className="text-gray-600">
              Modern çizgilerimiz ve özgün tasarımlarımızla, her eve özel çözümler sunuyoruz.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src={Vizyonumuz}
              alt="Vizyonumuz"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 relative h-[300px] md:h-[400px]">
            <Image
              src={Misyonumuz}
              alt="Misyonumuz"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
            <p className="text-gray-600 mb-4">
              Müşterilerimizin beklentilerini en üst düzeyde karşılayarak, 
              yaşam alanlarına değer katan mobilya çözümleri sunmak.
            </p>
            <p className="text-gray-600">
              Kaliteli malzeme ve işçilik ile üretilen ürünlerimizi, 
              uygun fiyatlarla müşterilerimize ulaştırmak.
            </p>
          </div>
        </div>

        {/* Değerlerimiz Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Kalite</h3>
              <p className="text-gray-600">
                En kaliteli malzemeler ve uzman işçilik ile üretim yapıyoruz.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">
                Müşterilerimizin memnuniyeti bizim önceliğimizdir.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Yenilikçilik</h3>
              <p className="text-gray-600">
                Sürekli gelişen trendleri takip ederek yenilikçi tasarımlar sunuyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* İletişim CTA */}
        <div className="text-center bg-black text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Bizimle İletişime Geçin</h2>
          <p className="mb-6">
            Sorularınız için bize ulaşabilir, showroom'umuzu ziyaret edebilirsiniz.
          </p>
          <div className="space-y-2">
            <p>Telefon: +90 (530) 554 39 24 / +90 (534) 871 58 03</p>
            <p>E-posta: info@artemtedekor.com</p>
            <p>Adres: Nato Yolu Cad. Keren Sk. Ümraniye/İstanbul</p>
          </div>
        </div>
      </div>
    </div>
  );
} 