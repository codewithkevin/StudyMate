import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";
import { View } from "react-native";
import { Text } from "react-native";
import MyStack from "./navigation/MyStack";

export default function App() {
  return <MyStack />;
}

const navigationTheme = {
  colors: {
    background: "transparent",
  },
};
