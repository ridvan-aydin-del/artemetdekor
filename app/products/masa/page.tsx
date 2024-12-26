import React from 'react'
import './global.css'
import Link from 'next/link'

//photos
import Masaa1 from '../../../images/masa/masa-1.jpg'
import Masa2 from '../../images/products/masa/2.jpg'
import Masa3 from '../../images/products/masa/3.jpg'
import Masa4 from '../../images/products/masa/4.jpg'
import Masa5 from '../../images/products/masa/5.jpg'
import Masa6 from '../../images/products/masa/6.jpg'
import Masa7 from '../../images/products/masa/7.jpg'
import Masa8 from '../../images/products/masa/8.jpg'
import Masa9 from '../../images/products/masa/9.jpg'
import Masa10 from '../../images/products/masa/10.jpg'
import Masa11 from '../../images/products/masa/11.jpg'
import Masa12 from '../../images/products/masa/12.jpg'



const Masa = () => {
  return (
    <div className='product-list'>
         <img src={`${Masaa1}`}  />
        {Array.from({ length: 20 }, (_, index) => (
            <Link href={`/products/masa/${index+1}`} className='product-item' key={index}>
            <div key={index} className='product-image'>
                <img src={`${Masaa1}`} alt={`Masa ${index + 1}`} />
                
            </div>
            <div key={index} className='product-item-div'>Masa {index + 1}</div>
            </Link>
        ))}
    </div>
  )
}

export default Masa
