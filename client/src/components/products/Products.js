import React from 'react'
import { useEffect, useState } from 'react'
import Product from './Product'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/v1/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="products">
      {products.map(({ title, description, image, price, rating }) => (
        <Product
          title={title}
          description={description}
          image={image}
          price={price}
          rating={rating}
        />
      ))}
    </div>
  )
}

export default Products
