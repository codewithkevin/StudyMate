import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

export const InterestContext = React.createContext();

const InterestContextProvider = (props) => {
  const [interest, setInterest] = useState("");
  const [game, setGame] = useState(false);

  function gamefun(event) {
    event.preventDefault();
    if (game == true) {
      setGame((current) => !current);
      setInterest((current) => [...current, "game"]);
    } else {
      setGame((current) => !current);
    }
  }

  const values = { game, interest, gamefun };

  return (
    <InterestContext.Provider value={values}>
      {props.children}
    </InterestContext.Provider>
  );
};

export default InterestContextProvider;
