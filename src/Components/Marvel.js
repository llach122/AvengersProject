import React from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { useState } from "react";


export const Marvel = () => {
    const{id}=useParams();
    const [item, setItem] = useState()
    const fetch = async () =>{
        const res = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=1b9f950ed4ef333d8d97fcf02794a9a4&hash=d5bb3e3e0c02051f20672039949fff9a`)
        setItem(res.data.data.results[0])  
    }
      //https://gateway.marvel.com:443/v1/public/characters${id}?ts=1&apikey=1b9f950ed4ef333d8d97fcf02794a9a4&hash=d5bb3e3e0c02051f20672039949fff9a
    fetch();
    return (
        <>
            {(!item) ? "" : (
                <div className="box-content">
                    <div className="right-box">
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt=""/>
                    </div>
                    <div className="left-box">
                    <h1>{item.name}</h1>
                    <h4>{item.description}</h4>
                    </div>
                </div>
            )}
        </>
    )
}