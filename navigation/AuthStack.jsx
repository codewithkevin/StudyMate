import { SafeAreaView, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  NavigationDarkTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./../Screens/HomeScreen";
import SignInScreen from "./../Screens/SignInScreen";
import SignUpScreen from "./../Screens/SignUpScreen";
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="singin"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="singup"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
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
