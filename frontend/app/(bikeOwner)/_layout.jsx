import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const bikeOwnerLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="addBicycle" options={{ headerShown: false }} />
        <Stack.Screen name="GetAllBikes" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default bikeOwnerLayout;

const styles = StyleSheet.create({});
