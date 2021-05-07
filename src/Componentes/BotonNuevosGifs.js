import React from "react"
import "./BotonNuevosGifs.css"

export default function BotonNuevosGifs(props){
    return <button className="boton-nuevos-gifs" type="button" onClick={props.gifsNuevos}>Mas gifs</button>
}