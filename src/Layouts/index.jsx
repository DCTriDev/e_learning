import React from 'react';
import Navbar from "../Components/Navbar";

function Layout(Component) {
    return (props) => {
        return (
            <div>
                <Navbar/>
                <Component {...props}/>
            </div>
        );
    }
}

export default Layout;