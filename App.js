import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./navigation/TabNavigation";
import { View } from "react-native";
import { Text } from "react-native";
import MyStack from "./navigation/MyStack";
import RootNavigation from "./navigation/index";
import LoadingScreen from "./Screens/LoadingScreen";
import { LogBox } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  LogBox.ignoreAllLogs();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(true), 2000);
  }, []);

  return (
    <View className="flex-1">
      {loading === false ? (
        <View className="flex-1">
          <RootNavigation />
        </View>
      ) : (
        <LoadingScreen />
      )}
    </View>
  );
}
