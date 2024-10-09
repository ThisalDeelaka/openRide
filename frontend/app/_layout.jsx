import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slot, { Stack } from 'expo-router';

const RootLayout = () => {
  return(
    <Stack>
      <Stack.Screan name="index" options = {{headerShown: true,title: 'welcome'}}/>
      <Stack.Screan name="(auth)" options = {{headerShown: true,title: 'welcome'}}/>
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})