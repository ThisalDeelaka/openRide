import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <>
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: true,
                    title: 'home'
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: true,
                    title: 'profile'
                }}
            />
            <Tabs.Screen
                name="bysicle"
                options={{
                    headerShown: true,
                    title: 'settings'
                }}
            />

        </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})