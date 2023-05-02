import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header container">
            <nav className="navbar navbar-expand-lg fs-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                        <a className="nav-link" href="#">Login</a>
                        <a className="nav-link" href="#">Registration</a>
                        <img className="user-img mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWFXbd9hr7VcMQ63aguH1t5IEg3L2JdFoej8P7l4&s" alt="" />
                    </div>
                    </div>
                </div>
            </nav>
            <div className="branding text-center">
                <div>
                    <h1 className='text-center branding-title fw-5'><b>Try Our Popular Arabian Cuisine!!!</b></h1>
                </div>
                <div>
                    <p className="text-center branding-details">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even
                    </p>
                    <button className='explore-btn mb-5'>Explore Now</button>
                    <img src="https://i.ibb.co/1M3sVyq/arabian-cuisine.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;