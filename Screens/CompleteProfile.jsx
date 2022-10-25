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
import { db } from "../firebase";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";

const CompleteProfile = () => {
  const [validationMessage, setValidationMessage] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  const [timePicker, setTimePicker] = useState(false);

  const [time, setTime] = useState(new Date(Date.now()));

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View className="p-5 mt-10">
      <View className="flex flex-row space-x-1">
        <View className="mt-1">
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="mb-5 text- text-2xl">Fill your Profile</Text>
        </View>
      </View>
      <View className="flex justify-center items-center static">
        {image ? (
          <Image
            source={{
              uri: image,
            }}
            className="rounded-full w-[200] h-[200] border-gray-900"
          />
        ) : (
          <Image
            source={{
              uri: `https://images.unsplash.com/photo-1662581871625-7dbd3ac1ca18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80`,
            }}
            className="rounded-full w-[200] h-[200]"
          />
        )}
        <View className="absolute bottom-0 right-24 ...">
          <TouchableOpacity
            onPress={pickImage}
            className="bg-gray-200 p-3 rounded-full"
          >
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View className="mb-7 mt-4">
          <TextInput
            className="bg-gray-200 border border-gray-400 text-black text-sm rounded-[10px] block w-full p-4 placeholder-black"
            placeholder="UserName"
            placeholderTextColor="#000"
            containerStyle={{ marginTop: 10, backgroundColor: "white" }}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View>
          <View className="relative">
            <TextInput
              className="bg-gray-200 border border-gray-400 text-black text-sm rounded-[10px] block w-full p-4 placeholder-black"
              placeholder={date.toDateString()}
              placeholderTextColor="#000"
              containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              required
            />
            <TouchableOpacity onPress={showDatePicker}>
              <Text className="text-white absolute right-2.5 bottom-2.5   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2">
                <AntDesign name="camerao" size={24} color="black" />
              </Text>
            </TouchableOpacity>
            {datePicker && (
              <DateTimePicker
                value={date}
                mode={"date"}
                display={Platform.OS === "ios" ? "spinner" : "default"}
                is24Hour={true}
                onChange={onDateSelected}
                style={styleSheet.datePicker}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default CompleteProfile;

const styleSheet = StyleSheet.create({
  text: {
    fontSize: 25,
    color: "red",
    padding: 3,
    marginBottom: 10,
    textAlign: "center",
  },

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: "right",
    alignItems: "flex-start",
    borderRadius: "52px",
    marginTop: 10,
    width: 320,
    height: 260,
    display: "flex",
    backgroundColor: "gray",
    color: "gray",
  },
});
