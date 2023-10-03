import React from 'react'
import './Product.css'
function Product(props) {
  return (
    <div className='p-container'>
        <img alt='' src={props.src} />
        <h2>{props.name}</h2>
        <h3>prix : {props.prix}.00$</h3>
    </div>
  )
}

export default Product