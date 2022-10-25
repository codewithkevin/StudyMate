import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";

const CompleteProfile = () => {
  const [validationMessage, setValidationMessage] = useState("");
  const [gender, setGender] = useState("");

  //ROutes
  const route = useRoute();

  //UseRoute is deprecated in favor of useNavigation
  const email = route.params.email;
  const auth = route.params.auth;
  const password = route.params.password;
  const name = route.params.name;

  async function createAccount() {
    email === "" || password === ""
      ? setValidationMessage("required filled missing")
      : "";
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const userRef = collection(db, "AccountProfile");
      addDoc(userRef, { gender, email, password, name })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      alert("Account Successfully Created");
    } catch (error) {
      setValidationMessage(error.message);
    }
  }

  return (
    <View className="p-5 mt-10">
      <Text>CompleteProfile</Text>
      <TextInput
        className="bg-gray-100 border border-gray-400 text-black text-sm rounded-[20px] block w-full p-4 placeholder-black"
        placeholder="Full name"
        placeholderTextColor="#000"
        containerStyle={{ marginTop: 10, backgroundColor: "white" }}
        value={gender}
        onChangeText={(text) => setGender(text)}
      />
      <TouchableOpacity
        onPress={createAccount}
        className="items-center mt-2 bg-[#075ADE] p-5 rounded-[15px]"
      >
        <Text className="text-white font-bold text-[15px]">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CompleteProfile;
