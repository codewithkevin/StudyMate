import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "./../../firebase";

//Icons Support
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const auth = getAuth();

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setvalidationMessage] = useState("");

  async function login() {
    if (email === "" || password === "") {
      setvalidationMessage("required filled missing");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("HomeScreen");
    } catch (error) {
      setvalidationMessage(error.message);
    }
  }

  return (
    <View className="flex-1 h-full w-full" style={styles.container}>
      <View className="mt-[10px] ml-12">
        <Image
          className="mb-[5] mt-10 w-24 h-[125px]"
          source={require("./Assest/sammy-no-connection.png")}
        />
        <Text className="font-medium text-2xl">Welcome</Text>
        <Text className="text-gray-400 w-64">Input your details here</Text>
      </View>
      <View className="items-center">
        <View className="mt-10 w-[80%]">
          <View className="mb-7">
            <TextInput
              className="bg-gray-100 border border-gray-400 text-black text-sm rounded-[20px] block w-full p-4 placeholder-black"
              placeholder="Email"
              placeholderTextColor="#000"
              containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View className="mb-7">
            <TextInput
              className="bg-gray-100 border border-gray-400 text-black text-sm rounded-[20px] block w-full p-4 placeholder-black"
              placeholder="Password"
              placeholderTextColor="#000"
              containerStyle={{ marginTop: 10 }}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              secureTextEntry={true}
            />
            <TouchableOpacity className="mt-2 rounded-[15px]">
              <Text className="text-black  text-right font-medium text-[15px]">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={login}
            className="items-center mt-2 bg-[#075ADE] p-5 rounded-[15px]"
          >
            <Text className="text-white font-bold text-[15px]">Login</Text>
          </TouchableOpacity>
          {
            <Text className="text-center" style={styles.error}>
              {validationMessage}
            </Text>
          }

          <View className="mt-2">
            <Text className="text-lg text-center">Or</Text>
            <View className="flex justify-evenly flex-row mt-2">
              <View>
                <TouchableOpacity className="items-center  bg-blue-600 p-5 rounded-full">
                  <View className="flex">
                    <FontAwesome5 name="facebook" size={24} color="white" />
                  </View>
                </TouchableOpacity>
                <Text className="mt-2">Facebook</Text>
              </View>
              <View>
                <TouchableOpacity className="items-center  bg-gray-300 p-5 rounded-full">
                  <View className="flex">
                    <Fontisto
                      name={"google"}
                      color={"blue"}
                      size={24}
                      // onPress={toggleIsLoading}
                    />
                  </View>
                </TouchableOpacity>
                <Text className="mt-2 text-center">Google</Text>
              </View>
              <View>
                <TouchableOpacity className="items-center  bg-gray-300 p-5 rounded-full">
                  <View className="flex">
                    <AntDesign name="apple1" size={24} color="black" />
                  </View>
                </TouchableOpacity>
                <Text className="mt-2 text-center">Apple</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  error: {
    marginTop: 10,
    color: "red",
  },
});
