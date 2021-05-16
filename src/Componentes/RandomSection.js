import React,{useEffect,useState} from 'react';
import BuscadorRandomGifsAPI from '../js/BuscadorRandomGifAPI';
import "./RandomSection.css";
import Spinner from "./Spinner";
function RandomSection() {
    const [randomGif,setRandomGif] = useState([])
    const [nextRandomGif,setNextRandomGif] = useState(0)
    const [loading,setLoading] = useState(true)
    useEffect(async()=>{
        const dataGifRandom = await BuscadorRandomGifsAPI()
        setLoading(false)
        setRandomGif(dataGifRandom)
    },[nextRandomGif])

    function handleClickRandomGif(){
        setNextRandomGif(nextRandomGif+1);
        setLoading(true)
    }
    return (
       
            <div key={randomGif.id} className="random-gif-container" >
            <span className="title-random-gif-section">Random Gif</span>
            {loading ? 
                <Spinner></Spinner> : 
                <React.Fragment>
                    <img src={randomGif.url} className="image-random" onClick={handleClickRandomGif} height={randomGif.height} width={randomGif.width} style={{backgroundColor:"#000"}}/>
                    <span className="subtitle-random-gif">{randomGif.title}</span>
                </React.Fragment>
            }
             </div>
       
        
    )
}

export default RandomSection
