import axios from "axios";

export const getTeam = teamId => {
  //return fetch("https://localhost:44327/api/Values/" + teamId)
  return fetch(
    "https://localhost:44314/api/footballmanager/team/GetTeamById/" + teamId
  )
    .then(response => response.json())
    .then(res => {
      return res;
    });
};

export const getStubTeam = () => {
  return {
    Name: "Barcelona",
    StadiumName: "CampNou"
  };
};

export const getTeamAxios = teamId => {
  return axios
    .get(
      "https://localhost:44314/api/footballmanager/team/GetTeamById/" + teamId
    )
    .then(res => {
      console.log('Team services', res.data);
      return res.data;
    });
};


