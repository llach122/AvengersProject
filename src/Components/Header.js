import React from "react";
import "../Style-Sheets/Header.css"

export function Header (props){
    return(
        <header className="header">
            {props.childen}
        </header>
    )
}
