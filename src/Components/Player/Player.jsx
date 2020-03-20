import React from "react";

const Player = ({curPlayer}) => {


  return (
    <div>
      {curPlayer.Name}
    </div>
  );
};

export default Player;


export const PlayerById = ({match, location}) => {

  const { params: { playerId } } = match;
  return (
    <div>
      {playerId} -  playerId
    </div>
  );
};

