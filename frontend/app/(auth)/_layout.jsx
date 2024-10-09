import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen
                name="sign-up"
                options={{
                    headerShown: true,
                    title: 'sign-up'
                }}
            />
            <Stack.Screen
                name="sign-in"
                options={{
                    headerShown: true,
                    title: 'sign-in'
                }}
            />
        </Stack>
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})