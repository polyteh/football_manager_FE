import axios from "axios";

export const getAllTeamsAxios = () => {
  return axios
    .get("https://localhost:44314/api/footballmanager/team/TeamNames")
    .then(res => {
      return res.data;
    });
};

export const getStubAllTeams = () => {
  return [{ Name: "Barcelona" }, { Name: " C" }];
};
