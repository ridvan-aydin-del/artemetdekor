import React from "react";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import "./global.css";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <h1 className="baslik">Ürünlerimiz</h1>
      <ul className="ul-products">
        <li>
          <Link href="/products/masa" className="link-baslik">
            Masa
          </Link>
        </li>
        <li>
          <Link href="/sandalye" className="link-baslik">
            Sandalye
          </Link>
        </li>
        <li>
          <Link href="/sehpa" className="link-baslik">
            Sehpa
          </Link>
        </li>
        <li>
          <Link href="/dresuar" className="link-baslik">
            Dresuar
          </Link>
        </li>
        <li>
          <Link href="/ayna" className="link-baslik">
            Ayna
          </Link>
        </li>
        <li>
          <Link href="/konsol-tv-unitesi" className="link-baslik">
            Konsol-Tv Ünitesi
          </Link>
        </li>
        <li>
          <Link href="/berjer" className="link-baslik">
            Berjer
          </Link>
        </li>
        <li>
          <Link href="/bench-puf" className="link-baslik">
            Bench-Puf
          </Link>
        </li>
        <li>
          <Link href="/seperatoer" className="link-baslik">
            Seperatör
          </Link>
        </li>
        <li>
          <Link href="/aydinlatma" className="link-baslik">
            Aydınlatma
          </Link>
        </li>
        <li>
          <Link href="/kitaplik" className="link-baslik">
            Kitaplık
          </Link>
        </li>
        <li>
          <Link href="/aksesuar" className="link-baslik">
            Aksesuar
          </Link>
        </li>
        <li>
          <Link href="/koltuk-takimi" className="link-baslik">
            Koltuk Takımı
          </Link>
        </li>
        <li>
          <Link href="/yemek-odasi" className="link-baslik">
            Yemek Odası
          </Link>
        </li>
        <li>
          <Link href="/yatak-odasi" className="link-baslik">
            Yatak Odası
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
