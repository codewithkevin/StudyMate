import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";

export const DetailsContext = React.createContext();

const DetailsProvider = (props) => {
  //Purpose State
  const [purpose, setPurpose] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState(true);
  const [studyselected, setStudySelected] = useState(true);

  //Gender Context
  const [gender, setGender] = useState("");
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(true);
  const [unisex, setUnisex] = useState(true);

  //Occupation Context
  const [occupation, setOccupation] = useState("");
  const [student, setStudent] = useState(true);
  const [occupant, setOccupant] = useState(true);

  //Occupation function
  function studentfuction() {
    if (occupant == false) {
      return null;
    } else {
      setStudent((current) => !current);
      student ? setOccupation("Student") : setOccupation("");
    }
  }

  function occupantfunction() {
    if (student == false) {
      return null;
    } else {
      setOccupant((current) => !current);
      occupant ? setOccupation("Worker") : setOccupation("");
    }
  }

  //Gender Functions
  function malefunction() {
    if (female == false || unisex == false) {
      return null;
    } else {
      setMale((current) => !current);
      male ? setGender("Male") : setGender("");
    }
  }

  function femalefunction() {
    if (male == false || unisex == false) {
      return null;
    } else {
      setFemale((current) => !current);
      female ? setGender("Female") : setGender("");
    }
  }

  function unisexfunction() {
    if (male == false || female == false) {
      return null;
    } else {
      setUnisex((current) => !current);
      unisex ? setGender("Unisex") : setGender("");
    }
  }

  //Purpose Functions
  function friendshipfunction() {
    if (studyselected == false) {
      return null;
    } else {
      setSelectedPurpose((current) => !current);
      selectedPurpose ? setPurpose("friendship") : setPurpose("");
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
    occupantfunction,
    studentfuction,
    occupant,
    setOccupant,
    student,
    setStudent,
    occupation,
    setOccupation,
    unisex,
    setUnisex,
    unisexfunction,
    female,
    setFemale,
    femalefunction,
    malefunction,
    gender,
    setGender,
    male,
    setMale,
    purpose,
    setPurpose,
    selectedPurpose,
    setSelectedPurpose,
    studyselected,
    setStudySelected,
    friendshipfunction,
    studyfunctions,
  };
  return (
    <DetailsContext.Provider value={values}>
      {props.children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
