import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
// import Footer from 

const Layout = () => {
    return (
        <div>
            <main>
            <Navigation />
                
                <Outlet />
                
            </main>
        </div>
    )
}

export default Layout;