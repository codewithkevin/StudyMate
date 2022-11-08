import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const UserInterest = () => {
  return (
    <View className="p-4 mt-14">
      <View className="mb-3">
        <Image
          className="w-[150] h-[125px]"
          source={require("../AuthScreen/Assest/sammy-no-connection.png")}
        />
      </View>

      <View className="mb-10">
        <Text className="text-xl font-normal font-mono ml-5">
          Select your interests
        </Text>
      </View>
    </View>
  );
};

export default UserInterest;
