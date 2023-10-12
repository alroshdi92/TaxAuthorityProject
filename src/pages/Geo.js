
import React, { useState } from 'react';
import data from '../components/Dashboard/GeoChart.world.geo.json';
import GeoChart from '../components/Dashboard/GeoChart';
//import '../App.css';

function Geo() {
    const [property, setProperty] = useState("pop_est");
    
    
      return (
        

        <React.Fragment>
    
       
        <div>
        <h1>World Map</h1>
        <h2>All Gulf countries and South America have been activated</h2>
          <h2> Select property to highlight , 
          <select
    
    style={{ color: 'white', backgroundColor: 'black' }}
    value={property}
    onChange={event => setProperty(event.target.value)}
          >
            <option value="pop_est"> Population</option>
            <option value="gdp_md_est"> GDP</option>
            <option value="tour"> Tourism</option>
            <option value="imp"> Import</option>
            <option value="exp"> Export</option>
            <option value="cult"> Agriculture</option>
          </select>
          </h2>
         
          <GeoChart data={data} property={property} />
       
   
          </div>
        </React.Fragment>
        
      );
    }

export default Geo;

