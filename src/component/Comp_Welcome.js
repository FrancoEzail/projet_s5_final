import React from "react";
import data_img from '../data_img';
import { NavLink } from 'react-router-dom';
function CompWelcome() {
    return (
        <div className="welcome">
            <div className="grand-title">
                <h1>Grow Your</h1>
                <h1>Own <span>Favourite</span></h1>
                <h1>Culture</h1>
            </div>
            <div className="welc-group-btn">
                <div className="home-btn">
                <NavLink to="/accueil">
                    <p>Home <span><i className="fas fa-home"></i></span></p>
                </NavLink>
                </div>
                <div className="sign-btn">
                    <NavLink to="/login">
                      <p>Sign in<span><i className="fas fa-arrow-right"></i></span></p>  
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

function CompCardShop() {
    return(
        <div className="card">
            <div className="card-img">
            {
                data_img.map((parcel, index) => (
                    <img src={parcel.parcelle} alt=""/>            
                ))
            }   
            </div>
            <div className="card-detail">
                <h4>Culture</h4>
                <div className="shop-btn">
                    <p>SHOP NOW</p>
                </div>
            </div>
        </div>
    );
}

export { CompWelcome, CompCardShop };