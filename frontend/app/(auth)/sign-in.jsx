import { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import FormField from "../components/FormField"; // Import the FormField component
import axios from "axios";
import { Link } from "expo-router";
import api  from "../../api";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSignIn = async () => {
    try {
      const response = await api.post(`/api/users/login`, {
        username,
        password,
      });
      const { user } = response.data;

      // Navigate based on user role
      if (user.role === "admin") {
        Alert.alert("Success", "Welcome Admin");
        // Example: navigation.navigate('AdminLayout');
      } else {
        Alert.alert("Success", "Welcome User");
        // Example: navigation.navigate('UserLayout');
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      Alert.alert("Error", "Login failed");
    }
  };

  return (
    
    <View className="p-4">
      <Text className="text-xl font-bold mb-4">Sign In</Text>

      <FormField
        label="Username"
        placeholder="Enter your username"
        onChangeText={setUsername}
      />
      <FormField
        label="Password"
        placeholder="Enter your password"
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button title="Sign In" onPress={handleSignIn} />

      <View className="mt-4">
        <Text className="text-gray-700">Don't have an account?</Text>
        <Link href="/sign-up" className="text-blue-500">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
