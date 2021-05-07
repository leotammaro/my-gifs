import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import { LoadSection } from "../js/LoadSection";
import "./PaginaCategoria.css"

export default function PaginaCategoria(){
    const {section} = useParams()
    const [dataGifs,setDataGifs] = useState([])
    useEffect(async ()=>{
        const response = await LoadSection(section,20)
        setDataGifs(response);
    })
    return <div>
                <span className="tittle-section">{section} GIFS</span>
                <div className="section-container">
                    {dataGifs.map(gif=>{
                        return  <div key={gif.id} className="gif-container" >
                                    <img src={gif.url} width={245} className="image-gif"></img>
                                </div>  
                    })
                    }
                </div>
             </div>
}