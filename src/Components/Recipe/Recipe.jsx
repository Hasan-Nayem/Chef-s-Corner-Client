import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Recipe.css';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const Recipe = () => {
    const {id,name,img,bio,yearsOfExperience,likes,recipes} = useLoaderData();
    console.log(name);
    return (
        <div className="container my-4 p-4 border">
            <div className="text-center">
                <img src={img} className="img-fluid chef-img" alt="..."></img>
                <h1 className="fw-bolder my-3">Chef - {name}</h1>
            </div>
            <div className="chef-details">
                <p className="">{bio}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="info">Years of experience:  <span className='highlight'>{yearsOfExperience}</span></div>
                <div className="info">Numbers of recipes: <span className='highlight'>{recipes.length}</span></div>
                <div className="info"> <img src="https://i.ibb.co/7NqPNJy/thumbs.png" style={{width:"30px"}} alt="" /> <span className="highlight">{likes}</span></div>
            </div>
            <div className="recipes my-3">
                <h4>Recipes from - <b>{name}</b> </h4>
                <div className="card-group">            
                    {
                        recipes.map(recipe=> <RecipeDetails
                            key={recipe.name}
                            recipe={recipe}
                        ></RecipeDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipe;