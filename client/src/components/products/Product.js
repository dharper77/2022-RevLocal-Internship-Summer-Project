import React from 'react'

const Product = ({ id, title, description, price, image }) => {
  return <img src={image} alt={description} />
}

export default Product
