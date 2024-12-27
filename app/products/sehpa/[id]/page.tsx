import React from 'react'
import "./global.css";
import Image from "next/image";
import { sehpaImages } from "@/images/images";
const SehpaDetail = ({ params }: { params: { id: string } }) => {
    const sehpaId = parseInt(params.id); // ID'yi sayıya çevirme
    const selectedImage = sehpaImages[sehpaId - 1];
    return (
      <div className="product-detail-page">
        {selectedImage ? (
          <div className="product-card">
            <div className="product-image-container">
              <Image
                width={400}
                height={400}
                src={selectedImage}
                alt={`Sehpa ${sehpaId}`}
              />
            </div>
            <h2>Sehpa {sehpaId}</h2>
          </div>
        ) : (
          <p>Bu sehpa bulunamadı.</p>
        )}
      </div>
    );
  };

export default SehpaDetail
