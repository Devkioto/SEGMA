import "./App.css";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Auctions from "./pages/Auctions";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/Auctions" element={<Auctions />} />
        {/* <Route path="/catalogue" element={<Catalogue/>} /> */}
        {/* <Route path="/about_us" element={<AboutUs/>} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
