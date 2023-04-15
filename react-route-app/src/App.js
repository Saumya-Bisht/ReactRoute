import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import { useContext } from 'react';
import { myContext } from './components/Context';
import {Route,Routes} from 'react-router-dom'
import Profile from './components/Profile';
import Products from './components/Products';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';
import PageNotFound from './components/PageNotFound';
import AddtoCart from './components/AddtoCart';

// ---redux counter app---
import Counter from './components/reduxcounter/Counter';


function App() {
  // const {isloggedin}=useContext(myContext)
  return (
    <div className="App">
     {/* <h1>hiiii</h1> */}
     {/* <Nav/> */}
     {/* {
      isloggedin ? <div><Nav/><Home/></div> : <Login/>
     } */}

     {/* <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/support" element={<Contact/>}/>
      <Route path="/productdetails/:id" element={<ProductDetails/>}/>
      <Route path="/cart/:id" element={<AddtoCart/>}/>
      <Route path="*" element={<PageNotFound/>}/>
     </Routes> */}
     <Counter/>
     {/* <h1>hiiii</h1> */}
      
    </div>
  );
}

export default App;
