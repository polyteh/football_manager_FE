import React, { useState, useEffect } from "react";
import Team from "../../Containers/Team/Team";
import TeamList from "../../Containers/Team/TeamList";

const Teams = () => {
    const [selectedTeamId, setSelectedTeamId] = useState(2072);

    
  return (
    <div>
      <TeamList
        handleSelectedProduct={setSelectedTeamId}
        selectedProduct={selectedTeamId}
      />
      <Team passedTeam={selectedTeamId} />
    </div>
  );
};

export default Teams;
