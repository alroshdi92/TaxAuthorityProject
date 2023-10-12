

import React from 'react';
import '../../style/dashboard.css';
 

function Footer() {
    return (

        
        <div className="footer-container">
            <p>© {new Date().getFullYear()} 
            Copyright © 2023, Tax Authority</p>
            <p>
       <a href="https://tms.taxoman.gov.om/portal/ar/web/taxportal/privacy-policy">
            Privacy Policy</a></p>
        </div>
    );
}

export default Footer;

