import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  const navigation = useNavigation();

  const image = {
    uri: "https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80",
  };
  const image1 = {
    uri: "https://images.unsplash.com/photo-1667063462763-f1e064a5b760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  };

  return (
    <View className="static ...">
      <ImageBackground source={image} className="h-[270] w-full" />
      <View className="absolute top-[130] left-0 mt-10 ml-7 ...">
        <Image
          source={image1}
          className="rounded-full w-[170] h-[170] mt-10 border-white border-4"
        />
      </View>
      <View className="absolute bg-blue-700 top-[300] right-0 mr-5 p-4 rounded-full">
        <TouchableOpacity
          onPress={() => navigation.navigate("settings")}
          className="items-center "
        >
          <Text className="font-normal text-white">edit profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
