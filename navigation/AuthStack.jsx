//Import From Natives 
import { SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import Screens From Naviagtions
import OnboardingScreens from "./../Screens/OnboardingScreens";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="setup">
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
