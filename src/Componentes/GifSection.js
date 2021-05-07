import React,{useState,useEffect} from "react";
import "./GifSection.css"
import {Link} from "react-router-dom"
import { LoadSection } from "../js/LoadSection";

export default function GifSection({categorie}){
    const [dataGifs,setDataGifs] = useState([]);
    const height=150;
    useEffect(async()=>{
    const response =await LoadSection(categorie,7) 
    setDataGifs(response)
    },[])
    
    return <div className="gifs-container-section">
       <div className="tittles-container-section">
           <Link to={`/section/${categorie}`} className="tittle-categorie"><span >{categorie}</span></Link>
           <Link to={`/${categorie}`} className="tittle-categorie"><span>Show All Gifs</span></Link>
       </div>
        <div className="section-gifs">
           {dataGifs.map(gif=><img key={gif.id} src={gif.url} className="gif" style={{width:height*gif.width/gif.height}} height={height}></img>
           )}
        </div>
    </div>
}