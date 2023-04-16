// import { createContext, useState } from "react";
//        export const myContext=createContext()

// function CustomProvider({children}){
//     const [isloggedin, setIsLoggedIn] = useState(true);
    
//     return <myContext.Provider  value={{ isloggedin, setIsLoggedIn}}>
//         {children}
//     </myContext.Provider>
// }
// export default CustomProvider


import { createContext, useEffect, useState } from "react";

 export const myContext =createContext();

function CustomProvider({children}){
    const [product,setProduct]=useState([]);
    const[cart,setCart]=useState([])
    const [cartCount,setCartCount]=useState(0);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data)=>{
          setProduct(data);
        })

    },[])
    return <myContext.Provider value={{product,cart,setCart,cartCount,setCartCount}}>
        {children}
    </myContext.Provider>
}
export  default  CustomProvider;