import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { InterestContext } from "./../../Context/ProfileContext/InterestContext";
import { useInterestContext } from "./../../Hooks/useInterestContext";

const UserInterest = () => {
  const { game, interest, gamefun, cryptofun, crypto, sportfun, sport } =
    useInterestContext();

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

      <View className="flex-row ml-5 space-x-3">
        <View className="flex-1">
          <TouchableOpacity
            onPress={gamefun}
            className={`border border-slate-400 ${
              game ? "border-slate-400" : "bg-[#075ADE]"
            } p-5  justify-center rounded-full items-center`}
          >
            <Text className={`${game ? "text-black" : "text-white"}`}>
              Gaming
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1">
          <TouchableOpacity
            onPress={cryptofun}
            className={`border border-slate-400 ${
              crypto ? "border-slate-400" : "bg-[#075ADE]"
            } p-5  justify-center rounded-full items-center`}
          >
            <Text className={`${crypto ? "text-black" : "text-white"}`}>
              Crypto
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1">
          <TouchableOpacity
            onPress={sportfun}
            className={`border border-slate-400 ${
              sport ? "border-slate-400" : "bg-[#075ADE]"
            } p-5  justify-center rounded-full items-center`}
          >
            <Text className={`${sport ? "text-black" : "text-white"}`}>
              Sport
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserInterest;
