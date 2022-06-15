import React from 'react'
import '../../style/products.css'

const Product = ({ id, title, description, image, price, rating }) => {
  return (
    <div className="product-listing">
      <img className="product-listing-image" src={image} alt={title} />
      <div>
        <h3 className="product-title">
          {title.length > 40 && `${title.substring(0, 40)}...`}
        </h3>
        <h3 className="price">${price}</h3>
      </div>
    </div>
  )
}

export default Product
