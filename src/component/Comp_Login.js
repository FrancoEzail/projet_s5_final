import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from "axios";
function CompLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("toky@gmail.com"); 
    const [mdp, setMdp] = useState("toky");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMdpChange = (e) => {
        setMdp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://farm-production.up.railway.app/user/${email}/${mdp}`);
            const userId = response.data.id;
            const userNom = response.data.nom;
            const userEmail = response.data.email;
            
            localStorage.setItem('userId', userId);
            localStorage.setItem('userNom', userNom);
            localStorage.setItem('userEmail', userEmail);
            navigate(`/accueil/${userId}`);
            
        } catch (error) {
            
        }
    };
    return(
        <div className="login-card">
            <div className='head-log'>
                <div className='retour-btn'>
                <NavLink to='/home'>
                    <span><i className='fas fa-angle-left'></i></span>
                </NavLink>
                </div>
                    <div className='table-title'>
                        <h3>Veuillez-vous connecter</h3>
                    </div>
                <div className='right-arrow-log'>
                    <span><i className="fas fa-arrow-right"></i></span>
                </div>
            </div>
            <div className="comp-log">
                <div className="have-account">
                    <p>Pas de compte? 
                        <NavLink to="/inscription">
                            <span>S' inscrire</span>
                        </NavLink>
                    </p>
                </div>
                <div className="login-title">
                    <h1 className="fill-text">Welcome</h1>
                    <h1 className="stroke-text">to Culture</h1>
                    <h1 className="stroke-text">moderne</h1>
                </div>
                <div className="form-group-log">
                    <form onSubmit={handleSubmit}>
                        <div className="form-input-log">
                            <input type="email" id="" placeholder="toky@gmail.com" onChange={handleEmailChange} />
                        </div>
                        <div className="form-input-log">
                            <input type="password" id="" placeholder="...." onChange={handleMdpChange}/>
                        </div>
                        <div className='btn-log'>
                        <div className='icon-btn-log'>
                            <span><i className='fas fa-angle-double-right'></i></span>
                        </div>
                            <input type="submit" value="Se connecter"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

function CompInscrit() {
    return(
        <div className="login-card">
            <div className='head-log'>
                <div className='retour-btn'>
                <NavLink to='/home'>
                    <span><i className='fas fa-angle-left'></i></span>
                </NavLink>
                </div>
                    <div className='table-title'>
                        <h3>Veuillez-vous inscrire</h3>
                    </div>
                <div className='right-arrow-log'>
                    <span><i className="fas fa-arrow-right"></i></span>
                </div>
            </div>
            <div className="comp-log">
                <div className="have-account">
                    <p>Deja inscrit? 
                        <NavLink to="/login">
                            <span>Se connecter</span>
                        </NavLink>
                    </p>
                </div>
                <div className="form-group-log">
                    <div className="form-input-log">
                        <input type="text" name="" id="" placeholder="Entrer votre Nom"/>
                    </div>
                    <div className="form-input-log">
                        <input type="email" name="" id="" placeholder="Entrer votre Email"/>
                    </div>
                    <div className="form-input-log">
                        <input type="password" name="" id="" placeholder="Entrer votre Mot de passe"/>
                    </div>
                    <div className="form-input-log">
                        <input type="password" name="" id="" placeholder="Confirmer Mot de passe"/>
                    </div>
                    <div className='btn-log'>
                    <div className='icon-btn-log'>
                        <span><i className='fas fa-angle-double-right'></i></span>
                    </div>
                    <NavLink to="/accueil">
                        <input type="submit" value="S' inscrire"/>
                    </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {CompLogin, CompInscrit};