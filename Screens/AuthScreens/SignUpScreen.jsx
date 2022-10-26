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
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

//Import Icons for Support
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

//Firebase Import
import { collection, addDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "./../../firebase";

const auth = getAuth();

const SignUpScreen = ({ navigation }) => {
  let id = uuidv4();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  let validateAndSet = (value, setValue) => {
    setValue(value);
  };

  async function createAccount() {
    email === "" || password === ""
      ? setValidationMessage("required filled missing")
      : "";
    try {
      // // await createUserWithEmailAndPassword(auth, email, password);
      // const userRef = collection(db, "Test");
      // addDoc(userRef, { name, email, password, id })
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      navigation.navigate("profile", {
        email: email,
        auth: auth,
        password: password,
        name: name,
      });
    } catch (error) {
      setValidationMessage(error.message);
    }
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 h-full w-full"
      style={styles.container}
    >
      <View className="mt-[10px] ml-12 mb-5">
        <Image
          className="mb-[10] mt-10 w-24 h-[125px]"
          source={require("./Assest/sammy-no-connection.png")}
        />
        <Text className="font-medium text-2xl">Hello There</Text>
        <Text className="text-gray-400 w-64">
          Enter your Information bellow or sign up with a social media account
        </Text>
      </View>
      <View className="items-center">
        <View className="mt-10 w-[80%]">
          <View className="mb-7">
            <TextInput
              className="bg-gray-100 border border-gray-400 text-black text-sm rounded-[20px] block w-full p-4 placeholder-black"
              placeholder="Full name"
              placeholderTextColor="#000"
              containerStyle={{ marginTop: 10, backgroundColor: "white" }}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
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
          </View>
          {/* <View className="mb-3">
            <TextInput
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="confirm password"
              containerStyle={{ marginTop: 10 }}
              value={confirmPassword}
              onChangeText={(value) =>
                validateAndSet(value, setConfirmPassword)
              }
              secureTextEntry
              onBlur={() => checkPassword(password, confirmPassword)}
            />
          </View> */}
          <TouchableOpacity
            onPress={createAccount}
            className="items-center mt-2 bg-[#075ADE] p-5 rounded-[15px]"
          >
            <Text className="text-white font-bold text-[15px]">
              Get Started
            </Text>
          </TouchableOpacity>
          {
            <Text className="text-center" style={styles.error}>
              {validationMessage}
            </Text>
          }

          <View className="mt-2">
            <Text className="text-lg text-center">Or</Text>
            <View className="flex justify-evenly flex-row mt-2">
              <TouchableOpacity className="items-center  bg-blue-600 p-5 rounded-full">
                <View className="flex">
                  <FontAwesome5 name="facebook" size={24} color="white" />
                </View>
              </TouchableOpacity>
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
              <TouchableOpacity className="items-center  bg-gray-300 p-5 rounded-full">
                <View className="flex">
                  <AntDesign name="apple1" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>

            <View className="mt-10 items-center flex justify-center">
              <View className="flex flex-row space-x-2">
                <Text className="flex">Already Have An Account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("singin")}
                  className="items-center"
                >
                  <Text className="text-[#075ADE] font-bold">Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  error: {
    marginTop: 10,
    color: "red",
  },
});
