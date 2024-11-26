import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path="contact" element={<Contact />} />
         <Route path="about" element={<About />} />
         <Route path="*" element={<NoPage />} />
       </Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
