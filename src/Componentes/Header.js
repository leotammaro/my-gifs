import React,{useState,useEffect} from "react";
import "./Header.css";
import {Link,useHistory,useParams} from "react-router-dom";
import Logo from "../assets/logo.svg"

export default function Header(){
    const [searchTerm,setSearchTerm] = useState("");
    const [keyword,setKeyword] = useState("")
    const {location,push} = useHistory();
    const {pathname} = location
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
    return <div className="header-container">
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