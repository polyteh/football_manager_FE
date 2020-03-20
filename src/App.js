import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Navbar";
import Teams from "./Components/Teams/Teams";
import { Route, BrowserRouter } from "react-router-dom";
import Players from "./Components/Players/Players";
import Player, {PlayerById} from "./Components/Player/Player"
import routes from "./Services/route"


function App() {

  const PlayerPage = () => {
    return (
      <h3>Player Page</h3>
    );
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-content-wrapper">
          <Route path={routes.teams} component={Teams} />
          <Route path={routes.players} component={Players} />
          <Route path={routes.player} component={PlayerById}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
