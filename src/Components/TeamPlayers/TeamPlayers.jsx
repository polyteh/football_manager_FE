import React, { useEffect, useState } from "react";
import { getStubPlayers } from "../../Services/playerServices";
import Player from "../Player/Player";
import { Link } from "react-router-dom";

const TeamPlayers = ({ players, name }) => {
  const initialState = getStubPlayers();
  const [getPlayers, setPlayers] = useState(initialState);

  useEffect(() => {
    setPlayers(players);
    console.log("teamPlayers player list", players);
    console.log("teamPlayers team name", name);
  }, [players]);

  const mapPlayers = getPlayers.map((player, i) => {
    return (
      <div>
        <Link to={`/player/${player.Id}`}>{player.Name}</Link>
        <Player curPlayer={player} key={player.Id} />
      </div>
    );
  });

  return (
    <div>
      Team players
      {mapPlayers}
    </div>
  );
};

export default TeamPlayers;
