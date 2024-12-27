import React from "react";
import "./global.css";
import Link from "next/link";
import Image from "next/image";

import { masaImages } from "../../../images/images";

const Masa = () => {
  return (
    <div className="product-list">
      {masaImages.map((image, index) => (
        <Link
          href={`/products/masa/${index + 1}`}
          className="product-item"
          key={index}
        >
          <div className="product-image">
            <Image
              src={image}
              className="product-image-image"
              alt={`Masa ${index + 1}`}
            />
          </div>

          <div className="product-item-div text-align-center">
            Masa {index + 1}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Masa;
