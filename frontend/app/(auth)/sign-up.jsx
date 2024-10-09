import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Link } from 'expo-router';
import FormField from '../components/FormField';
import api from '../../api';  // Use centralized API from your backend configuration

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Real-time validation
  const validateInput = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!email || !email.includes('@')) newErrors.email = 'Please enter a valid email';
    if (!password || password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    return newErrors;
  };

  const handleSignUp = async () => {
    const validationErrors = validateInput();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/api/users/register', {
        username,
        email,
        password,
      });
      Alert.alert('Success', response.data.message);
      navigation.navigate('SignIn');  // Navigate to Sign-In page after successful registration
    } catch (error) {
      Alert.alert('Error', error.response ? error.response.data.message : 'Something went wrong');
    }
    setLoading(false);
  };

  return (
    <View className="flex-1 justify-center items-center bg-background p-6">
      {/* App Title or Logo */}
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
        label="Email"
        placeholder="Enter your email"
        onChangeText={setEmail}
        inputStyles={`border ${errors.email ? 'border-danger' : 'border-borderGray'} rounded-large p-4 text-base`}
        errorMessage={errors.email}
      />
      <FormField
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={setPassword}
        inputStyles={`border ${errors.password ? 'border-danger' : 'border-borderGray'} rounded-large p-4 text-base`}
        errorMessage={errors.password}
      />

      {/* Sign-Up Button with Loading State */}
      <TouchableOpacity
        onPress={handleSignUp}
        disabled={loading}
        className={`bg-primary p-4 rounded-full w-full mt-6 shadow-button ${loading && 'opacity-50'}`}
        activeOpacity={0.8}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-lg font-semibold text-center">Sign Up</Text>
        )}
      </TouchableOpacity>

      {/* Sign-In Link */}
      <View className="mt-6 w-full flex-row justify-center">
        <Text className="text-mutedText text-sm">
          Already have an account?{' '}
        </Text>
        <Link href="/sign-in" className="text-secondary text-sm font-semibold">
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
