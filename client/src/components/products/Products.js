import React from 'react'
import Product from './Product'

const Products = () => {
  let productArray = []
  fetch('/api/v1/products')
    .then(data => data.json())
    .then(out => console.log(out))
    .catch(err => console.log(err))

  return (
    <div className="products">
      {productArray.map((key, val) => {
        return (
          <Product
            id={val.id}
            title={val.title}
            description={val.description}
            price={val.price}
            image={val.image}
          />
        )
      })}
    </div>
  )
}

export default Products
