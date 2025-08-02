import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccounts from '../OpenAccounts';
// import Navbar from '../Navbar';
// import Nav from '../nav';
// import Footer from '../Footer';

function HomePage() {
    return ( 
        <div>
            {/* <Nav/> */}
            {/* <Navbar/> */}
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccounts/>
            {/* <Footer/> */}
        </div>
     );
}

export default HomePage;