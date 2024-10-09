import { View, Text, TextInput } from 'react-native';
import React from 'react';

const FormField = ({ label, placeholder, onChangeText }) => {
  return (
    <View className="mb-4">
      <Text className="text-base font-semibold text-gray-700">{label}</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-2 mt-1"
        placeholder={placeholder}
        onChangeText={onChangeText} // Ensure this prop is being used correctly
      />
    </View>
  );
};

export default FormField;
