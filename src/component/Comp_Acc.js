import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from "axios";
import saryTer from "./image/1.png";
import saryParc from "./image/parcelle.png";
import saryProfil from "./image/profil.jpeg";

export const fetchData = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur de requête :", error);
      throw error;
    }
};

function CompSubTitle() {
    return(
        <div className="sub-title">
            <div className="circle">
                <span><i className="fas fa-circle"></i></span>
                <span><i className="far fa-circle"></i></span>
            </div>
            <div className="text-sub-title">
                <h1>Liste des</h1>
                <h1>cultures</h1>
            </div>
        </div>
    );   
}

function CompFiltre() {
    const [boutonActif, setBoutonActif] = useState(1);
      const handleClick = (bouton) => {
        setTimeout(() => {
          setBoutonActif(bouton);
        }, 100);
    };
    const [allTerrain, setAllTerrain] = useState([]);
    useEffect(() => {
        const fetchAllData = async () => {
          try {
            const dataTerrain = await fetchData("https://farm-production.up.railway.app/terrain/all");
            setAllTerrain(dataTerrain);
          } catch (error) {

          }
        };
        fetchAllData();
    }, []); 
    return(
        <div className="fitlre-box">
            <nav className='_bar'>
                <div className="_links">
                    <ul>
                        <li className={boutonActif === 1 ? 'active' : ''} onClick={() => handleClick(1)}>All</li>
                        <li className={boutonActif === 2 ? 'active' : ''} onClick={() => handleClick(2)}>Rice</li>
                        <li className={boutonActif === 3 ? 'active' : ''} onClick={() => handleClick(3)}>Corn</li>
                        <li className={boutonActif === 4 ? 'active' : ''} onClick={() => handleClick(4)}>Vegetable</li>
                    </ul>
                </div>
            </nav>
            <div className="filtre-box2"  style={{ margin: '10px 0' }}>
                <div className='right-arrow'>
                    <div className='table-title'>
                        <h3>Details parcelle</h3>
                    </div>
                    <span><i className="fas fa-arrow-right"></i></span>
                </div>
                <div className="limit-scroll-2">
                <table className="tableau_style">
                    <thead>
                        <tr>
                            <th>Proprio</th>
                            <th>Terrain</th>
                            <th>Nombre Parcelle</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTerrain.map((terrain, index) => (
                            <tr key={index}>
                                <td>{terrain.idUtilisateur}</td>                    
                                <td>{terrain.id}</td>
                                <td>{terrain.nbParcelle}</td>
                                <td><span><i className="far fa-comment"></i></span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>  
            </div>
        </div>
    );
}

function CompProfil() {
    const [users, setUsers] = useState(null);
    const {userId}  = useParams();
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://farm-production.up.railway.app/user/${userId}`);
            setUsers(response.data);
          } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
          }
        };
    
        fetchData();
      }, [userId]);
    return(
        <div className="profil-box">
            <div className="profil-img">
                <NavLink to={`/profil/${userId}`}>
                    <img src={saryProfil} alt=""/>            
                </NavLink>
            </div>
            <div className="profil-card">
                {users && (
                    <div className="nom-email">
                        <h5>{users.nom}</h5>
                        <p>{users.email}</p>
                    </div>
                )}
                <div className='ellipsis'>
                    <span><i className="fas fa-ellipsis-v"></i></span>
                </div>
            </div>
        </div>
    );
}

function CompFormulaire() {
    const [allRegion, setAllRegion] = useState([]);
    useEffect(() => {
        const fetchAllData = async () => {
          try {
            const dataRegion = await fetchData("https://farm-production.up.railway.app/loc/all");
            setAllRegion(dataRegion);
          } catch (error) {

          }
        };
    
        fetchAllData();
    }, []); 

    // const navigate = useNavigate();
    const[nbrParcelle, setNbrParcelle] = useState(0);
    const[loc, setLoc] = useState("loc1");
    const[descrit, setDescrit] = useState("");
    const { userId } = useParams();

    const handleNbrChange = (e) => {
        setNbrParcelle(parseInt(e.target.value));
    }

    const handleLocChange = (e) => {
        setLoc(e.target.value);
    }

    const handleDescritChange = (e) => {
        setDescrit(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(loc);
            console.log(descrit);
            console.log(userId);
            console.log(nbrParcelle);
            // const response = await axios.get(`https://farm-production.up.railway.app/terrain/create/${loc}/${descrit}/${userId}/${nbrParcelle}`);
            // console.log(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return(
        <div className="card-form">
            <div className="sub-title-form">
                <h3>Creer un terrain</h3>
                <div className="circle2">
                    <span><i className="fas fa-circle"></i></span>
                    <span><i className="far fa-circle"></i></span>
                </div>
            </div>
            <div className="form-group">
                <form onSubmit={handleSubmit}>
                    <div className="form-input">
                        <select name="loc" onChange={handleLocChange} value={loc}>
                        {allRegion.map((region, index) => (
                            <option key={region.id} value={region.id}>{region.nom}</option>
                        ))}
                        </select>
                    </div>
                    <div className="form-input">
                        <input type="number" placeholder="Nombre de parcelle" name="nbrParcelle" onChange={handleNbrChange} />
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder='Description' name='descrit' onChange={handleDescritChange} />
                    </div>
                    <div className='sub-btn'>
                        <input type="submit" value="Valider" />
                        <div className='right-arrow-btn'>
                            <span><i className="fas fa-arrow-right"></i></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );   
}

function CompCard() {
    return(
        <div className='card-pub'>
            <div className='card_pub-img'>
                <img src={saryTer} alt=""/>            
            </div>
            <div className='descrit'>
                <div className='left-descrit'>
                    <h5>Corn</h5>
                    <span><i className='fas fa-map-marked-alt'></i><p>Marovoay</p></span>
                </div>
                <div className='right-descrit'>
                    <p>150Kg</p>
                    <h5>$200.99</h5>
                </div>
            </div>
        </div>
    );
}

function CompImg() {
    return(
        <div className='sary'>
            <img src={saryParc} alt=""/>            
        </div>
    );
}

export {CompSubTitle, CompFiltre, CompProfil, CompFormulaire, CompCard, CompImg};