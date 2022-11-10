import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

export const InterestContext = React.createContext();

const InterestContextProvider = (props) => {
  const initialState = [];
  const [interest, setInterest] = useState([]);
  const [game, setGame] = useState(true);
  const [crypto, setCrypto] = useState(true);
  const [sport, setSport] = useState(true);
  const [cooking, setCooking] = useState(true);
  const [tech, setTech] = useState(true);
  const [music, setMusic] = useState(true);
  const [web, setWeb] = useState(true);
  const [art, setArt] = useState(true);
  const [religion, setReligion] = useState(true);
  const [travelling, setTravelling] = useState(true);

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

  const techfun = (event) => {
    event.preventDefault();
    if (tech == true) {
      setTech((current) => !current);
      setInterest((current) => [...current, "tech"]);
    } else {
      setTech((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "tech";
        })
      );
    }
  };

  const musicfun = (event) => {
    event.preventDefault();
    if (music == true) {
      setMusic((current) => !current);
      setInterest((current) => [...current, "music"]);
    } else {
      setMusic((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "music";
        })
      );
    }
  };

  const webfun = (event) => {
    e.preventdefault();
    if (web == true) {
      setWeb((current) => !current);
      setInterest((current) => [...current, "web"]);
    } else {
      setWeb((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "web";
        })
      );
    }
  };

  const artfun = (event) => {
    event.preventDefault();
    if (art == true) {
      setArt((current) => !current);
      setInterest((current) => [...current, "art"]);
    } else {
      setArt((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "art";
        })
      );
    }
  };

  const religionfun = (event) => {
    event.preventDefault();
    if (religion == true) {
      setReligion((current) => !current);
      setInterest((current) => [...current, "religion"]);
    } else {
      setReligion((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "religion";
        })
      );
    }
  };

  const travelfun = (event) => {
    event.preventDefault();
    if (travelling == true) {
      setTravelling((current) => !current);
      setInterest((current) => [...current, "travelling"]);
    } else {
      setTravelling((current) => !current);
      setInterest((current) =>
        current.filter((element) => {
          return element !== "travelling";
        })
      );
    }
  };

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
    religion,
    travelling,
    travelfun,
    religionfun,
    tech,
    music,
    web,
    art,
    artfun,
    webfun,
    musicfun,
    techfun,
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
