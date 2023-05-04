import React, { useContext, useState } from 'react';
import './Registration.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';
import { useNavigate, useLocation } from "react-router-dom";

const Registration = () => {
    const [status, SetStatus] = useState(false);
    const navigate = useNavigate();
    const {register,signInWithGoogle,signInWithGithub} = useContext(AuthContext);
    const handleStatus = () => SetStatus(!status);
    const handleReg = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        if(password != confirm_password){
            return toast.error("Password and Confirm Password must be the same");
        } 
        if(password.length < 6){  
            return toast.error("Password must be at least 6 characters");
        }
        register(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            updateProfile(loggedUser, {
                displayName: name,
                photoURL : img
            }).then(() =>{
                console.log("Profile updated successfully");
                navigate('/');
            }).catch(err =>{
                console.log("Error updating profile");
            })

        })
        .catch(error =>{
            toast.error(error.message);
        })
    }
    const googleSignUp = () => {
        signInWithGoogle()
        .then(result =>{
            navigate('/');
        })
        .catch(err =>{
            console.log("Error signing google - " , err.message);
        })
    }
    const githubSignUp = () => {
        signInWithGithub()
        .then(result =>{
            navigate('/');
        })
        .catch(err =>{
            console.log("Error signing github - " , err.message);
        })
    }
    return (
        <div className="form-container container">
            <ToastContainer />
            <form onSubmit={handleReg} className="form-control">
                <div className="form-group text-center">
                    <img src="https://i.ibb.co/PQWTxH6/User.png" className="w-25" alt="" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="name">Your Full Name</label>
                    <input type="text" className="form-control" name="name"  />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" name="img"  />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" className="form-control" name="email"  required/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password">Your Authentication Password</label>
                    <input type="password" className="form-control" name="password"  required/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="password">Confirm Your Authentication Password</label>
                    <input type="password" className="form-control" name="confirm_password" required/>
                </div>
                <div className="col-12 my-2">
                    <div className="form-check">
                        <input onClick={handleStatus} className="form-check-input" type="checkbox" id="gridCheck" />
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
                            <button onClick={googleSignUp} className="signInbtn">Register With Google</button>
                            <button onClick={githubSignUp} className="signInbtn">Register With GitHub</button>
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