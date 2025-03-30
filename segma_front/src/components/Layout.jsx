import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({children}) {
    return (
    <div className="grid grid-cols-8 grid-rows-5 gap-4">
        <Header />
        <main className="col-span-8 row-span-3 row-start-2"> {children} </main>
        <Footer />
    </div>
    );
}

export default Layout;