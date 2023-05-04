import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="form-container container">
            <form className="form-control">
                <div className="form-group text-center">
                    <img src="https://i.ibb.co/PQWTxH6/User.png" className="w-25" alt="" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" required/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password">Your Authentication Password</label>
                    <input type="password" className="form-control" name="password" id="password" required/>
                </div>
                <div className="form-group my-3">
                    <button type="submit" className='explore-btn form-control'>Login</button>
                </div>
            </form>
            <p className='text-center my-3'>OR</p>
            <hr />
            <div className="d-flex justify-content-around">
                <button className="signInbtn">Sign In With Google</button>
                <button className="signInbtn">Sign In With GitHub</button>
            </div>
            <div className="form-group my-2">
                <p className="">Not Registered Yet? <Link to="/registration">Register Here</Link> </p>
            </div>
        </div>
    );
};

export default Login;