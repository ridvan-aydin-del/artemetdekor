import React from "react";
import "./global.css";
import Link from "next/link";
import Image from "next/image";
import { masaImages } from "@/images/images";

const MasaDetail = ({ params }: { params: { id: string } }) => {
  const masaId = parseInt(params.id); // ID'yi sayıya çevirme
  const selectedImage = masaImages[masaId - 1];
  return (
    <div className="product-detail-page">
      {selectedImage ? (
        <div className="product-card">
          <div className="product-image-container">
            <Image
              width={400}
              height={400}
              src={selectedImage}
              alt={`Masa ${masaId}`}
            />
          </div>
          <h2>Masa {masaId}</h2>
        </div>
      ) : (
        <p>Bu masa bulunamadı.</p>
      )}
    </div>
  );
};

export default MasaDetail;
