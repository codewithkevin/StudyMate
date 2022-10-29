import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import { db } from "./../../firebase";

const CompleteProfile = () => {
  //ROutes
  const route = useRoute();

  const [purpose, setPurpose] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState(true);
  const [studyselected, setStudySelected] = useState(true);

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
        date,
        completed,
        username,
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

  console.log(purpose);

  return (
    <View className="p-5 mt-10">
      <View className="mb-5">
        <Text className="text-2xl">You are looking for a/an?</Text>
        <View className="flex flex-row justify-evenly mb-5">
          <View className="mt-5">
            <TouchableOpacity
              onPress={fiendshippurpose}
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
              <AntDesign name="book" size={24} color="black" />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Study Mate</Text>
            </View>
          </View>
        </View>
      </View>

      {/* <View className="mb-5">
        <Text className="text-2xl">Your Gender</Text>
        <View className="flex flex-row justify-evenly mb-5">
          <View className="mt-5">
            <TouchableOpacity className="border border-slate-400 p-5 w-[84] h-[84] justify-center rounded-full items-center">
              <Foundation name="male" size={24} color="black" />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Male</Text>
            </View>
          </View>
          <View className="mt-5">
            <TouchableOpacity className="border border-slate-400 p-5 w-[84] h-[84] justify-center rounded-full items-center">
              <FontAwesome5 name="female" size={24} color="black" />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Female</Text>
            </View>
          </View>
          <View className="mt-5">
            <TouchableOpacity className="border border-slate-400 p-5 w-[84] h-[84] justify-center rounded-full items-center">
              <Entypo name="awareness-ribbon" size={24} color="black" />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Unisex</Text>
            </View>
          </View>
        </View>
      </View> */}

      {/* <View className="mb-5">
        <Text className="text-2xl">Your Occupation</Text>
        <View className="flex flex-row justify-evenly mb-5">
          <View className="mt-5">
            <TouchableOpacity className="border border-slate-400 p-5 w-[84] h-[84] justify-center rounded-full items-center">
              <Ionicons name="ios-person-outline" size={24} color="black" />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Student</Text>
            </View>
          </View>
          <View className="mt-5">
            <TouchableOpacity className="border border-slate-400 p-5 w-[84] h-[84] justify-center rounded-full items-center">
              <Ionicons name="ios-git-network" size={24} color="black" />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Worker</Text>
            </View>
          </View>
        </View>
      </View> */}

      <View>
        <TouchableOpacity
          onPress={createAccount}
          className="items-center mt-2 bg-[#075ADE] p-5 rounded-[15px]"
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
