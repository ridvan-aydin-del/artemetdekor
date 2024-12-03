import "./global.css";

export default function Footer() {
    return (
      <div className="footer-clean">
        <footer className="flex items-center justify-between p-6 lg:p-8">
          <div className="footer-div">
          <ul>
            <h1>Kurumsal</h1>
            <li>Hakkımızda</li>
          </ul>
          <ul>
            <h1>Ürün Gruplarımız</h1>
            <li>Masa</li>
            <li>Sandalye</li>
            <li>Sehpa</li>
            <li>Dresuar</li>
            <li>Ayna</li>
            <li>Konsol-Tv Ünitesi</li>
            <li>Berjer</li>
            <li>Bench-Puf</li>
            <li>Seperatör</li>
            <li>Aydınlatma</li>
            <li>Kitaplık</li>
            <li>Aksesuar</li>
            <li>Koltuk Takımı</li>
            <li>Yemek Odası</li>
            <li>Yatak Odası</li>
          </ul>
          <ul>
            <h1>İletişim Bilgisi</h1>
            <li>Telefon : +90 (530) 554 39 24</li>
            <li>Telefon : +90 (534) 871 58 03</li>
            <li>E-Posta: info@artemetdekor.com</li>
            <li>Adres: Nato Yolu Cad. Kerem Sk. Ümraniye/İstanbul</li>
          </ul>
          </div>
        </footer>
      </div>
    );
}