import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

//Components and SCreens Support
import ModalPopup from "./../../Components/ModalPopup";

//Context Import
import { useDetailsContext } from "./../../Hooks/useDetailsContext";
import { ErrorContext } from "./../../Context/AuthContext/CheckError";

//Firebase Support
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./../../firebase";

//Icons Support
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const CompleteProfile = ({ navigation }) => {
  const {
    validationMessage,
    setValidationMessage,
    modalVisible,
    setModalVisible,
  } = useContext(ErrorContext);

  //ROutes
  const route = useRoute();
  const errorImage = "../AuthScreen/Assest/error.png";

  const {
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
  } = useDetailsContext();

  //UseRoute is deprecated in favor of useNavigation
  const email = route.params.email;
  const auth = route.params.auth;
  const password = route.params.password;
  const name = route.params.name;
  const id = route.params.id;

  function checkerror(e) {
    e.preventdefault;
    navigation.navigate("interest", {
      email: email,
      auth: auth,
      password: password,
      name: name,
      id: id,
      purpose: purpose,
      gender: gender,
      occupation: occupation,
    });
  }

  return (
    <View className="p-5 mt-10">
      <View className="mb-5">
        <Text className="text-2xl">You are looking for a/an?</Text>
        <View className="flex flex-row justify-evenly mb-5">
          <View className="mt-5">
            <TouchableOpacity
              onPress={friendshipfunction}
              className={`border ${
                selectedPurpose ? "border-slate-400" : "bg-[#075ADE]"
              } p-5 w-[84] h-[84] justify-center rounded-full items-center`}
            >
              <Ionicons
                name="people-outline"
                size={24}
                color={`${selectedPurpose ? "black" : "white"}`}
              />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Friends</Text>
            </View>
          </View>
          <View className="mt-5">
            <TouchableOpacity
              onPress={studyfunctions}
              className={`border ${
                studyselected ? "border-slate-400" : "bg-[#075ADE]"
              } p-5 w-[84] h-[84] justify-center rounded-full items-center`}
            >
              <AntDesign
                name="book"
                size={24}
                color={`${studyselected ? "black" : "white"}`}
              />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Study Mate</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="mb-5">
        <Text className="text-2xl">Your Gender</Text>
        <View className="flex flex-row justify-evenly mb-5">
          <View className="mt-5">
            <TouchableOpacity
              onPress={malefunction}
              className={`border ${
                male ? "border-slate-400" : "bg-[#075ADE]"
              } p-5 w-[84] h-[84] justify-center rounded-full items-center`}
            >
              <Foundation
                name="male"
                size={24}
                color={`${male ? "black" : "white"}`}
              />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Male</Text>
            </View>
          </View>
          <View className="mt-5">
            <TouchableOpacity
              onPress={femalefunction}
              className={`border ${
                female ? "border-slate-400" : "bg-[#075ADE]"
              } p-5 w-[84] h-[84] justify-center rounded-full items-center`}
            >
              <FontAwesome5
                name="female"
                size={24}
                color={`${female ? "black" : "white"}`}
              />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Female</Text>
            </View>
          </View>
          <View className="mt-5">
            <TouchableOpacity
              onPress={unisexfunction}
              className={`border ${
                unisex ? "border-slate-400" : "bg-[#075ADE]"
              } p-5 w-[84] h-[84] justify-center rounded-full items-center`}
            >
              <Entypo
                name="awareness-ribbon"
                size={24}
                color={`${unisex ? "black" : "white"}`}
              />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Unisex</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="mb-5">
        <Text className="text-2xl">Your Occupation</Text>
        <View className="flex flex-row justify-evenly mb-5">
          <View className="mt-5">
            <TouchableOpacity
              onPress={studentfuction}
              className={`border ${
                student ? "border-slate-400" : "bg-[#075ADE]"
              } p-5 w-[84] h-[84] justify-center rounded-full items-center`}
            >
              <Ionicons
                name="ios-person-outline"
                size={24}
                color={`${student ? "black" : "white"}`}
              />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Student</Text>
            </View>
          </View>
          <View className="mt-5">
            <TouchableOpacity
              onPress={occupantfunction}
              className={`border ${
                occupant ? "border-slate-400" : "bg-[#075ADE]"
              } p-5 w-[84] h-[84] justify-center rounded-full items-center`}
            >
              <Ionicons
                name="ios-git-network"
                size={24}
                color={`${occupant ? "black" : "white"}`}
              />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Worker</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="flex flex-row justify-center">
        <TouchableOpacity
          onPress={checkerror}
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

export default CompleteProfile;
