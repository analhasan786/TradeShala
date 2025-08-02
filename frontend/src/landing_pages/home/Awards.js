import React from 'react';

function Awards() {
  return (
    <div className='container mt-3'>
      <div className='row mt-5'>
        <div className='col-12 col-lg-6 mb-3'>
          <img src='/media/images/largestBroker.svg' alt='Largest broker' className='m-3' />
        </div>
        <div className='card col-12 col-lg-6 border-0 '>
          <h1 className='card-title text-center'>Largest stock broker in India</h1>
          <p className='card-text text-center mt-4'>2+ milions TradeSalla clients contribute to over 15% of all retail order valumes in India daily by trading and investing in </p>
          <div className='unOrder-list d-flex justify-content-around mt-4'>
            <div className='list'>
              <ul className='list_items'>
                <li><p>Future and Options</p></li>
                <li><p>Stocks and IPOs</p></li>
                <li><p>Commodity derivatives</p></li>
              </ul>
            </div>
            <div className='list'>
              <ul>
                <li> <p>Direct Mutual Funds</p></li>
                <li><p>Currently derivatives</p></li>
                <li><p>Bonds and Get</p></li>
              </ul>
            </div>
          </div>
            <img src='/media/images/pressLogos.png' alt='pressLogos' className='m-3' />
        </div>
      </div>
    </div>
  );
}

export default Awards;