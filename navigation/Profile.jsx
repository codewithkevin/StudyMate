import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens Import 
import CompleteProfile from './../Screens/ProfileSetup/CompleteProfile';
import SignUpScreen from './../Screens/AuthScreen/SignUpScreen';
import UserInterest from './../Screens/ProfileSetup/UserInterest';
import UserBio from './../Screens/ProfileSetup/UserBio';

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
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="userbio"
        component={UserBio}
      />
      <ProfileStack.Screen
        options={{ headerShown: false }}
        name="interest"
        component={UserInterest}
      />
    </ProfileStack.Navigator>
  );
}
