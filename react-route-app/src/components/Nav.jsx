import {useContext} from 'react';
import { myContext } from './Context';
import './Nav.css'
import {Link} from 'react-router-dom'



function Nav(props) {
    const {setIsLoggedIn,setUser,user}=useContext(myContext);
  return (
    <div className="nav">
      <div id="title">
        <h2>React Context</h2>
      </div>
      <div id="menu">
        <Link to="/">Home</Link>
        {/* <Link to="/profile">Profile</Link> */}
        {/* <Link to="/products">Products</Link> */}
        <Link to="/product">Products</Link>
        {/* <Link to="/support">ContactUs</Link> */}
        <Link to="/cart">Cart</Link>
        <button style={{color:"white",backgroundColor:"green",border:"0",height:"25px",width:"100px",cursor:"pointer"}} onClick={()=>{
            setIsLoggedIn(false)
        }}>
          Logout
        </button>
        <span  style={{ marginLeft: "30px", color: "yellow", fontSize: "22px" }}>
        <b>{user.name}</b> 
        </span>
      </div>
    </div>
  );
}

export default Nav;