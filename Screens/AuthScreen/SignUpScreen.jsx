import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import React, { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./../../firebase";
import ModalPopup from "./../../Components/ModalPopup";
import { ErrorContext } from "./../../Context/AuthContext/CheckError";

const auth = getAuth();

const SignUpScreen = ({ navigation }) => {
  const errorImage = "../AuthScreen/Assest/error.png";
  const id = uuidv4();

  const {
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    validationMessage,
    setValidationMessage,
    modalVisible,
    setModalVisible,
  } = useContext(ErrorContext);

  function checkerror(e) {
    e.preventdefault;
    const regex = /\@./;
    if (email === "" || password === "" || name == "") {
      setValidationMessage("required filled missing");
      setModalVisible(true);
    } else if (regex.test(email) === false) {
      setValidationMessage("Email not valid");
      setModalVisible(true);
    } else if (password.length < 6) {
      setValidationMessage("Password too short");
      setModalVisible(true);
    } else {
      navigation.navigate("profile", {
        email: email,
        auth: auth,
        password: password,
        name: name,
        id: id,
      });
      setEmail("");
      setPassword("");
      setName("");
    }
  }

  return (
    <KeyboardAvoidingView className="flex-1 h-full w-full">
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
          <TouchableOpacity
            onPress={checkerror}
            className="items-center mt-2 bg-[#075ADE] p-5 rounded-[15px]"
          >
            <Text className="text-white font-bold text-[15px]">Continue</Text>
          </TouchableOpacity>

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

            <ModalPopup
              setModalVisible={setModalVisible}
              modalVisible={modalVisible}
              validationMessage={validationMessage}
              image={require(errorImage)}
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
