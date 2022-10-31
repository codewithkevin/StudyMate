import { View, Text, ScrollView } from "react-native";
import React from "react";
import UserSetting from "./../Components/Settings/UserSetting";
import Header from './../Components/Settings/Header';

const SettingsScreen = () => {
  return (
    <View className="h-full w-full ">
      <ScrollView>
        <View className="mt-14 ml-5">
          <View>
            <Header />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
