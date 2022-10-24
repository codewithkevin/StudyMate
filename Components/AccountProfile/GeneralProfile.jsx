import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

const GeneralProfile = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 m-5 mt-[10px] w-full h-full">
      <View className="flex mb-5">
        <Text className="text-2xl">You are looking for a/an?</Text>
        <View className="flex-row justify-evenly mt-5">
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
        </View>
      </View>
      <View className="flex mb-5">
        <Text className="text-2xl">You are looking for a/an?</Text>
        <View className="flex-row justify-evenly mt-5">
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
        </View>
      </View>
      <View className="flex mb-5">
        <Text className="text-2xl">You are looking for a/an?</Text>
        <View className="flex-row justify-evenly mt-5">
          <View>
            <Text>Hello</Text>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
        </View>
      </View>
      <View className="mt-10 items-center flex justify-center">
        <View className="flex flex-row space-x-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="items-center"
          >
            <Text className="text-[#075ADE] font-bold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GeneralProfile;
