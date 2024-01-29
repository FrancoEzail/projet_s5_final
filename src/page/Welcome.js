import React from "react";
import Header from "../component/Comp_Header";
import { CompWelcome, CompCardShop } from "../component/Comp_Welcome";
import data_img from "../data_img";
function Welcome() {
    return(
        <div id="container">
            <Header></Header>
            <div className="container-welcome">
                <CompWelcome></CompWelcome>
                <div className="right-img">
                    {
                        data_img.map((parcel, index) => (
                            <img src={parcel.parcelle} alt=""/>            
                        ))
                    }   
                </div>
            </div>
            <div className="card-list">
                <CompCardShop></CompCardShop>
                <CompCardShop></CompCardShop>
                <CompCardShop></CompCardShop>
            </div>
        </div>
    );
}
export default Welcome;