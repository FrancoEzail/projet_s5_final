import React from "react";
import Header from "../component/Comp_Header";
import { Comp_Welcome, Comp_Card_Shop } from "../component/Comp_Welcome";
import data_img from "../data_img";
function Welcome() {
    return(
        <div id="container">
            <Header></Header>
            <div className="container-welcome">
                <Comp_Welcome></Comp_Welcome>
                <div className="right-img">
                    {
                        data_img.map((parcel, index) => (
                            <img src={parcel.parcelle} alt=""/>            
                        ))
                    }   
                </div>
            </div>
            <div className="card-list">
                <Comp_Card_Shop></Comp_Card_Shop>
                <Comp_Card_Shop></Comp_Card_Shop>
                <Comp_Card_Shop></Comp_Card_Shop>
            </div>
        </div>
    );
}
export default Welcome;