import { View, Text, Image } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View>
      <View>
        <Image
          className="w-full h-[20vh] bg-cover object-bottom"
          source={{
            uri: "https://images.unsplash.com/photo-1666651304090-ee82c4c506a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }}
        />
      </View>
    </View>
  );
};

export default Profile;
