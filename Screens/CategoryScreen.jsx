import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CategoryScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>CategoryScreen Section</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        className="items-center mt-10 bg-[#FB5558] p-5 rounded-[30px]"
      >
        <Text className="text-white font-bold text-[15px]">SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryScreen;
