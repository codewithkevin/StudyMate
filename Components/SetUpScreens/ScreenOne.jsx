import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const image = { uri: "https://reactjs.org/logo-og.png" };

const ScreenOne = () => {
  return (
    <View className="flex-1 items-center justify-center ">
      <ImageBackground source={image} resizeMode="cover" className="flex-1 justify-center w-full h-full">
        <Text>Inside</Text>
      </ImageBackground>
    </View>
  );
};

export default ScreenOne;
