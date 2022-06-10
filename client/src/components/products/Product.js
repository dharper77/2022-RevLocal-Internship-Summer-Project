import React from 'react'
import '../../style/products.css'

const Product = ({ id, title, description, image, price, rating }) => {
  return (
    <div className="product-listing">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <h3>${price}</h3>
      </div>
    </div>
  )
}

export default Product
