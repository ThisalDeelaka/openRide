import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Link } from 'expo-router';
import FormField from '../components/FormField';
import api from '../../api';

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});  // Track input errors

  // Real-time validation
  const validateInput = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Please enter your username';
    if (!password) newErrors.password = 'Please enter your password';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    return newErrors;
  };

  const handleSignIn = async () => {
    const validationErrors = validateInput();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/api/users/login', { username, password });
      const { user } = response.data;

      if (user.role === 'admin') {
        Alert.alert('Success', 'Welcome Admin');
        navigation.navigate('AdminDashboard');
      } else {
        Alert.alert('Success', 'Welcome User');
        navigation.navigate('Home');
      }
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please check your credentials.');
    }
    setLoading(false);
  };

  return (
    <View className="flex-1 justify-center items-center bg-background p-6">
      {/* App Logo or Title */}
      <Text className="text-primary font-display text-4xl font-bold mb-8">OpenRide</Text>


      {/* Form Fields */}
      <FormField
        label="Username"
        placeholder="Enter your username"
        onChangeText={setUsername}
        inputStyles={`border ${errors.username ? 'border-danger' : 'border-borderGray'} rounded-large p-4 text-base`}
        errorMessage={errors.username}
      />
      <FormField
        label="Password"
        placeholder="Enter your password"
        onChangeText={setPassword}
        secureTextEntry
        inputStyles={`border ${errors.password ? 'border-danger' : 'border-borderGray'} rounded-large p-4 text-base`}
        errorMessage={errors.password}
      />

      {/* Sign-In Button with Loading State */}
      <TouchableOpacity
        onPress={handleSignIn}
        disabled={loading}
        className={`bg-primary p-4 rounded-full w-full mt-6 shadow-button ${loading && 'opacity-50'}`}
        activeOpacity={0.8}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-lg font-semibold text-center">Sign In</Text>
        )}
      </TouchableOpacity>

      {/* Forgot Password and Sign Up Links */}
      <View className="mt-6 w-full flex-row justify-between">
        <Link href="/forgot-password" className="text-mutedText text-sm">
          Forgot Password?
        </Link>
        <Link href="/sign-up" className="text-secondary text-sm font-semibold">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
