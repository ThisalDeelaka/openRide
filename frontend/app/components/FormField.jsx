import { View, Text, TextInput } from 'react-native';
import React from 'react';

const FormField = ({ label, placeholder, onChangeText, secureTextEntry = false, inputStyles, errorMessage }) => {
  return (
    <View className="mb-4 w-full">
      {/* Input Label */}
      <Text className="text-base font-semibold text-dark mb-2">{label}</Text>

      {/* Input Field */}
      <TextInput
        className={`${inputStyles}`}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />

      {/* Error Message */}
      {errorMessage ? (
        <Text className="text-danger mt-1 text-sm">{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default FormField;
