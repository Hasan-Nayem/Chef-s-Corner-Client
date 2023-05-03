import React from 'react';
import "./Home.css";
import { useRef } from 'react';
import Chefs from '../Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    const allChefs = useLoaderData();
    return (
        <>
            <div className="branding text-center">
                <div>
                    <h1 className='text-center branding-title fw-5'><b>The Greatest Chef's In Arab World!!!</b></h1>
                </div>
                <div>
                    <p className="text-center branding-details">
                    Award-winning Palestinian chef Sami Tamimi is the co-founder and head of the Ottolenghi restaurants, creating new dishes and innovative menus, and writing three bestselling cookbooks: Ottolenghi: The Cookbook, Jerusalem: A Cookbook and Falastin: A Cookbook. He describes his most recent cookbook, Falastin (the name honors the Arabic pronunciation—there is no “p” in Arabic) as a love letter to Palestine told through food. If you’re looking for more work like his, check out our favorite Middle Eastern cookbooks.                    </p>
                    <div>
                        <button onClick={handleClick} className="explore-btn">Explore Now</button>
                    </div>
                    <img src="https://i.ibb.co/1M3sVyq/arabian-cuisine.jpg" className="my-3" alt="" />
                </div>
            </div>
            <section className="chef-container" ref={ref}>
                <h1 className="text-center">Our Chef's</h1>
                <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        allChefs.map(chef => <Chefs
                        key={chef.id}
                        chef={chef}
                        ></Chefs> )
                    }   
                </div>
                </div>
            </section>
        </>
    );
};

export default Home;