import React from 'react';
import "./ErrorPage.css"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div class="container error-container">
            <div className="text-center border p-5">
                <h1 className='fw-bolder title'>Lost in Space !!</h1>
                <img src="https://i.ibb.co/J3WsKM0/505-error.png" alt="" />
                    <p className='fs-5 w-50 mx-auto mb-3 p-4'>You have reached the edge of the universe.
                    The page you requested could not be found.
                    Don't worry and return to the previous page.</p>
                    <Link to='/' className='explore-btn link-offset-2 link-underline link-underline-opacity-0'>Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;