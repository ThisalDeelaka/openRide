import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-6">
      
      {/* Header Section */}
      <View className="flex-row justify-between items-center mb-8">
        {/* User Info */}
        <View>
          <Text className="text-3xl font-bold text-primary">Hello, Matheesha</Text>
          <Text className="text-base text-mutedText mt-1">Let's start your next ride</Text>
        </View>
        
        {/* User Avatar */}
        {/* <Image
          source={require('../assets/user-avatar.png')} // Replace with a valid avatar path
          className="w-14 h-14 rounded-full border-2 border-primary shadow-card" 
        /> */}
      </View>

      {/* Stats Overview */}
      <View className="flex-row justify-between items-center bg-white rounded-large shadow-card p-5 mb-6">
        <View className="flex items-center">
          <Text className="text-lg font-medium text-mutedText">Calories Burned</Text>
          <Text className="text-2xl font-bold text-primary">923 KCal</Text>
        </View>
        <View className="h-full border-l border-borderGray mx-5" />
        <View className="flex items-center">
          <Text className="text-lg font-medium text-mutedText">Weekly Target</Text>
          <Text className="text-2xl font-bold text-primary">20 Miles</Text>
        </View>
      </View>

      {/* Features Section */}
      <View className="bg-white rounded-large shadow-card p-5 mb-6">
        <Text className="text-lg font-semibold text-dark mb-4">Explore Features</Text>
        
        {/* Feature: Unlimited Rides */}
        <TouchableOpacity className="flex-row items-center justify-between mb-4 p-3 rounded-large bg-gray-100">
          <Ionicons name="bicycle" size={24} color="#1B1F63" />
          <Text className="ml-4 flex-1 text-dark">Unlimited Rides</Text>
          <Ionicons name="chevron-forward" size={20} color="#A0AEC0" />
        </TouchableOpacity>

        {/* Feature: Unlock Anywhere */}
        <TouchableOpacity className="flex-row items-center justify-between mb-4 p-3 rounded-large bg-gray-100">
          <Ionicons name="unlock" size={24} color="#1B1F63" />
          <Text className="ml-4 flex-1 text-dark">Unlock Anywhere</Text>
          <Ionicons name="chevron-forward" size={20} color="#A0AEC0" />
        </TouchableOpacity>

        {/* Feature: Cancel Anytime */}
        <TouchableOpacity className="flex-row items-center justify-between p-3 rounded-large bg-gray-100">
          <Ionicons name="close-circle" size={24} color="#1B1F63" />
          <Text className="ml-4 flex-1 text-dark">Cancel Anytime</Text>
          <Ionicons name="chevron-forward" size={20} color="#A0AEC0" />
        </TouchableOpacity>
      </View>

      {/* Start Ride Button */}
      <TouchableOpacity className="bg-primary py-4 rounded-full shadow-button mb-6">
        <Text className="text-white text-lg font-bold text-center">Start Ride</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
};

export default HomeScreen;
