import React,{useContext} from 'react';
import { Context } from '../context/Context';
import "./GifsComponent.css";

function GifsComponent({dataGifs,section}) {
    const width = 245;
    const colors = ["#AFE4C1","#B5EB58","#EA8B30","#D4374A","#0099FF"];
    const {theme} = useContext(Context);

    return <div className="gifs-search-container">
                <span className={`tittle-section ${theme}`}>{section}</span>
                <div className="section-container">
                    {dataGifs.map(gif=>{
                        const colorRandom = colors[Math.floor(Math.random()*5)]
                        return  <img key={gif.id} src={gif.url} width={width} className="image-gif" height={width*gif.height/gif.width} style={{background:colorRandom}}></img>         
                    })
                    }
                </div>
             </div>
}

export default GifsComponent
