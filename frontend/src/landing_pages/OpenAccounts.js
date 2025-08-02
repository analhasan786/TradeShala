import React from 'react';

function OpenAccount() {
    return (
        <div className='container'>
            <div className='row text-center'>

             {/* <img src='/media/images/homeHero.png' alt='heroHome' className='mt-3'/> */}
                  <h1 className='mt-5 mb-4'>Invest in everything</h1>
                  <p className='mb-3' style={{margin:"0 auto" }}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                  <button className='btn  btn-primary btn-md  fs-6 mt-3 mb-5'  style={{margin:"0 auto",width:"210px" }}>Sign up for free</button>
            </div>
        </div> 
     );
}

export default OpenAccount;