import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "./../Screens/SignInScreen";
import SignUpScreen from "./../Screens/SignUpScreen";
import TabNavigation from "./TabNavigation";
import OnboardingScreens from "./../Screens/OnboardingScreens";
import CompleteProfile from "./../Screens/CompleteProfile";

const ProfileStack = createNativeStackNavigator();

export default function Profile() {
  return (
    <ProfileStack.Navigator initialRouteName="singup">
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="singup"
        component={SignUpScreen}
      />
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="profile"
        component={CompleteProfile}
      />
    </ProfileStack.Navigator>
  );
}
