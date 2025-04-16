import "./App.css";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Auctions from "./pages/Auctions";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScroolToTop";
import Model from "./pages/Model";
import WebgiViewer from "./components/WebgiViewer";
import Lenis from "@studio-freight/lenis";
function App() {
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/Auctions" element={<Auctions />} />
        <Route path="/model" element={<Model/>} />
        {/* <Route path="/catalogue" element={<Catalogue/>} /> */}
        {/* <Route path="/about_us" element={<AboutUs/>} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
