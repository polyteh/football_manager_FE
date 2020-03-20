import React, { useEffect, useState } from "react";
import { getStubTeam, getTeam, getTeamAxios } from "../../Services/teamServices";
import TeamPlayers from "../../Components/TeamPlayers/TeamPlayers";
import { getStubPlayers } from "../../Services/playerServices";

const Team = ({ passedTeam }) => {

  const initialTeamSquad=getStubPlayers();
  const initialTeamState = {
    Name: "",
    StadiumName: "",
    Players: initialTeamSquad
    // nestedProperty: {
    //   value: ""
    // }
  };

  const [team, setTeam] = useState(initialTeamState);
  const [score, setScore] = useState(0);
  //   const onClickHandler = () => {
  //     setTeam({
  //       ...team,
  //       nestedProperty: {
  //         ...team.nestedProperty,
  //         value: ""
  //       }
  //     });
  //   };

  useEffect(() => {
    const getTeamFromServer = async () => {
      console.log("passed team id", passedTeam);
      const teamFromServer = await getTeamAxios(passedTeam);
      console.log("team players info", teamFromServer.Players);
      setTeam(teamFromServer);

    };
    getTeamFromServer();
  },[passedTeam]);


  const onClickScoreHandler = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <h5 className="card-title">{team.Name}</h5>
      <h6>{team.StadiumName}</h6>
      <button onClick={onClickScoreHandler}>Score</button>
      <TeamPlayers players={team.Players} name={team.Name}/>
    </div>
  );
};

export default Team;
