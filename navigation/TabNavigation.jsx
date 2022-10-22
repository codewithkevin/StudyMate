import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CategoryScreen from "./../Screens/CategoryScreen";
import NotificationScreen from "./../Screens/NotificationScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: makeIconRender("home-outline"),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: makeIconRender("dots-grid"),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Message"
        component={NotificationScreen}
        options={{
          tabBarIcon: makeIconRender("message-badge-outline"),
          headerShown: false,
        }}
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
