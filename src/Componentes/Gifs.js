import React from "react"
import "./gifs.css"

export default function Gifs(props){
    const coloresFondoImagen = ["#FFA400","#009FFD","#2A2A72","#53917E","#F56476"]
    const width =250;
    return  <div className="gifs">
                {props.gifs.map(gif=>
                    <img 
                        src={gif.url} 
                        key={gif.id} 
                        className="gif" 
                        height={width * gif.height / gif.width}
                        width={width} 
                        style={{
                            backgroundColor: coloresFondoImagen[Math.floor(Math.random()*6)]
                        }}
                    ></img>
                )}
            </div>
}
