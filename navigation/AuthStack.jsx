import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens Import
import Profile from "./Profile";
import SignInScreen from './../Screens/AuthScreen/SignInScreen';
import OnboardingScreens from './../Screens/AuthScreen/OnboardingScreens';

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
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
