import React, { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import { Nav } from "./Components/Nav";
import Property from "./Screens/Property";
import PropertyInfo from "./Screens/PropertyInfo";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import { hourglass } from "ldrs";
import { Foot } from "./Components/Footer";
import PropertyLocation from "./Screens/PropertyLocation";

// Register the loader
hourglass.register();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <l-hourglass size="100" speed="1" color="orange"></l-hourglass>
      </div>
    );
  }

  return (
    <div className="font-Poppins">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/properties-list/:slug/:slug1" element={<Property />} />
        <Route path="/properties-list/:slug" element={<Property />} />
        <Route path="/property/:slug" element={<PropertyInfo />} />
        <Route path="/property-location/:slug" element={<PropertyLocation />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
