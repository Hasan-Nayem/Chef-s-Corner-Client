import React, { useContext } from 'react';
import './Header.css'
import { Link, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from "react-router-dom";
import ActiveLink from '../ActiveLink/ActiveLink';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';



const Header = () => {
    const {user,logout} = useContext(AuthContext);
    const navigation = useNavigation();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
        .then(() => {
            navigate('/');
        })
        .catch((e) => {
            console.log(e.message);
        })
    }
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
                        <ActiveLink  aria-current="page" to="/">Home</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>                        
                        
                        {
                            user?
                                user.photoURL?
                                <>
                                    <a href="#" className="react-tooltip"><img className="user-img mx-2 " style={{width:"50px",height:"50px",borderRadius:"50px"}} src={user.photoURL} alt="" /></a>
                                    <Tooltip anchorSelect=".react-tooltip" place="bottom">
                                        {user.displayName}
                                    </Tooltip> 
                                </>
                                :
                                <>
                                    <a href="#" className="react-tooltip"><img className="user-img mx-2 " style={{width:"50px",height:"50px",borderRadius:"50px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWFXbd9hr7VcMQ63aguH1t5IEg3L2JdFoej8P7l4&s" alt="" /></a>
                                    <Tooltip anchorSelect=".react-tooltip" place="bottom">
                                        {user.displayName}
                                    </Tooltip>
                                </>
                                
                            :
                            <>
                                <ActiveLink to="/login">Login</ActiveLink>
                                <ActiveLink to="/registration">Registration</ActiveLink>
                            </>
                        } 
                        {
                            user&& <button onClick={handleLogout} className="explore-btn">Logout</button>
                        } 
                        {/* <Tooltip anchorSelect=".react-tooltip" place="bottom">
                            {navigation.state === 'loading' && user.displayName}
                        </Tooltip>  */}
                        
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;