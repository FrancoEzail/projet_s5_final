import React from "react";
import data_img from '../data_img';
import { NavLink } from 'react-router-dom';
function Comp_Welcome() {
    return (
        <div className="welcome">
            <div className="grand-title">
                <h1>Grow Your</h1>
                <h1>Own <span>Favourite</span></h1>
                <h1>Culture</h1>
            </div>
            <div className="welc-group-btn">
                <div className="home-btn">
                    <a href="">Home <span><i className="fas fa-home"></i></span></a>
                </div>
                <div className="sign-btn">
                    <NavLink to="/accueil">
                        Sign in<span><i className="fas fa-arrow-right"></i></span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

function Comp_Card_Shop() {
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
                    <a href="">SHOP NOW</a>
                </div>
            </div>
        </div>
    );
}
export { Comp_Welcome , Comp_Card_Shop } ;