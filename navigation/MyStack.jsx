import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

//Screens Import
import TabNavigation from "./TabNavigation";
import UserSetting from './../Components/Settings/UserSetting';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="TabNavigation"
          component={TabNavigation}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="settings"
          component={UserSetting}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
