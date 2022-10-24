import { View, Text, Image } from "react-native";
import React from "react";

const LoadingScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        className="mb-[-40] mt-[-50]"
        source={require("../Assest/sammy-no-connection.png")}
      />
      <Text className="text-2xl font-bold">STUDY MATE</Text>
    </View>
  );
};

export default LoadingScreen;
