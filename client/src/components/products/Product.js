import React from 'react'
import '../../style/products.css'

const Product = ({ id, title, description, image, price, rating }) => {
  return <img className="product-preview" key={id} src={image} alt={title} />
}

export default Product
