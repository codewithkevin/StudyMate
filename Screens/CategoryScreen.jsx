import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useAuthentication } from "../Hooks/useAuthentication";

const auth = getAuth();

const CategoryScreen = ({ navigation }) => {
  const { user } = useAuthentication();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>CategoryScreen Section</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signup")}
        className="items-center mt-10 bg-[#FB5558] p-5 rounded-[30px]"
      >
        <Text className="text-white font-bold text-[15px]">SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => signOut(auth)}
        className="items-center mt-10 bg-[#FB5558] p-5 rounded-[30px]"
      >
        <Text className="text-white font-bold text-[15px]">SIGN Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryScreen;
