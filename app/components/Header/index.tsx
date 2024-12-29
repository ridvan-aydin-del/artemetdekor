import Link from "next/link";
import Image from "next/image";
import logo from "@images/header/logo.png";
import instagram from "@images/header/instagram.svg";
import facebook from "@images/header/facebook.svg";
import youtube from "@images/header/youtube.svg";
import pinterest from "@images/header/pinterest.svg";
import "./styles.css";

export default function Header() {
    return (
        <header className="bg-black text-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between py-2 md:py-4">
                    <div className="mb-2 md:mb-0">
                      <Link href="/">
                        <Image
                            src={logo}
                            alt="Artem E-Dekor Logo"
                            width={200}
                            height={80}
                            className="w-[150px] md:w-[200px] h-auto"
                        />
                      </Link>  
                    </div>

                    <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base">
                        <Link href="/" className="text-white hover:text-gray-300">Ana Sayfa</Link>
                        <Link href="/about" className="text-white hover:text-gray-300">Hakkımızda</Link>
                        <Link href="/kategoriler" className="text-white hover:text-gray-300">Ürünlerimiz</Link>
                        <Link href="/contact" className="text-white hover:text-gray-300">İletişim</Link>
                    </nav>

                    <div className="flex items-center space-x-3 md:space-x-4 mt-2 md:mt-0">
                        <Link href="https://www.facebook.com" className="hover:opacity-75">
                            <Image src={facebook} alt="Facebook" width={20} height={20} className="w-5 md:w-6 h-auto " />
                        </Link>
                        <Link href="https://www.instagram.com" className="hover:opacity-75">
                            <Image src={instagram} alt="Instagram" width={20} height={20} className="w-5 md:w-6 h-auto " />
                        </Link>
                        <Link href="https://www.pinterest.com" className="hover:opacity-75">
                            <Image src={pinterest} alt="Pinterest" width={20} height={20} className="w-5 md:w-6 h-auto " />
                        </Link>
                        <Link href="https://www.youtube.com" className="hover:opacity-75">
                            <Image src={youtube} alt="YouTube" width={20} height={20} className="w-5 md:w-6 h-auto" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}