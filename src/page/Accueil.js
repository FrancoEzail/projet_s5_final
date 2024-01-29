import React from "react";
import Header from "../component/Comp_Header";
import {Comp_SubTitle, Comp_filtre, Comp_profil, Comp_formulaire, Comp_Card, Comp_img} from "../component/Comp_Accueil";
function Accueil() {
    return(
        <>
            <Header />
            <div className="container-accueil">
                <div className="left-section">
                    <Comp_SubTitle />
                    <Comp_filtre />
                </div>
                <div className="center-section">
                    <Comp_profil />
                    <Comp_formulaire />
                </div>
                <div className="right-section">
                    <Comp_Card />
                    <Comp_img />
                </div>
            </div>
        </>
    );
}
export default Accueil;