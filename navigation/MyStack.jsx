import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import TabNavigation from "./TabNavigation";
import SignInScreen from "./../Screens/SignInScreen";
import SignUpScreen from "./../Screens/SignUpScreen";
import GeneralProfile from './../Components/AccountProfile/GeneralProfile';
import InterestScreen from './../Components/AccountProfile/InterestScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="profile">
        <Stack.Screen
          options={{ headerShown: false }}
          name="TabNavigation"
          component={TabNavigation}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="profile"
          component={GeneralProfile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="interest"
          component={InterestScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={SignInScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
