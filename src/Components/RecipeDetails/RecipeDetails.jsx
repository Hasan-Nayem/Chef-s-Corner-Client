import React, { useState } from 'react';
import './RecipeDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeDetails = (params) => {
    const {name,recipeImg,ingredients,cookingMethod,rating} = params.recipe;
    const [favorite,setFavorite] = useState(false); 
    const handleFav = () => {
        setFavorite(true);
        toast.success("Added to favorite list!!!")
    }
    return (
            <div className="card col-lg-12">
                 <ToastContainer />
                <img src={recipeImg} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className='card-text'>Ingredients - </h6>
                <ol>
                    {
                        ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
                    }
                </ol>
                <p className="card-text">{cookingMethod}</p>

                </div>
                <div className="card-footer d-flex justify-content-between">
                    <small className="text-body-secondary">Rating - <span className="highlight">{rating}</span></small>
                    {
                        favorite?
                         <img onClick={handleFav} src="https://i.ibb.co/9rQL69N/red-heart.png" className='favorite' alt=""/>
                        :<img onClick={handleFav} src="https://i.ibb.co/g9zWgGY/bh-heart.png" className='favorite' alt=""/>
                    }
                </div>
            </div>
    );
};

export default RecipeDetails;