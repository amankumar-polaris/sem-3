import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {
    const {items} = useSelector((state) => state.product);
    
  return (
    <div className='grid gap-3'>
      {
        items.map(item=>(
            <div className='border'>
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            </div>
        ))
      }
    </div>
  )
}

export default Cart
