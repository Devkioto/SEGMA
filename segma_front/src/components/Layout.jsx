import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] font-family-['--site-font']">
      <Header />
      <main className="">{children}</main>
      <Footer />   
    </div>
  );
}

export default Layout;
