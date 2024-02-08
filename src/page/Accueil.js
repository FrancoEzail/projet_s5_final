import React from "react";
import Header from "../component/Comp_Header";
import {CompSubTitle, CompFiltre, CompProfil, CompFormulaire, CompCard, CompImg} from "../component/Comp_Acc";
function Accueil() {
    return(
        <>
            <Header />
            <div className="container-accueil">
                <div className="left-section">
                    <CompSubTitle />
                    <CompFiltre />
                </div>
                <div className="center-section">
                    <CompProfil />
                    <CompFormulaire />
                </div>
                <div className="right-section">
                    <CompCard />
                    <CompImg />
                </div>
            </div>
        </>
    );
}
export default Accueil;