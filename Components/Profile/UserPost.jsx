import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Post = () => {
  return (
    <View>
      <View className="flex flex-row">
        <View>
          <Text className="text-xl">Posts</Text>
        </View>
        <View className="left-[280]">
          <TouchableOpacity>
            <AntDesign name="plus" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;
