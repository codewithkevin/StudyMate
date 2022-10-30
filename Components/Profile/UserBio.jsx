import { View, Text } from "react-native";
import React from "react";

const UserBio = () => {
  return (
    <View className="w-[90%]">
      <View className="mb-4">
        <Text className="font-medium text-xl">UserName</Text>
      </View>
      <View className='mb-5'>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          non id, voluptatem accusantium ipsa saepe sed nihil explicabo eaque
          mollitia praesentium illum, et beatae perferendis voluptatum sint?
          Ipsam, similique beatae!
        </Text>
      </View>
      <View>
        <Text>Location</Text>
      </View>
    </View>
  );
};

export default UserBio;
