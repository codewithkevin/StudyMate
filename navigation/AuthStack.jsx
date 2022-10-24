import { SafeAreaView, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  NavigationDarkTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./../Screens/SignInScreen";
import SignUpScreen from "./../Screens/SignUpScreen";
import TabNavigation from "./TabNavigation";
import ScreenOne from './../Components/SetUpScreens/ScreenOne';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="singup">
        <Stack.Screen
          options={{ headerShown: false }}
          name="singin"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="setup"
          component={ScreenOne}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="singup"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
