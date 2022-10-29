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

//Context Import
import { DetailsContext } from "./../../Context/ProfileContext/DetailsContext";

//Firebase Support
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./../../firebase";

//Icons Support
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const CompleteProfile = () => {
  //ROutes
  const route = useRoute();

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
  } = useContext(DetailsContext);

  //UseRoute is deprecated in favor of useNavigation
  const email = route.params.email;
  const auth = route.params.auth;
  const password = route.params.password;
  const name = route.params.name;

  async function createAccount() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const userRef = collection(db, "AccountProfile");
      addDoc(userRef, {
        email,
        password,
        name,
        purpose,
        gender,
        occupation,
      })
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
          onPress={createAccount}
          className="items-center mt-2 bg-[#075ADE] p-5 rounded-full rounded-full]"
        >
          <Text className="text-white font-bold text-[15px]">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CompleteProfile;

// const styleSheet = StyleSheet.create({
//   text: {
//     fontSize: 25,
//     color: "red",
//     padding: 3,
//     marginBottom: 10,
//     textAlign: "center",
//   },

//   // Style for iOS ONLY...
//   datePicker: {
//     justifyContent: "right",
//     alignItems: "flex-start",
//     borderRadius: "52px",
//     marginTop: 10,
//     width: 320,
//     height: 260,
//     display: "flex",
//     backgroundColor: "gray",
//     color: "gray",
//   },
// });
