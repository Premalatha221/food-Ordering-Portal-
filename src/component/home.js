import React from "react";
import './home.css';
import image from './hello.jpg';
import DrawerAppBar from "./navbar";
import { Outlet } from "react-router-dom";
// import Footer from "./footer";

import MultiActionAreaCard from "./Category";
import Footer from "./footer";
import HomePage from "./Homepage";
import FunnyFoodQuotes from "./homequotes";




const Home = () =>{
  return(
    
    <div>
     
    
     <img  src={image} width={1500} height={500} />
     
      <DrawerAppBar/> 
     
     
      <HomePage/>
      <MultiActionAreaCard/>

     <FunnyFoodQuotes/>
      
      {/* <Footer/> */}
      <Outlet/>
      
    
    </div>
  )
}
export default Home;