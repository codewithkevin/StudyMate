import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

export const InterestContext = React.createContext();

const InterestContextProvider = (props) => {
  const initialState = [];
  const [interest, setInterest] = useState([]);
  const [game, setGame] = useState(true);
  const [crypto, setCrypto] = useState(true);
  const [sport, setSport] = useState(true);

  function gamefun(event) {
    event.preventDefault();
    if (game == true) {
      setGame((current) => !current);
      setInterest((current) => [...current, "game"]);
    } else {
      setGame((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "game";
        })
      );
    }
  }

  function cryptofun(event) {
    event.preventDefault();
    if (crypto == true) {
      setCrypto((current) => !current);
      setInterest((current) => [...current, "crypto"]);
    } else {
      setCrypto((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "crypto";
        })
      );
    }
  }

  function sportfun(event) {
    event.preventDefault();
    if (sport == true) {
      setSport((current) => !current);
      setInterest((current) => [...current, "sport"]);
    } else {
      setSport((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "sport";
        })
      );
    }
  }

  const values = {
    game,
    interest,
    gamefun,
    cryptofun,
    crypto,
    sportfun,
    sport,
  };

  return (
    <InterestContext.Provider value={values}>
      {props.children}
    </InterestContext.Provider>
  );
};

export default InterestContextProvider;
