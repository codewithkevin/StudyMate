import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CategoryScreen from "./../Screens/CategoryScreen";
import NotificationScreen from "./../Screens/NotificationScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [show, setShow] = useState(true);

  const handle = () => {
    setShow((current) => !current);
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          display: "flex",
          flexDirection: "row",
        },
        // tabBarLabelPosition: "beside-icon",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: makeIconRender("home-outline"),
          headerShown: false,
          showLabel: false,
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
          // tabBarBadge: 1,
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
