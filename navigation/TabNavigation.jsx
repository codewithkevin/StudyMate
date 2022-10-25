import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
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
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: makeIconRender("home-outline"),
          headerShown: false,
          showLabel: false,
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: makeIconRender("dots-grid"),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Message"
        component={NotificationScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: makeIconRender("message-badge-outline"),
          headerShown: false,
          // tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: Icon("person"),
          headerShown: false,
        }}
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

function Icon(name) {
  return ({ color, size }) => (
    <Octicons name={name} color={color} size={size} />
  );
}