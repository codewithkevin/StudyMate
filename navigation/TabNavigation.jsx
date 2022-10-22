import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: makeIconRender("home"), headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        options={{ tabBarIcon: makeIconRender("cog"), headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
