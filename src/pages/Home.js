import React from 'react';
import '../style/dashboard.css';
import Footer from '../components/Dashboard/Footer';

export default function Home() {
    return (
        <div className='home'>
            
            <h1>Welcome to the TAX Data Analysis Website</h1>
            <h4>
                The TAX Data Analysis Website is an advanced platform designed for in-depth global financial and tax analysis. It features a detailed world map that zooms into the Arabian Gulf and South America, offering metrics like Population, GDP, Imports, Exports, Tourism, and Agriculture.
                
                The site also showcases a bar racing chart depicting profit trends of global companies over the years. Developed using React and integrated with databases, the site promises real-time data accuracy.
                
                Future updates include incorporating tax data from the Sultanate of Oman and financial details of Omani companies. The platform is a product of skilled professionals, as detailed in the "About Us" section.
            </h4>
            <Footer />
        </div>
    );
}
