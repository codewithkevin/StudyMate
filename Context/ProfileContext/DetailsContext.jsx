import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

export const DetailsContext = React.createContext();

const DetailsProvider = (props) => {
  const [purpose, setPurpose] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState(true);
  const [studyselected, setStudySelected] = useState(true);

  function fiendshippurpose() {
    if (studyselected == false) {
      return null;
    } else {
      setSelectedPurpose((current) => !current);
      selectedPurpose ? setPurpose("friends") : setPurpose("");
    }
  }

  function studyfunctions() {
    if (selectedPurpose == false) {
      return null;
    } else {
      setStudySelected((current) => !current);
      studyselected ? setPurpose("Study Mate") : setPurpose("");
    }
  }

  const values = {
    purpose,
    setPurpose,
    selectedPurpose,
    setSelectedPurpose,
    studyselected,
    setStudySelected,
  };
  return (
    <DetailsContext.Provider value={values}>
      {props.children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
