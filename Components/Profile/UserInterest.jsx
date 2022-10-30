import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const UserInterest = () => {
  return (
    <View className="mt-5 mb-10">
      <Text className="text-xl">Interests</Text>
      <View className="flex flex-row mt-3 space-x-5">
        <View className="rounded-lg border p-3">
          <TouchableOpacity className="items-center">
            <Text className="font-normal ">Crypto</Text>
          </TouchableOpacity>
        </View>
        <View className="rounded-lg border p-3">
          <TouchableOpacity className="items-center">
            <Text className="font-normal ">Music</Text>
          </TouchableOpacity>
        </View>
        <View className="rounded-lg border p-3">
          <TouchableOpacity className="items-center">
            <Text className="font-normal ">Sports</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserInterest;
