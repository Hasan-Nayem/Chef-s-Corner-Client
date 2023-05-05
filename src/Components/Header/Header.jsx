import React, { useContext } from 'react';
import './Header.css'
import { Link, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from "react-router-dom";
import ActiveLink from '../ActiveLink/ActiveLink';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


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
            
            <Navbar expand="lg">
            <Container>
                <Link className="navbar-brand" to="/"><img className="nav-logo" src="https://i.ibb.co/q7XRLNX/logo-main.png" alt="" /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                <Nav className="ms-auto">
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
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>

        </div>
    );
};

export default Header;