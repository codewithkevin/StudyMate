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
import { db } from "../firebase";

const CompleteProfile = () => {
  const [validationMessage, setValidationMessage] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [selected, setSelected] = useState(false);
  const [value, setValue] = useState("");

  function choosen(e) {
    e.preventDefault;
    selected ? setValue("") : setValue("choosen");
    setSelected((current) => !current);
    alert(selected);
  }

  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [clicked, setClicked] = useState(true);

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

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };

  return (
    <View className="p-5 mt-10">
      <View className="mb-5">
        <Text className="text-2xl">You are looking for a/an?</Text>
        <View className="flex flex-row justify-evenly mb-5">
          <View className="mt-5">
            <TouchableOpacity className="border border-slate-400 p-5 w-[84] h-[84] justify-center rounded-full items-center">
              <Ionicons name="people-outline" size={24} color="black" />
            </TouchableOpacity>
            <View className="mt-2">
              <Text className="text-center text-lg">Friends</Text>
            </View>
          </View>
          <View className="mt-5">
            <TouchableOpacity className="border border-slate-400 p-5 w-[84] h-[84] justify-center rounded-full items-center">
              <AntDesign name="book" size={24} color="black" />
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
      </View>

      <View className="mb-5">
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
