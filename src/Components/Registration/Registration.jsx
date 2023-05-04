import React, { useState } from 'react';
import './Registration.css'
import { Link } from 'react-router-dom';

const Registration = () => {
    const [status, SetStatus] = useState(false);
    const handleStatus = () => SetStatus(!status)
    return (
        <div className="form-container container">
            <form className="form-control">
                <div className="form-group text-center">
                    <img src="https://i.ibb.co/PQWTxH6/User.png" className="w-25" alt="" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="name">Your Full Name</label>
                    <input type="text" className="form-control" name="name" id="name" required/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" name="img" id="img" required/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" required/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password">Your Authentication Password</label>
                    <input type="password" className="form-control" name="password" id="password" required/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password">Confirm Your Authentication Password</label>
                    <input type="password" className="form-control" name="confirm-password" id="confirm-password" required/>
                </div>
                <div onClick={handleStatus} className="col-12 my-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">
                        Terms & Condition
                    </label>
                    </div>
                </div>
                <div className="form-group my-3">
                    {
                        status? 
                        <button type="submit" className='explore-btn form-control'>Register</button>
                        :<button type="submit" className='explore-btn form-control' disabled>Register</button>
                    }
                </div>
            </form>
            <p className='text-center my-3'>OR</p>
            <hr />                
            <div className="form-group my-3">
                {
                    status? 
                    <>
                        <div className="d-flex justify-content-around mb-3">
                            <button className="signInbtn">Register With Google</button>
                            <button className="signInbtn">Register With GitHub</button>
                        </div>
                    </>
                        
                    :   
                    <>
                        <div className="d-flex justify-content-around mb-3">
                            <button className="signInbtn" disabled>Register With Google</button>
                            <button className="signInbtn" disabled>Register With GitHub</button>
                        </div>
                    </>
                }
            </div>
            <div className="form-group my-2">
                <p className="">Already Registered? <Link to="/login">Login Here</Link> </p>
            </div>
        </div>
    );
};

export default Registration;