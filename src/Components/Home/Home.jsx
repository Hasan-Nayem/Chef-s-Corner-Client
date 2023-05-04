import React, { useState } from 'react';
import "./Home.css";
import { useRef } from 'react';
import Chefs from '../Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
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
                </div>
            </div>

            <div className="my-5 container d-flex align-items-center justify-content-around g-2">
                <div className="">
                    <h3 className="text-center">Information's About Arabian Cuisine</h3>
                    <p className="text-muted">Arabian cuisine is the cuisine of the Arabs, defined as the various regional cuisines spanning the Arab world, from the Maghreb to the Fertile Crescent and the Arabian Peninsula 1. It is centuries old and reflects the culture of trading in baharat (spices), herbs, and foods 1.
                    Some popular dishes include Mansaf, which is a traditional dish in Arabic countries such as Palestine and Jordan made with lamb, yoghurt and rice 2, Baharat, which is a spice mix usually of 7 or 8 spices such as nutmeg, cardamom, coriander, paprika, black pepper, cinnamon, cumin, and cloves 3, Kabsa, which is a mixed rice dish that originates from Saudi Arabia 2, Hummus, which is a dip made from cooked chickpeas blended with tahini, olive oil, lemon juice, salt and garlic 2, and Tabbouleh, which is a vegetarian salad made mostly of finely chopped parsley with tomatoes, mint, onion, bulgur wheat and seasoned with olive oil and lemon juice 2.</p>
                </div>
                <div className="">
                <Carousel className="" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/bbhGJrD/Mansaf.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Mansaf</h3>
                        <p>Mansaf is a traditional Jordanian dish that consists of lamb cooked with basmati rice or bulgur wheat, yogurt and spices.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/tDkN379/Kabsa.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Khabsa</h3>
                        <p>Kabsa is a traditional Saudi Arabian dish that consists of rice and meat (usually chicken or lamb) cooked with tomatoes, onions etc.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://i.ibb.co/MnhLJQF/Mandi.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Mandi</h3>
                        <p>
                        Mandi is a traditional Yemeni dish that consists of meat (usually lamb or chicken) cooked with rice and a variety of spices such as cumin.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>

            
                
            <div className="container d-flex g-1 justify-content-between align-items-center my-5">
                <div className="description">
                    <h3 className="text-center my-3">History of <span style={{color:"#f93f23", borderBottom:"4px solid #f93f23"}}>Arabian Cuisine</span></h3>
                    <p className="text-center text-muted">Arab cuisine is centuries old and reflects the culture of trading in baharat (spices), herbs, and foods. The regions have many similarities but also unique traditions. The history of Arab food goes back to the ancient civilizations of the Middle East. The Sumerians, Babylonians, Phoenicians or Canaanites, Hittites, Arameans, Assyrians, Egyptians, and Nabateans all contributed to the formation of the Arab kitchen.
                    The 14th-century Egyptian cookbook, Treasure Trove of Benefits and Variety at the Table still shows the influence of 10th-century Baghdad but also has many local modifications.</p>
                </div>
                <div className="img-section">
                <LazyLoadImage
                    src='https://i.ibb.co/1M3sVyq/arabian-cuisine.jpg'
                    className="my-3"
                >
                </LazyLoadImage>
                </div>
            </div>
            <section className="chef-container" ref={ref}>
                <h1 className="text-center">Our Chef's</h1>
                <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <LazyLoadComponent>
                    {
                        allChefs.map(chef => <Chefs
                        key={chef.id}
                        chef={chef}
                        ></Chefs> )
                    }    
                    </LazyLoadComponent>   
                </div>
                </div>
            </section>
        </>
    );
};

export default Home;