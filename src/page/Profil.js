import React from "react";
import Header from "../component/Comp_Header";
import {CompParcelleCulture, CompParcelleDetail, CompHistorique, CompDiscu} from "../component/Comp_Profil";
import { CompProfil } from "../component/Comp_Acc";
function Profil() {
    return(
        <>
            <Header />
            <div className="container-profil">
                <div className="left-section-2">
                   <CompProfil />
                   <CompParcelleCulture />
                </div>
                <div className="center-section-2">
                   <CompParcelleDetail />
                   <CompHistorique />
                </div>
                <div className="right-section-2">
                  <CompDiscu />
                </div>
            </div>
        </>
    );
}
export default Profil;