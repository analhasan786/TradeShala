import React from 'react';

function Education() {
    return (
        <div className='container-fluid mt-3'>
            <div className='row mt-5'>
                <div className='col-12 col-lg-6  mb-1 '>
                    <div className='text mb-5'>
                        <h2 className='card-title mb-4 mt-5 fs-4'>Free and open market education</h2>
                        <p className='card-text mb-4 '>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                         <a href='' className='text-decoration-none '>Trading Q&A <i class="fa-solid fa-arrow-right" style={{marginLeft:"8px"}}></i></a>

                    </div>
                    <div className='text mb-5'>
                        <p className='card-text  mb-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='' className='text-decoration-none '>Trading Q&A <i class="fa-solid fa-arrow-right" style={{marginLeft:"8px"}}></i></a>
                    </div>
                </div>
                <div className='col-12 col-lg-6 mb-3'>
                    <img src='./media/images/education.svg' alt='Education' className='m-3 ' />
                </div>
            </div>
        </div>
    );
}

export default Education;