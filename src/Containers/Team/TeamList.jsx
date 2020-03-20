import Select from "react-select";
import React, { useEffect, useState } from "react";
import {
  getAllTeamsAxios,
  getStubAllTeams
} from "../../Services/allTeamsServices";

const TeamList = ({ handleSelectedProduct, selectedProduct }) => {
  const initialState = getStubAllTeams();
  const [teams, setTeams] = useState(initialState);


  useEffect(() => {
    const getAllTeamsFromServer = async () => {
      const allTeamsNotStub = getAllTeamsAxios().then(res => {
        setTeams(res);
      });
    };
    getAllTeamsFromServer();
  }, []);

  const editedArray = teams.map(item => {
    let newItem = {};
    newItem["label"] = item.Name;
    newItem["value"] = item.Id;
    return newItem;
  });

  const onChangeTeamHandler = item => {
    console.log("item", item);
    handleSelectedProduct(item.value);
  };

  return (
    <div>
      <Select onChange={onChangeTeamHandler} options={editedArray} />
    </div>
  );
};

export default TeamList;
