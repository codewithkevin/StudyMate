import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./../Screens/SignInScreen";
import SignUpScreen from "./../Screens/SignUpScreen";
import TabNavigation from "./TabNavigation";
import OnboardingScreens from "./../Screens/OnboardingScreens";
import CompleteProfile from './../Screens/CompleteProfile';
import Profile from './Profile';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="setup">
        <Stack.Screen
          options={{ headerShown: false }}
          name="singin"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="setup"
          component={OnboardingScreens}
        />
        
        <Stack.Screen
          options={{ headerShown: false }}
          name="profile"
          component={CompleteProfile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="singup"
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
