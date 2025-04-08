import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] font-family-['--site-font'] bg-[#F9FAFB]">
      <Header />
      <main className="overflow-auto">{children}</main>
      <Footer />   
    </div>
  );
}

export default Layout;
