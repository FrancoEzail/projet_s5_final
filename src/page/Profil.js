import React from "react";
import Header from "../component/Comp_Header";
import {CompParcelleCulture, CompParcelleDetail, CompHistorique, CompDiscu} from "../component/Comp_Profil";
import { CompProfil } from "../component/Comp_Accueil";
function Profil() {
    return(
        <>
            <Header />
            <div className="container-profil">
                <div className="left-section">
                   <CompProfil />
                   <CompParcelleCulture />
                </div>
                <div className="center-section">
                   <CompParcelleDetail />
                   <CompHistorique />
                </div>
                <div className="right-section">
                  <CompDiscu />
                </div>
            </div>
        </>
    );
}
export default Profil;