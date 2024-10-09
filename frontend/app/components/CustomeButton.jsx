import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomeButton = ({ title, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className="bg-blue-500 p-4 rounded-lg mt-4"
    >
      <Text className="text-white text-center text-lg font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomeButton;
