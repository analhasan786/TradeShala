import React from 'react';

function Stats() {
    return ( 
        <div className='container mb-5 mt-5' >
            <div className='row '>
                <div className=' col-12 col-lg-5 mt-5 '>
                    <h2 className='card-heading  mb-5 mt-2  fs-1'>Trust with confidence</h2>
                    <div className='card-mainBox mt-4 '>
                    <h3 className='card-title mb-2  fs-4'>Customer-first always</h3>
                    <p className='card-text text-muted '>That's why 1.6+ crore customers trust TradeSalla with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='card-mainBox mt-4'>
                    <h3 className='card-title mb-2 fs-4'>No spam or gimmicks</h3>
                    <p className='card-text text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div className='card-mainBox mt-4'>
                    <h3 className='card-title mb-2 fs-4'>The TradeSalla universe</h3>
                    <p className='card-text text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='card-mainBox mt-4'>
                    <h3 className='card-title mb-2 fs-4 '>Do better with money</h3>
                    <p className='card-text text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='  col-12 col-lg-7 mt-5  '>
                    <img src='\media\images\ecosystem.png' alt='Ecosystem' style={{width:"92%"}}/>
                    <div className='text-center'>
                    <a href='' className='mx-5 text-decoration-none'>Explore our products<i class="fa-solid fa-arrow-right" style={{marginLeft:"10px", fontSize:"20px"}}></i> </a>
                    <a href='' className='text-decoration-none '>Try Kite demo  <i class="fa-solid fa-arrow-right" style={{marginLeft:"10px", fontSize:"20px"}}></i> </a>
                    </div>
                </div>
            </div>
       
        </div>
     );
}

export default Stats;