import React,{useState,useEffect,useContext} from "react";
import "./GifSection.css"
import {Link} from "react-router-dom"
import { LoadSection } from "../js/LoadSection";
import { Context } from "../context/Context";

export default function GifSection({categorie}){
    const {theme} = useContext(Context)
    const [dataGifs,setDataGifs] = useState([]);
    const height=150;
    const colors = ["#AFE4C1","#B5EB58","#EA8B30","#D4374A","#0099FF"];
    useEffect(async()=>{
    const response =await LoadSection(categorie,0) 
    setDataGifs(response)
    },[])
    
    return <div className="gifs-container-section">
       <div className={`tittles-container-section `}>
           <Link to={`/section/${categorie}`} className={`tittle-categorie ${theme}`} ><span >{categorie}</span></Link>
           <Link to={`/section/${categorie}`} className={`tittle-categorie ${theme}`}><span>Show All Gifs</span></Link>
       </div>
        <div className="section-gifs" data-test-id='gifs-trending'>
           {dataGifs.map(gif=>
            { const colorRandom = colors[Math.floor(Math.random()*5)]
                return <img 
                            key={gif.id} 
                            src={gif.url} 
                            className="gif" 
                            style=
                            {{
                                width:height*gif.width/gif.height,
                                backgroundColor:colorRandom}
                            } 
                            height={height}>
                        </img>
            }
           
           )}
        </div>
    </div>
}