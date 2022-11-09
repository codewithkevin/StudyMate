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
  const { game, interest, gamefun, cryptofun, crypto, sportfun, sport } =
    useInterestContext();

  const { setOccupation, setGender, setMale } = useDetailsContext();

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
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "UserDeatils", id), UserDeatails);
      setEmail("");
      setName("");
      setPassword("");
      
    } catch (error) {
      if (error) {
        setValidationMessage(error);
        setModalVisible(true);
      }
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

      <View className="flex-row ml-5 space-x-3">
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

      <View className="flex flex-row justify-center">
        <TouchableOpacity
          onPress={createAccount}
          className="items-center mt-2 bg-[#075ADE] p-5 rounded-full rounded-full]"
        >
          <AntDesign name="arrowright" size={34} color="white" />
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
