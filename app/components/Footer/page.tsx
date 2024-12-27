import Link from "next/link";
import Image from "next/image";
import facebook from "../../../images/header/facebook.svg";
import instagram from "../../../images/header/instagram.svg";
import pinterest from "../../../images/header/pinterest.svg";
import youtube from "../../../images/header/youtube.svg";
import "./global.css";

export default function Footer() {
    return (
      <div className="footer-clean bg-gray-900 text-white">
        <footer className="container mx-auto px-4 py-6 lg:py-8">
          {/* Grid yapısını düzenleyelim */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kurumsal Bölümü */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-lg font-bold mb-4">Kurumsal</h1>
              <ul className="space-y-2">
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/about">Hakkımızda</Link>
                </li>
              </ul>
            </div>

            {/* Ürün Gruplarımız */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-lg font-bold mb-4">Ürün Gruplarımız</h1>
              <ul className="grid grid-cols-2 gap-2">
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/masa">Masa</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/sandalye">Sandalye</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/sehpa">Sehpa</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/dresuar">Dresuar</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/ayna">Ayna</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/konsol-tv-unitesi">Konsol-Tv Ünitesi</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/berjer">Berjer</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/bench-puf">Bench-Puf</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/separator">Separatör</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/aydinlatma">Aydınlatma</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/kitaplık">Kitaplık</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/aksesuar">Aksesuar</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                  <Link href="/products/koltuk-takimi">Koltuk Takımı</Link>
                </li>
              </ul>
            </div>

            {/* Sosyal Medya İkonları */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-lg font-bold mb-4">Sosyal Medya</h1>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link href="https://www.facebook.com" className="hover:opacity-75">
                  <Image src={facebook} alt="Facebook" width={24} height={24} className="filter invert" />
                </Link>
                <Link href="https://www.instagram.com" className="hover:opacity-75">
                  <Image src={instagram} alt="Instagram" width={24} height={24} className="filter invert" />
                </Link>
                <Link href="https://www.pinterest.com" className="hover:opacity-75">
                  <Image src={pinterest} alt="Pinterest" width={24} height={24} className="filter invert" />
                </Link>
                <Link href="https://www.youtube.com" className="hover:opacity-75">
                  <Image src={youtube} alt="YouTube" width={24} height={24} className="filter invert" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}