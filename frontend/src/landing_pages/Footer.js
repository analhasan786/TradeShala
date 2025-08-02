import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className='bg-light border-top mt-5'>

        <div className='container    '>
            <div className='row between main-footer text-14 mb-5'>
                <div className='col-12 col-lg-3 '>
                        <div className='footer-log  mt-5'>
                            <img style={{ width: '150px' }} src='media/images/TD1.png ' alt='Company logo' className='mb-3' />
                        </div>

                        <p className='copy mb-1'>© 2010 - 2025, TradeSalla Broking Ltd. </p> 
                        <p className='copy mb-3'>All rights reserved.</p> 
                        
                        <ul className='media_btn mb-5'> 
                            <li className='media-item'><a href='/'><i class="fa-brands fa-linkedin"></i></a></li>
                            <li className='media-item'><a href='/'><i class="fa-brands fa-facebook"></i></a></li>
                            <li className='media-item'><a href='/'><i class="fa-brands fa-facebook"></i></a></li>
                            <li className='media-item'><a href='/'><i class="fa-brands fa-square-x-twitter"></i></a></li>
                        </ul>

                    
                </div>
                <div className='col-12 col-lg-9'>
                    <div className='row link mt-5'>
                        <div className='col-12 col-lg-3 mb-5'>
                            <ul>
                                <section className='mb-3'><h5>Account</h5></section>
                                <li className='mb-3'><a href='/'>Open demat account</a></li>
                                <li className='mb-3'><a href='/'>Minor demat account</a></li>
                                <li className='mb-3'><a href='/'>NRI demat account</a></li>
                                <li className='mb-3'><a href='/'>Commodity</a></li>
                                <li className='mb-3'><a href='/'>Dematerialisation</a></li>
                                <li className='mb-3'><a href='/'>Fund transfer</a></li>
                                <li className='mb-3'><a href='/'>MTF</a></li>
                                <li className='mb-3'><a href='/'>Referral program</a></li>
                            </ul>
                        </div>
                        <div className='col-122 col-lg-3 mb-5'>
                            <ul>
                                <section className='mb-3'><h5>Support</h5></section>
                               <li className='mb-3'><a href='/'>Contact us</a></li>
                               <li className='mb-3'><a href='/'>Support portal</a></li>
                               <li className='mb-3'><a href='/'>Bulletin</a></li>
                               <li className='mb-3'><a href='/'>Circular</a></li>
                               <li className='mb-3'><a href='/'>Z-Connect blog</a></li>
                               <li className='mb-3'><a href='/'>Downloads</a></li>
                            </ul>
                        </div>
                        <div className='col-12 col-lg-3 mb-5'>
                            <ul>
                                <section className='mb-3'><h5>Company</h5></section>
                                <li className='mb-3'><a href='/'>About</a></li>
                                <li className='mb-3'><a href='/'>Philosophy</a></li>
                                <li className='mb-3'><a href='/'>Press & media</a></li> 
                                <li className='mb-3'><a href='/'>Careers</a></li>
                                <li className='mb-3'><a href='/'>TradeSalla Cares (CSR)</a></li> 
                                <li className='mb-3'><a href='/'>TradeSalla .tech</a></li>
                                <li className='mb-3'><a href='/'>Open source</a></li> 
                            </ul>
                        </div>
                        <div className='col-12 col-lg-3 mb-5'>
                            <ul>
                                <section className='mb-3'><h5>Quick links</h5></section>
                               <li className='mb-3'><a href='/'>Upcoming IPOs</a></li>
                               <li className='mb-3'><a href='/'>Brokerage charges</a></li>
                               <li className='mb-3'><a href='/'>Market holidays</a></li>
                               <li className='mb-3'><a href='/'>Economic calendar</a></li>
                               <li className='mb-3'><a href='/'>Calculators</a></li>
                               <li className='mb-3'><a href='/'>Markets</a></li>
                               <li className='mb-3'><a href='/'>Sectors</a></li>
 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </footer>

    );
}

export default Footer;
