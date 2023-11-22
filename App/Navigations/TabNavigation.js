import { View, Text } from "react-native";
import React from "react";
import Home from "../Screens/Home";
import About from "../Screens/About";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../Screens/Search";
import Profile from "../Screens/Profile";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={About}
        options={{
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="info" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
