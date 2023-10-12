
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Geo from './pages/Geo';
import RacingBar from './pages/RacingBar';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
    return (
        <Router>
            <Dashboard>

                <Routes>
                  
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/geo" element={<Geo />} />
                    <Route path="/racing" element={<RacingBar />} />
                     <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    
                </Routes>
            </Dashboard>
        </Router>
    );
}

export default App;
