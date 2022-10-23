import { View, Text } from "react-native";
import React, { useState } from "react";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <View>
        <Input
          placeholder="Email"
          value={email}
          onChange={(text) => setEmail(text)}
          className="mt-10"
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={(text) => setPassword(text)}
          className="mt-10"
        />
      </View>
    </View>
  );
};

export default SignInScreen;
