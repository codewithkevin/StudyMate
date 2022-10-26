import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens Import
import SignInScreen from "./../Screens/SignInScreen";
import SignUpScreen from "./../Screens/SignUpScreen";
import CompleteProfile from './../Screens/Profile/CompleteProfile';

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
