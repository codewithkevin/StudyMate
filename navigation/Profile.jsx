import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens Import 
import CompleteProfile from './../Screens/ProfileSetup/CompleteProfile';
import SignUpScreen from './../Screens/AuthScreen/SignUpScreen';

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
