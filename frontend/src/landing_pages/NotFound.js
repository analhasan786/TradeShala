import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container'>
            <div className='row text-center'>
                  <h1 className='mt-5 mb-4'>404 not found</h1>
                  <p className='mb-3' style={{margin:"0 auto" }}>Sorry, the page you're looking for cannot be found Visit our <Link to="/"  >homepage</Link>,  get help, or try searching</p>
            </div>
        </div>
     );
}

export default NotFound;