import React from 'react';
function Pricing() {
    
    return (
        <div className='container mb-5 mt-5'>
            <div className='row'>
                <div className='col-12 col-lg-6 mb-3 mt-4 '>
                    <h2 className='mb-3 mt-5'>Unbeatable pricing</h2>
                    <p className='text-muted fs-6 '>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>

                <div className='col-12 col-lg-6 mb-3 mt-5'>
                    <div className='row'>
                        <div className='col-4 text-center '>
                            <h1>&#8377;0</h1>
                            <p className='fs-6 '>Free account opening</p>
                        </div>
                        <div className='col-5 text-center  '>
                            <h1>&#8377;0</h1>
                            <p className='p-1 text-muted'>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-3  text-center '>
                            <h1>&#8377;20</h1>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
                    <a href='' className='text-decoration-none'>See pricing <i class="fa-solid fa-arrow-right" style={{marginLeft:"8px", fontSize:"20px"}}></i></a>
            </div>
        </div>
    );
}

export default Pricing;