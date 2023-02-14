import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View,Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import Details from "./components/screens/Details";
import linking from "./components/Linking/Linking";
import Sample from "./components/screens/sample";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer Linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Sample" component={Sample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
