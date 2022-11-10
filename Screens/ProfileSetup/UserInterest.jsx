import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { InterestContext } from "./../../Context/ProfileContext/InterestContext";
import { useInterestContext } from "./../../Hooks/useInterestContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import ModalPopup from "./../../Components/ModalPopup";
import { ErrorContext } from "./../../Context/AuthContext/CheckError";

//Firebase Support
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./../../firebase";
import { useDetailsContext } from "./../../Hooks/useDetailsContext";

const UserInterest = ({ navigation }) => {
  const {
    tech,
    music,
    web,
    art,
    artfun,
    webfun,
    musicfun,
    techfun,
    setGame,
    game,
    setInterest,
    interest,
    gamefun,
    setCrypto,
    cryptofun,
    crypto,
    sportfun,
    sport,
    religion,
    travelling,
    travelfun,
    religionfun,
  } = useInterestContext();

  const {
    validationMessage,
    setValidationMessage,
    modalVisible,
    setModalVisible,
    setEmail,
    setName,
    setPassword,
  } = useContext(ErrorContext);

  //ROutes
  const route = useRoute();
  const errorImage = "../AuthScreen/Assest/error.png";

  //UseRoute is deprecated in favor of useNavigation
  const email = route.params.email;
  const auth = getAuth();
  const password = route.params.password;
  const name = route.params.name;
  const id = route.params.id;
  const purpose = route.params.purpose;
  const gender = route.params.gender;
  const occupation = route.params.occupation;

  const UserDeatails = {
    dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
    accoutInfo: {
      email,
      password,
      name,
      purpose,
      gender,
      occupation,
      id,
      interest,
    },
  };

  async function createAccount(event) {
    event.preventDefault();
    if (interest.length >= 2) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "UserDeatils", id), UserDeatails);
        setEmail("");
        setName("");
        setPassword("");
        setInterest([]);
      } catch (error) {
        if (error) {
          setValidationMessage("Account Already Exists");
          setModalVisible(true);
        }
      }
    } else {
      setValidationMessage("Select at least 2 interest");
      setModalVisible(true);
    }
  }

  console.log(interest);

  return (
    <View className="p-4 mt-14">
      <View className="mb-3">
        <Image
          className="w-[150] h-[125px]"
          source={require("../AuthScreen/Assest/sammy-no-connection.png")}
        />
      </View>

      <View className="mb-10">
        <Text className="text-xl font-normal font-mono ml-5">
          Select your interests
        </Text>
      </View>

      <View className="flex-row ml-5 space-x-3 mb-4">
        <View className="flex-1">
          <TouchableOpacity
            onPress={gamefun}
            className={`border border-slate-400 ${
              game ? "border-slate-400" : "bg-[#075ADE]"
            } p-5  justify-center rounded-full items-center`}
          >
            <Text className={`${game ? "text-black" : "text-white"}`}>
              Gaming
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1">
          <TouchableOpacity
            onPress={cryptofun}
            className={`border border-slate-400 ${
              crypto ? "border-slate-400" : "bg-[#075ADE]"
            } p-5  justify-center rounded-full items-center`}
          >
            <Text className={`${crypto ? "text-black" : "text-white"}`}>
              Crypto
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1">
          <TouchableOpacity
            onPress={sportfun}
            className={`border border-slate-400 ${
              sport ? "border-slate-400" : "bg-[#075ADE]"
            } p-5  justify-center rounded-full items-center`}
          >
            <Text className={`${sport ? "text-black" : "text-white"}`}>
              Sport
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row ml-5 space-x-3 mb-4">
        <View className="flex-1">
          <TouchableOpacity
            onPress={techfun}
            className={`border border-slate-400 ${
              tech ? "border-slate-400" : "bg-[#075ADE]"
            } p-5  justify-center rounded-full items-center`}
          >
            <Text className={`${tech ? "text-black" : "text-white"}`}>
              Tech
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1">
          <TouchableOpacity
            onPress={musicfun}
            className={`border border-slate-400 ${
              music ? "border-slate-400" : "bg-[#075ADE]"
            } p-5  justify-center rounded-full items-center`}
          >
            <Text className={`${music ? "text-black" : "text-white"}`}>
              Music
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1">
          <TouchableOpacity
            onPress={artfun}
            className={`border border-slate-400 ${
              art ? "border-slate-400" : "bg-[#075ADE]"
            } p-5  justify-center rounded-full items-center`}
          >
            <Text className={`${art ? "text-black" : "text-white"}`}>Art</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row ml-5 space-x-3 mb-24">
        <View className="flex-1">
          <TouchableOpacity
            onPress={religionfun}
            className={`border border-slate-400 ${
              religion ? "border-slate-400" : "bg-[#075ADE]"
            } p-5  justify-center rounded-full items-center`}
          >
            <Text className={`${religion ? "text-black" : "text-white"}`}>
              Religious
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1">
          <TouchableOpacity
            onPress={travelfun}
            className={`border border-slate-400 ${
              travelling ? "border-slate-400" : "bg-[#075ADE]"
            } p-5  justify-center rounded-full items-center`}
          >
            <Text className={`${travelling ? "text-black" : "text-white"}`}>
              Travelling
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-row justify-center">
        <TouchableOpacity
          onPress={createAccount}
          className="items-center mt-2 bg-[#075ADE] p-5 rounded-full rounded-full]"
        >
          <Text className="text-md text-white font-bold">Create Account</Text>
        </TouchableOpacity>
      </View>

      <ModalPopup
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        validationMessage={validationMessage}
        image={require(errorImage)}
      />
    </View>
  );
};

export default UserInterest;
