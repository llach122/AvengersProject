import React from "react";
import "../Style-Sheets/Header.css"

function Header(props){
    return(
        <header className="header">
            <ul className="header-ul">
                <li>{props.lore}</li>
                <li>{props.organizations}</li>
                <li>{props.knowAbout}</li>
                <li>{props.enemies}</li>
            </ul>
        </header>
    )
}
export default Header;