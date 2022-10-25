import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import { db } from "../firebase";
import * as ImagePicker from "expo-image-picker";

const CompleteProfile = () => {
  const [validationMessage, setValidationMessage] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState(null);

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
      <View>
        <Text className="mb-5 text-center text-2xl">Complete Profile</Text>
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
    </View>
  );
};

export default CompleteProfile;
