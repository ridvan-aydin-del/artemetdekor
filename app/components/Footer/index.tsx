import Link from "next/link";
import Image from "next/image";
import facebook from "@images/header/facebook.svg";
import instagram from "@images/header/instagram.svg";
import pinterest from "@images/header/pinterest.svg";
import youtube from "@images/header/youtube.svg";
import "./styles.css";

export default function Footer() {
    return (
      <div className="footer-clean bg-black text-white w-full">
        <footer className="max-w-[1440px] mx-auto py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-lg font-bold mb-4">Kurumsal</h1>
              <ul className="space-y-2">
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/about">Hakkımızda</Link>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-lg font-bold mb-4">Ürün Gruplarımız</h1>
              <ul className="grid grid-cols-2 gap-2">
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/masalar">Masa</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/sandalyeler">Sandalye</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/sehpalar">Sehpa</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/dresuarlar">Dresuar</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/aynalar">Ayna</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/konsol-tv-unitesi">Konsol-Tv Ünitesi</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/berjerler">Berjer</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/bench-puf">Bench-Puf</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/separatorler">Separatör</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/aydinlatmalar">Aydınlatma</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/kitaplıklar">Kitaplık</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/aksesuarlar">Aksesuar</Link>
                </li>
                <li className="hover:text-gray-300 transition-colors cursor-pointer">
                  <Link href="/kategoriler/koltuk-takimi">Koltuk Takımı</Link>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-right md:pr-8">
              <h1 className="text-lg font-bold mb-4 text-center md:text-right md:pr-2">Sosyal Medya</h1>
              <div className="flex items-center justify-center md:justify-end space-x-3">
                <Link href="https://www.facebook.com" className="hover:opacity-75">
                  <Image src={facebook} alt="Facebook" width={20} height={20} className="w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com" className="hover:opacity-75">
                  <Image src={instagram} alt="Instagram" width={20} height={20} className="w-5 h-5" />
                </Link>
                <Link href="https://www.pinterest.com" className="hover:opacity-75">
                  <Image src={pinterest} alt="Pinterest" width={20} height={20} className="w-5 h-5" />
                </Link>
                <Link href="https://www.youtube.com" className="hover:opacity-75">
                  <Image src={youtube} alt="YouTube" width={20} height={20} className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}