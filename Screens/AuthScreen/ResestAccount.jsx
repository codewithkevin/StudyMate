import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ResestAccount = ({ navigation: { goBack } }) => {
  return (
    <View className="p-5 mt-10">
      <View className="mb-5 flex flex-row">
        <TouchableOpacity
          onPress={() => goBack()}
          className="items-center  bg-blue-600 p-5 rounded-full"
        >
          <View className="flex">
            <AntDesign name="arrowleft" size={22} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <View className="flex justify-center items-center">
        <Image className="" source={require("./Assest/assistant.png")} />
      </View>
      <View className="mt-7">
        <View className="mb-10">
          <Text className="font-[400] text-2xl">Reset Password</Text>
          <Text className="text-gray-400">
            please enter your email to request password rest
          </Text>
        </View>
        <View className="mb-10">
          <TextInput
            className="bg-gray-100 border border-gray-400 text-black text-sm rounded-[10px] block w-full p-4 placeholder-black"
            placeholder="Email Address"
            placeholderTextColor="gray"
            containerStyle={{ marginTop: 10, backgroundColor: "white" }}
            // value={name}
            // onChangeText={(text) => setName(text)}
          />
        </View>

        <View>
          <TouchableOpacity
            //   onPress={checkerror}
            className="items-center mt-2 bg-[#075ADE] p-5 rounded-[15px]"
          >
            <Text className="text-white font-bold text-[15px]">Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ResestAccount;
