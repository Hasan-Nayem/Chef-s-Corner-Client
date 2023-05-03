import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header container">
            <nav className="navbar navbar-expand-lg fs-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://i.ibb.co/q7XRLNX/logo-main.png" style={{width:"200px"}} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="#">Blog</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/registration">Registration</Link>
                        <img className="user-img mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWFXbd9hr7VcMQ63aguH1t5IEg3L2JdFoej8P7l4&s" alt="" />
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;