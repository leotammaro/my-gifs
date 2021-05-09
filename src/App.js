import React,{useState} from "react";
import './App.css';
import Home from "./Componentes/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PaginaCategoria from "./Componentes/PaginaCategoria";
import GifsResults from "./Componentes/GifsResults";
import Header from "./Componentes/Header"
import {Context} from "./context/Context";
import ThemeManager from "./Componentes/ThemeManager";

function App() {
  const [theme,setTheme] = useState("dark")
  return (
    <Context.Provider value={{theme,setTheme}}>
      <Router>
        <div className={`App ${theme}`}>
          <ThemeManager />
        <div className="search-container">
        <Header/>
        </div>
          <Switch>
            <Route path="/section/:section">
              <PaginaCategoria></PaginaCategoria>
            </Route>
            <Route path="/search/:keyword">
              <GifsResults></GifsResults>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
