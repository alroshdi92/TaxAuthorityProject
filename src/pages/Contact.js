import React from 'react';
import './Contact.css';

function ContactUs() {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-details">
                <div>
                    <i className="fas"></i>
                    📞 <span>Phone:</span>  +(968) 24746996
                </div>
                <div>
                    <i className="fas"></i>
                
                    ✉️ <span>Email:</span> info@taxoman.gov.om
                </div>
                <div>
                    <i className="fas"></i>
                    📍 <span>Location:</span>Mawaleh South, Seeb
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
