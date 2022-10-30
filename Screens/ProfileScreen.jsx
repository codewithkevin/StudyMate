import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "./../Components/Profile/Header";
import UserBio from "./../Components/Profile/UserBio";
import UserInterest from "./../Components/Profile/UserInterest";

const ProfileScreen = () => {
  return (
    <View className="h-full w-full mb-20">
      <ScrollView>
        <Header />
        <View className="mt-[130] ml-8 w-full">
          <UserBio />
          <UserInterest />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
