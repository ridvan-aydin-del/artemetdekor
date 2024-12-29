import Image from "next/image";
import logo from "@images/header/logo.png";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-black text-white py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center">
            <Image 
              src={logo} 
              alt="Artemet Dekor Logo" 
              width={200} 
              height={80} 
              className="mb-8"
            />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              İletişim
            </h1>
            <p className="max-w-2xl text-gray-300">
              Sorularınız ve önerileriniz için bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">İletişim Bilgilerimiz</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-600">+90 (530) 554 39 24</p>
                    <p className="text-gray-600">+90 (534) 871 58 03</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-posta</h3>
                    <p className="text-gray-600">info@artemtedekor.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-black p-3 rounded-full">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adres</h3>
                    <p className="text-gray-600">Nato Yolu Cad. Keren Sk.</p>
                    <p className="text-gray-600">Ümraniye/İstanbul</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Çalışma Saatleri</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Pazartesi - Cumartesi</span>
                    <span className="text-gray-600">09:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Pazar</span>
                    <span className="text-gray-600">Kapalı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Bize Ulaşın</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>


        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Konum</h2>
          <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504900120997!2d29.1276!3d40.9897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDU5JzIyLjkiTiAyOcKwMDcnMzkuNCJF!5e0!3m2!1str!2str!4v1625581234567!5m2!1str!2str"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 