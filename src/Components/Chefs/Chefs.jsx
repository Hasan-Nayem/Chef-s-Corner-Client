import React from 'react';
import './Chefs.css';
import { Link } from 'react-router-dom';

const Chefs = (props) => {
    const {id,name,img,yearsOfExperience,likes} = props.chef;
    return (
        <div className="col">
            <div className="card">
            <img src={img} style={{height:"400px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="info">Years of experience:  {yearsOfExperience}</div>
                    <div className="info">Numbers of recipes: {props.chef.recipes.length}</div>
                    <div className="info"> <img src="https://i.ibb.co/7NqPNJy/thumbs.png" style={{width:"30px"}} alt="" /> {likes}</div>
                </div>
                <Link to={`/chef/${id}`} className="btn btn-primary mt-3" style={{backgroundColor:"#f93f23" , borderColor:"#f93f23"}}>View Recipes</Link>
            </div>
            </div>
        </div>
        
    );
};

export default Chefs;