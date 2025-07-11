import React from 'react'
import './ProductCard.css';
function ProductCard(props) {
  return (
    <>
      <div className='card'>
        <img src={props.product.image} alt="" height={100} width={100} />
        <h3>{props.product.title}</h3>
        <p>$ {props.product.price}</p>
      </div>
    </>
  )
}

export default ProductCard