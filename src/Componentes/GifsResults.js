import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'
import BuscadorAPI from '../js/BuscadorAPI'
import GifsComponent from './GifsComponent'
import Spinner from "./Spinner";
import "./GifsResults.css";
import BotonNuevosGifs from "./BotonNuevosGifs"

function GifsResults() {
    const {keyword} = useParams()
    const [gifsResponse,setGifsResponse] = useState([])
    const [loading,setLoading] = useState(true)
    const [page,setPage] = useState(0)

    useEffect(()=>{
        setGifsResponse([])
        setPage(0);
        setLoading(true);
        searchGifs();
        setLoading(false);
    },[keyword])
    
    useEffect(()=>{
        if(page != 0)
        searchGifs();     
    },[page])

    function handleNewGifs(){
        setPage(page+1);
    }

    const searchGifs = async ()=>{
        const dataGifs = await BuscadorAPI(keyword,page);
            setGifsResponse([...gifsResponse,...dataGifs])
    }

    return (
        <div>
            {loading ? <Spinner/> : 
            <div className="gifs-section-container">
                <GifsComponent dataGifs={gifsResponse} section={keyword} />
                <BotonNuevosGifs  nuevosGifs={handleNewGifs}></BotonNuevosGifs>
            </div>}
        </div>
    )
}

export default GifsResults
