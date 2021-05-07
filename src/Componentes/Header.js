import React,{useState,useEffect,useContext} from "react";
import "./Header.css";
import {Link,useHistory,useParams} from "react-router-dom";
import Logo from "../assets/logo.svg"
import {Context} from "../context/Context";

export default function Header(){
    const [searchTerm,setSearchTerm] = useState("");
    const [keyword,setKeyword] = useState("")
    const {location,push} = useHistory();
    const {pathname} = location
    const {theme} = useContext(Context)
    function handleChange(e){
        setSearchTerm(e.target.value);
    }
    function handleClick(e){
        e.preventDefault();
       push(`/search/${searchTerm}`);
    }
    useEffect(()=>{
       pathname.indexOf("/search") >= 0 && setKeyword(pathname.substr(8))
    },[keyword])
    return <div className={`header-container ${theme}`}>
                <Link to="/" onClick={()=>{
                    setKeyword("")
                    setSearchTerm("")
                }}>
                    <img src={Logo} height="60" className="logo-header"/>
                </Link>
                <form  className="buscador" onSubmit={handleClick}>
                    <input type="text" placeholder="Buscar un gif..."  className="input-buscador" onChange={handleChange} value={searchTerm || keyword}/>
                    <button className="boton-buscador">Buscar</button>
                </form>
            </div>
            
}