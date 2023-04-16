import React, { useContext } from 'react'
import './Product.css'
import { myContext } from './Context'

const Product = () => {
  const{product,cart,setCart,cartCount,setCartCount}=useContext(myContext)

  const addProduct=(ele)=>{
    cart.push(ele)
    // console.log(cart);
    setCartCount(cartCount+1)
  }

  return (
    <>
    <div className='container'>
      {product.lenght>0 ? <h1>Data not Fetch</h1> 
      :
      product.map((ele)=>{
        return<div key={ele.id} className="cardStyle">
          <img width="200" height="200" src={ele.image} alt="product image" />
          <h3>{ele.category}</h3>
          <p className='price'>{ele.price} $</p>
          
          <button className='cartbutton' onClick={()=>{
            addProduct(ele)
          }}>Add to Cart</button>
        </div>
        
      })
    }
    
    </div>
    </>
  )
}

export default Product