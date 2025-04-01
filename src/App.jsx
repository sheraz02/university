import { useState } from 'react'
import Logo from './assets/logo.webp';
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from "react-router-dom";
import DesktopMenu from './components/NavBar/DesktopMenu';
import { Menus } from './components/constants/utils';
import Navbar from './components/NavBar/Navbar';
import Economics from './components/departments/Economics';
import NavLinks from './components/NavBar/NavLinks';
import Home from './components/Home/Home';
import Psychology from './components/departments/Psychology';
import MassCommunication from './components/departments/MassCommunication';
import Mathematics from './components/departments/Mathematics';

function Layout() {
  const location = useLocation();
  const fullPageRoutes = ["/economics", "/psychology", "/mass-communication",
    "mathematics",
  ]; // Routes that should render as full pages

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page Route */}
        <Route path="/economics" element={<Economics />} />
        <Route path="/psychology" element={<Psychology />} />
        <Route path="/mass-communication" element={<MassCommunication />} />
        <Route path="/mathematics" element={<Mathematics />} />
      </Routes>
      
    </>
      
  );
}

function App() {
  return (
    
      <Layout />
    
  );
}

export default App;
