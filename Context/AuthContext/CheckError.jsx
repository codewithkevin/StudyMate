import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const ErrorContext = React.createContext();

const CheckErrorProvider = (props) => {
  let id = uuidv4();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function checkerror() {
    const regex = /\@./;
    if (email === "" || password === "" || name == "") {
      setValidationMessage("required filled missing");
      setModalVisible(true);
    } else if (regex.test(email) === false) {
      setValidationMessage("Email not valid");
      setModalVisible(true);
    } else if (password.length < 6) {
      setValidationMessage("Password too short");
      setModalVisible(true);
    } else {
      navigation.navigate("profile", {
        email: email,
        auth: auth,
        password: password,
        name: name,
      });
    }
  }

  const values = {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    validationMessage,
    setValidationMessage,
    modalVisible,
    setModalVisible,
    checkerror,
  };

  return (
    <ErrorContext.Provider value={values}>
      {props.children}
    </ErrorContext.Provider>
  );
};

export default CheckErrorProvider;
