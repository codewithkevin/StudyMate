import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { InterestContext } from "./../../Context/ProfileContext/InterestContext";

const UserInterest = () => {
  const { game, interest, gamefun } = useContext(InterestContext);

  console.log(interest);

  return (
    <View className="p-4 mt-14">
      <View className="mb-3">
        <Image
          className="w-[150] h-[125px]"
          source={require("../AuthScreen/Assest/sammy-no-connection.png")}
        />
      </View>

      <View className="mb-10">
        <Text className="text-xl font-normal font-mono ml-5">
          Select your interests
        </Text>
      </View>

      <View className="flex-row ml-5">
        <View className="flex-1">
          <TouchableOpacity
            onPress={gamefun}
            className="border border-slate-400 p-5  justify-center rounded-full items-center"
          >
            <Text>Gaming</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserInterest;
