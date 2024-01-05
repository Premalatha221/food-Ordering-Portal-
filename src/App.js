import logo from './logo.svg';
import React from 'react'
 import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Home from './component/home';
import DrawerAppBar from './component/navbar';
import AboutPage from './component/about';
import HelpPage from './component/Help';
import ContactPage from './component/contact';
import Category from './component/list';
import Footer from './component/footer';
import Login from './component/Login';
import Register from './component/Register';







 const App = () => {
return (
<div className="app">
          
      <Router> 
        
           {/* <nav className='navi'>
              <ul className='Hello'>
                <li className='active'>
           <Link  style={{ textDecoration: 'none' ,color:'white'}}to="/">HOME</Link>
           </li>
            <li className='actives'>
              <Link  style={{textDecoration: 'none ', color:'white'}}to="/Login" >LOGIN</Link>
               </li>
            <li className='activess'>
              <Link  style={{ textDecoration: 'none',color:'white'}}to="/Register">REGISTER</Link>
              </li>
              </ul>
              </nav> */}
               <Routes>
                 /* <Route exact path="/" element={ <Home />}/>
                 {/* //adding / */}
                  {/* <Route path='category' element={<Category/>}/>
                 </Route> */}

                    <Route exact path="/login" element={<Login/>} />
                    <Route  exact path="/register" element={ <Register/>} />
                    <Route  exact path="/list" element={ <Category/>} />
                    <Route  exact path="/about" element={ <AboutPage/>} />
                    <Route  exact path="/help" element={ <HelpPage/>} />
                     <Route  exact path="/contact" element={ <ContactPage/>} /> 

                     </Routes>
                 <Footer/> 
          
            </Router>  
            
          
         </div>
    )
  }
  
 export default App;

