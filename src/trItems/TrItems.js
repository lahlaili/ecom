import React from 'react'
import './TrItems.css'
import { Products_list } from './Data'
import Product from './Product/Product'
function TrItems() {
  return (
    <div className='tritem-container'>
        <h2>trendy item</h2>
        <div className='product-data-container'>

        {
            Products_list.map(e => 
                <Product key={e.id} name={e.name} prix={e.prix} src={e.src} />
            )
        }
        </div>
        <button>more ...</button>
    </div>
  )
}

export default TrItems