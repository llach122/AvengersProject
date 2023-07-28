import React from "react";
import { Card } from "./Card.js"
import { Header } from "./Header"
import axios from "axios";
import { useState, useEffect } from "react";



export const Main = () => {

const [url,setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f49c5f68409f75617641e16baa8b5da8&hash=21e8b29085083d246019ed75656453b4");
const [item, setItem]= useState();

useEffect(() => {
    const fetch = async()=>{
        const res = await axios.get(url)
        setItem(res.data.data.results);
    }
    fetch();
},[url]);

    return (
        <>
            <div className="container">
                <div className="bg">header y hero</div>
                <img src="" alt="" />

            </div>
            <div className="search-bar">
                <img src="" alt="" />
                <input type="search" placeholder="Search Here" className="search"></input>
            </div>
            <div className="content">
        
                {
                    (!item) ? <p>Not Fond</p>:<Card data={item}/>
                }
            </div>
        </>
    )
}
