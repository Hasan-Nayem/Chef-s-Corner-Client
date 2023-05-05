import React from 'react';
import "./Main.css";
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div className='main-container'>
            <Header></Header>
            {/* {
                navigation.state === "loading" && <Loader />
            } */}
            {
                navigation.state === "loading" ? <Loader /> : <Outlet></Outlet>
            }
            <Footer></Footer>               
        </div>
    );
};

export default Main;