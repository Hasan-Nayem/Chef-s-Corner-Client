import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="w-100 bg-dark">
        <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-12 p-5">
                <img src="https://i.ibb.co/q7XRLNX/logo-main.png" className="p-3" style={{width:"180px"}} alt="" />
                <p className="text-wrap text-white p-3 fs-5">There are many variations of
                passages of Lorem Ipsum
                available, but the majority have
                suffered alteration in some
                form, by injected humour.</p>
            </div>
            <div className="col-md-3 col-sm-12 p-5 text-white">
                <h3 className="p-3 ">Usefull Links</h3>
                <ul className=" list-group-bg-dark p-3 fs-5">
                <li className="list-group-item py-2">Home</li>
                <li className="list-group-item py-2">Blog</li>
                <li className="list-group-item py-2">Contact Us</li>
                </ul>
            </div>
            
            <div className="col-md-3 col-sm-12 p-5 text-white">
                <h3 className="p-3">Contact Now</h3>

                <p className="text-wrap p-2 fs-5"> الدمام ص.ب: 2258 الرمز البريدي: 31451 المدينة: الدمام</p>
                <p className="text-wrap p-2 fs-5">03-8337254 02-2577777</p>
                <p className="text-wrap p-2 fs-5" mailto="mailto:">nayemmh66@gmail.com info@gmail.com</p>

            </div>

            <div className="col-md-3 col-sm-12 p-5 text-white">
                <h3 className="p-3">Subscribe Now</h3>

                <p className="text-wrap p-2 fs-5">Subscribe for our latest & Articles. We Won't Give You Spam Mails</p>
                <input type="text" className="form-control p-3 my-2" placeholder="Email Address" />
                <button className="background-color text-white p-3 rounded w-100 border-0">Send <i className="fas fa-paper-plane"></i> </button>
            </div>

            </div>
        </div>
        </footer>
    );
};

export default Footer;