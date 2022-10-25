import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./../Screens/SignInScreen";
import SignUpScreen from "./../Screens/SignUpScreen";
import TabNavigation from "./TabNavigation";
import OnboardingScreens from "./../Screens/OnboardingScreens";
import GeneralProfile from "./../Components/AccountProfile/GeneralProfile";
import InterestScreen from "./../Components/AccountProfile/InterestScreen";

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
          name="singup"
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
