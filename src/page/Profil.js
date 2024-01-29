import React from "react";
import Header from "../component/Comp_Header";
import { Comp_parcelle_culture, Comp_parcelle_detail, Comp_historique, Comp_discu } from '../component/Comp_Profil';
import {Comp_profil} from "../component/Comp_Accueil";
function Profil() {
    return(
        <>
            <Header />
            <div className="container-profil">
                <div className="left-section">
                   <Comp_profil />
                   <Comp_parcelle_culture />
                </div>
                <div className="center-section">
                   <Comp_parcelle_detail />
                   <Comp_historique />
                </div>
                <div className="right-section">
                  <Comp_discu />
                </div>
            </div>
        </>
    );
}
export default Profil;