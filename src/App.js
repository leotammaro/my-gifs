import React from "react";
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
function App() {
 
  return (
    <Router>
      <div className="App">
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
  );
}

export default App;
