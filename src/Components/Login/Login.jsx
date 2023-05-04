import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        login(email, password)
        .then((result) => {
            form.reset();
            navigate(from, {replace : true});
        }).catch((err) => {
            toast.error("Invalid Email or Password");
        })
    }
    return (
        <div className="form-container container">
            <ToastContainer />
            <form onSubmit={handleLogin} className="form-control">
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