import React from "react";
function Header() {
    return(
        <header>
            <div className="header-box">
                <div className="header-left">
                    <span><i className="fas fa-align-left"></i></span>
                </div>
                <div className="header-right">
                    <span><i className="fas fa-search"></i></span>
                    <span><i className="fas fa-user"></i></span>
                </div>
            </div>
        </header>
    );
}
export default Header;