import React,{useContext} from 'react'
import { Context } from '../context/Context'
import "./ThemeManager.css"

function ThemeManager() {
    const {theme,setTheme} = useContext(Context)

    function handleChangeTheme(){
        setTheme(theme =="ligth" ? "dark" : "ligth")
    }
    return (
        <div className="switch-container">
            <label className="switch">
                <input type="checkbox" value={theme} onChange={handleChangeTheme}/>
                <span className="slider round"></span>
            </label>
         </div>
    )
}

export default ThemeManager
