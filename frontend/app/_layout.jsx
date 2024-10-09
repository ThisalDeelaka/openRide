import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router"; // Import Stack properly from expo-router

const RootLayout = () => {
  return (
    <Stack>
      {/* Corrected the typo from Screan to Screen */}
      <Stack.Screen name="index" options={{ headerShown: false, title: 'welcome' }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false, title: 'welcome' }} />
      <Stack.Screen name="(screens)" options={{ headerShown: false, title: 'welcome' }} />
      
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "tabs" }}
      />
      <Stack.Screen
        name="(admintabs)"
        options={{ headerShown: false, title: "admintabs" }}
      />
      <Stack.Screen
        name="(bikeOwner)"
        options={{ headerShown: false, title: "bikeOwner" }}
      />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
