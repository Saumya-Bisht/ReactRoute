// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function AddtoCart(props) {
//   const { id } = useParams(); // { id:5}
//   const [state, setState] = useState({
//     id: 0,
//     title: "",
//     description: "",
//     image: "",
//     price: 0,
//     category: "",
//   });
//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setState(data);
//       });
//   }, []);
//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2>{state.category}</h2>
//       <img src={state.image} width={300} height={300} />
//     </div>
//   );
// }

// export default AddtoCart;

import React, { useContext } from 'react'
import './Product.css'
import { myContext } from './Context';

const AddtoCart = () => {
  const{cart,setCart,cartCount,setCartCount}=useContext(myContext);
  const removeCart=(id)=>{
    const remove=cart.filter((ele)=>{
      return ele.id !==id
    })
    setCart(remove)
    setCartCount(cartCount-1)
  }
  return (
   <>
     <div className='container'>
      {cart.lenght>0 ? <h1>Data not Fetch</h1> 
      :
      cart.map((ele) => {
        return<div key={ele.id} className="cardStyle">
          <img width="200" height="200"  src={ele.image} alt="product image" />
          <h3>{ele.category}</h3>
          <p>Price: {ele.price} $</p>
          <button className='cartbutton' onClick={()=>{
            removeCart(ele.id)
          }} >Remove Product</button>
        </div>
        
      })
    }
    
    </div>
   </>
  )
}

export default AddtoCart