import React from 'react'

import "./global.css";
import Link from "next/link";
import Image from "next/image";
import { sehpaImages } from "../../../images/images";

const Sehpa = () => {
    return (
      <div className="product-list">
        {sehpaImages.map((image, index) => (
          <Link
            href={`/products/sehpa/${index + 1}`}
            className="product-item"
            key={index}
          >
            <div className="product-image">
              <Image
                src={image}
                className="product-image-image"
                alt={`Sehpa ${index + 1}`}
              />
            </div>
  
            <div className="product-item-div text-align-center">
                Sehpa {index + 1}
            </div>
          </Link>
        ))}
      </div>
    );
  };
  

export default Sehpa
