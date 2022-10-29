import { View, Text, Image } from "react-native";
import React from "react";

const ResestAccount = () => {
  return (
    <View className="p-5 mt-10">
      <View className="mb-8">
        <Text>ResestAccount</Text>
      </View>
      <View className="flex justify-center items-center">
        <Image
          className="w-[24 h-[24]"
          source={require("./Assest/Reset Password.png")}
        />
      </View>
    </View>
  );
};

export default ResestAccount;
