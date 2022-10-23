import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { Zocial } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  return (
    <View
      className="flex-1 h-full w-full bg-white items-center"
      style={styles.container}
    >
      <View className="mt-[140px]">
        <Text className="font-bold text-[20px]">Welcome to Movietime!</Text>
        <Text className="text-center">Your movie is ready</Text>
      </View>
      <View className="mt-10 w-[80%]">
        <View className="mb-7">
          <TextInput
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            containerStyle={{ marginTop: 10, backgroundColor: "white" }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View className="mb-7">
          <TextInput
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            containerStyle={{ marginTop: 10 }}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <View className="mb-3">
          <TextInput
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="confirm password"
            containerStyle={{ marginTop: 10 }}
            value={confirmPassword}
            onChangeText={(value) => validateAndSet(value, setConfirmPassword)}
            secureTextEntry
            onBlur={() => checkPassword(password, confirmPassword)}
          />
        </View>
        <TouchableOpacity
        //   onPress={createAccount}
          className="items-center mt-10 bg-[#FB5558] p-5 rounded-[30px]"
        >
          <Text className="text-white font-bold text-[15px]">SIGN UP</Text>
        </TouchableOpacity>
        {
          <Text className="text-center" style={styles.error}>
            {validationMessage}
          </Text>
        }

        <View className="mt-10">
          <Text className="text-sm text-center text-gray-400 font-bold">
            or continue with
          </Text>
          <View className="flex justify-between flex-row">
            <TouchableOpacity className="items-center mt-10 bg-blue-600 p-5 rounded-[30px]">
              <View className="flex flex-row space-x-2">
                <Zocial
                  name={"facebook"}
                  color={"white"}
                  size={20}
                  // onPress={toggleIsLoading}
                />
                <Text className="text-white font-light mt-1 text-[15px]">
                  FACEBOOK
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="items-center mt-10 bg-gray-300 p-5 rounded-[30px]">
              <View className="flex flex-row space-x-2">
                <Fontisto
                  name={"google"}
                  color={"blue"}
                  size={20}
                  // onPress={toggleIsLoading}
                />
                <Text className="text-black font-light text-[15px]">
                  Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="mt-10 items-center">
            <View>
              <Text className="flex">Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("singin")}
                className="mt-3 items-center"
              >
                <Text className="text-blue-400 font-bold">SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    // // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // bottom: 50,
  },
  error: {
    marginTop: 10,
    color: "red",
  },
});