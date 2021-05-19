import React from "react"
import "./BotonNuevosGifs.css"

export default function BotonNuevosGifs({nuevosGifs}){
    return <button className="boton-nuevos-gifs" type="button" onClick={nuevosGifs} data-test-id="agregar-gifs">Mas gifs</button>
}