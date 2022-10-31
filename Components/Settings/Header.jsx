import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="flex-1 flex-row justify-between p-5">
      <View className="flex flex-row">
        <Text className="text-xl font-semibold">Settings</Text>
      </View>
      <Text className="mt-2">
        <AntDesign name="setting" size={24} color="black" />
      </Text>
    </View>
  );
};

export default Header;
