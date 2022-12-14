import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "./../Components/Profile/Header";
import UserBio from "./../Components/Profile/UserBio";
import UserInterest from "./../Components/Profile/UserInterest";
import UserPost from "./../Components/Profile/UserPost";

const ProfileScreen = () => {
  return (
    <View className="h-full w-full">
      <ScrollView>
        <Header />
        <View className="mt-[120] ml-8 w-full mb-28">
          <UserBio />
          <UserInterest />
          <UserPost />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
