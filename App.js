import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";
import { View } from "react-native";
import { Text } from "react-native";
import MyStack from "./navigation/MyStack";
import RootNavigation from './navigation/index';

export default function App() {
  return <RootNavigation />;
}

const navigationTheme = {
  colors: {
    background: "transparent",
  },
};
