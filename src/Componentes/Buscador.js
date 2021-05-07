import React,{useState,useEffect} from "react"
import Spinner from "./Spinner.js"
import buscadorAPI from "../js/BuscadorAPI.js"
import Gifs from "./Gifs.js"
    
import "./buscador.css"
import BotonNuevosGifs from "../Componentes/BotonNuevosGifs"
import BuscarGifs from "../Componentes/Buscargifs.js"

export default function Buscador(props){
    const [offset,setOffset] = useState(0)
    const [keyword,setKeyword] = useState("rick");
    const [gifs,setGifs] = useState([])
    const [loading,setLoading] = useState(false)
    const [valorInput,setValorInput] = useState("")

    useEffect(()=>{
      setLoading(true)
        console.log(offset)
        buscadorAPI(keyword,offset)
        .then(gifs=>{
          setGifs(gifs)
          setLoading(false)
        })
      },[keyword,offset])
      
    function handleChange(e){
        setValorInput(e.target.value)
    }
    function handleSubmitButton(e){
        e.preventDefault()
        setKeyword(valorInput)
       
    }
    function mostrasNuevosGifs(){
      setOffset(offset+10)
    }

    return <div className="home">
        <BuscarGifs submit={handleSubmitButton} input={handleChange} valorInput={valorInput}></BuscarGifs>
        {loading ?  <Spinner></Spinner> :
                    <Gifs gifs={gifs}></Gifs>}
        <BotonNuevosGifs gifsNuevos={mostrasNuevosGifs}></BotonNuevosGifs>
  </div>
}