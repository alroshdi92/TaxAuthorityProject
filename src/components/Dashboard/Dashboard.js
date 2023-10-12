import React from 'react';
import { Link , useLocation } from 'react-router-dom';
import logo from '../../style/11.jpg';
import Slider from './Slider';
//import Footer from './Footer';


function Dashboard({ children }) {
 const location = useLocation(); 
    return (
        <div className="dashboard-container">
      <nav> 
            <div className="logo-container">
                <img src={logo} alt="Company Logo" className="logo" />
            </div>
            <div className="content-wrap">
                <ul>
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/geo">Geo Chart</Link></li>
                    <li><Link to="/racing">Racing Bar Chart</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    
                </ul>
               
                
                   </div>

                   <div>
        {location.pathname === "/" && <Slider />} 
                   </div>
        </nav>
       
     
<div className="content-container">
                {children}
                
            </div>
           
            </div>
            
    );
}

export default Dashboard;
