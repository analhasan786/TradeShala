import React from 'react';
import { CookiesProvider } from "react-cookie";


// import TopBar from './TopBar';
//  < TopBar />
// import Dashboard from './Dashboard';
import Menu from "./Menu";

function Home() {
    return (
        <CookiesProvider>
            <Menu />

            {/* < TopBar /> */}
            {/* < Dashboard /> */}

        </CookiesProvider>
    );
}

export default Home;
