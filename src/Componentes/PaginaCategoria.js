import React,{useEffect,useState,useContext} from "react";
import {useParams} from "react-router-dom";
import { Context } from "../context/Context";
import { LoadSection } from "../js/LoadSection";
import BotonNuevosGifs from "./BotonNuevosGifs";
import "./PaginaCategoria.css"
import Spinner from "./Spinner";

export default function PaginaCategoria(){
    const {theme} = useContext(Context)
    const {section} = useParams()
    const [dataGifs,setDataGifs] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(0)

    useEffect(async ()=>{
        const response = await LoadSection(section,0)
        setDataGifs(response);
        setLoading(false)
        console.log(loading)
    },[])

    useEffect(async()=>{
        const response = await LoadSection(section,page)
        setDataGifs([...dataGifs,...response])
        console.log(page)
        
    },[page])

    function handleNewGifs(){
        setPage(page+1)
    }
    

    return <div className="gifs-trending-container">
                <span className={`tittle-section ${theme}`}>{section} GIFS</span>
                {loading ? <Spinner/> :
                <div className="gifs-container">
                    <div className="section-container">
                        {dataGifs.map(gif=>{
                            return  <div key={gif.id} className="gif-container" >
                                        <img src={gif.url} width={245} className="image-gif"></img>
                                    </div>  
                        })
                        }
                    </div>
                    <BotonNuevosGifs  nuevosGifs={handleNewGifs}></BotonNuevosGifs>
                </div>
                 }
                

             </div>
}