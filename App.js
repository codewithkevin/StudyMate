import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import MyStack from "./navigation/MyStack";
import { LogBox } from "react-native";
import { useState, useEffect } from "react";


//Screens Import 
import RootNavigation from "./navigation/index";
import LoadingScreen from "./Screens/LoadingScreen";

//Context Calls
import CheckErrorProvider from "./Context/AuthContext/CheckError";
import DetailsProvider from "./Context/ProfileContext/DetailsContext";

export default function App() {
  LogBox.ignoreAllLogs();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <DetailsProvider>
      <CheckErrorProvider>
        <View className="flex-1">
          {loading === false ? (
            <View className="flex-1">
              <RootNavigation />
            </View>
          ) : (
            <LoadingScreen />
          )}
        </View>
      </CheckErrorProvider>
    </DetailsProvider>
  );
}
