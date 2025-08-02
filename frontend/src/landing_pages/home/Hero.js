import React from 'react';

function Hero() {
    return ( 
        <div className='container '>
            <div className='row text-center'>
                  <img src='/media/images/homeHero.png' alt='heroHome' className='mt-3'/>
                  <h1 className='mt-5'>Invest in everything</h1>
                  <p  style={{margin:"0 auto" }}>Online platform to investnin stocks, derivatives, mutual funds, and more</p>
                  <button className='btn  btn-primary btn-lg w-25 fs-6 mt-3'  style={{margin:"0 auto" }}>Signup Now</button>
            </div>
        </div>
    );
}

export default Hero;