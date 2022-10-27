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
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { CountryPicker } from "react-native-country-codes-picker";
import DropDownPicker from "react-native-dropdown-picker";

//Firebase Import API
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./../../firebase";

//Icons Support
import { AntDesign } from "@expo/vector-icons";

const CompleteProfile = ({ navigation }) => {
  const [validationMessage, setValidationMessage] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+233");
  const [number, setNumber] = useState("");
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [clicked, setClicked] = useState(true);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

  const PhoneNumber = countryCode.concat(setNumber);

  //ROutes
  const route = useRoute();

  //UseRoute is deprecated in favor of useNavigation
  const email = route.params.email;
  const auth = route.params.auth;
  const password = route.params.password;
  const name = route.params.name;

  //Function To Create Firebase Account and db
  async function createAccount() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const userRef = collection(db, "AccountProfile");
      addDoc(userRef, {
        email,
        password,
        name,
        PhoneNumber,
        username,
        items,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      setValidationMessage(error.message);
    }
  }

  //Function to call Image Picker
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
        <View className="mb-5 mt-4">
          <TextInput
            className="bg-gray-200 border border-gray-400 text-black text-sm rounded-[10px] block w-full p-4 placeholder-black"
            placeholder="UserName"
            placeholderTextColor="#000"
            containerStyle={{ marginTop: 10, backgroundColor: "white" }}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View className="mb-5">
          <View className="relative">
            <TextInput
              className="bg-gray-200 text-center border border-gray-400 text-black text-sm rounded-[10px] block w-full p-4 placeholder-black"
              placeholder={"Phone Number"}
              placeholderTextColor="#000"
              value={number}
              onChangeText={(text) => setNumber(text)}
              containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              required
            />
            <TouchableOpacity onPress={() => setShow(true)}>
              <Text className="text-black absolute mt-1 left-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
                {countryCode}
              </Text>
            </TouchableOpacity>
            <CountryPicker
              show={show}
              // when picker button press you will get the country object with dial code
              pickerButtonOnPress={(item) => {
                setCountryCode(item.dial_code);
                setShow(false);
              }}
            />
            <View className="mt-5 mb-20">
              <DropDownPicker
                className="bg-gray-200"
                placeholder="Gender"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
              
            </View>
          </View>
        </View>

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
