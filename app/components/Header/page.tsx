import Image from "next/image";
import Link from "next/link";
import logo from "../../../images/logo.png";
import instagram from "../../../images/instagram.svg";
import facebook from "../../../images/facebook.svg";
import youtube from "../../../images/youtube.svg";
import pinterest from "../../../images/pinterest.svg";
import "./global.css";

export default function Header() {
    return (
      <header className="">
        <nav className=" flex items-center justify-between p-6 lg:p-8" aria-label="Global">
          <div className=" ">
            <Link href="/">
              <Image  className="logo" width={800} height={800} src={logo} alt="logo" />
            </Link>
          </div>
          <div>
            <ul className="">
              <li className="">
                <Link href="/about">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/products">Ürünler</Link>
              </li>
              <li>
                <Link href="/projects">Projeler</Link>
              </li>
              <li>
                <Link href="/contact">İletişim</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com">
                  <Image width={24} height={24} src={instagram} alt="logo" />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com">
                  <Image width={24} height={24} src={facebook} alt="logo" />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com">
                  <Image width={24} height={24} src={youtube} alt="logo" />
                </Link>
              </li>
              <li>
                <Link href="https://www.pinterest.com">
                  <Image width={24} height={24} src={pinterest} alt="logo" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
}