// import {useState} from 'react'
// import myStore from './Store'
import { increment,decrement,reset } from './act'
import { useSelector, useDispatch } from "react-redux";
var style={
    backgroundColor:"green",
    color:"white",
    width:"150px",
    height:"25px",
    fontSize:"medium",
    border:"0",
    cursor:"pointer"
}
    

function Counter() {
    const counter = useSelector((storedata) => storedata);
    console.log(counter)
 
  const dispatch = useDispatch();
    


  return (
    <div style={{display:"flex",alignItems:"center",flexDirection:"column"}} >
        <h1>Redux's Counter app</h1>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"12px 2px 20px 0px black",width:"50%",margin:"10% auto",padding:"40px"}}>
        <div><h1>{counter}</h1></div>
        <div style={{display:"flex",justifyContent:"space-evenly",width:"80%"}}>
            <button  onClick={() => dispatch(increment())}  style={style}>Increase Count</button>
            <button   onClick={() => dispatch(decrement())} style={style}>Decrease Count</button>
            <button onClick={() => dispatch(reset())} style={style} >Reset</button>
        </div>
        </div>
    </div>
  )
}

export default Counter