import { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import FormField from '../components/FormField'; // Import the FormField component
import axios from 'axios'; // Axios for making HTTP requests

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    console.log('Username:', username); // Log the username
    console.log('Email:', email);       // Log the email
    console.log('Password:', password);   // Log the password
    
    try {
      const response = await axios.post('http://192.168.8.153:5000/api/users/register', {
        username,
        email,
        password,
      });
      Alert.alert('Success', response.data.message);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-4">Sign Up</Text>
      
      <FormField label="Username" placeholder="Enter your username" onChangeText={setUsername} />
      <FormField label="Email" placeholder="Enter your email" onChangeText={setEmail} />
      <FormField label="Password" placeholder="Enter your password" onChangeText={setPassword} />

      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUp;
