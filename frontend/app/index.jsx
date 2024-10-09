import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import CustomeButton from './components/CustomeButton';
import { router } from 'expo-router';

export default function App() {
  return (
    <View className="p-6">
      <Text className="text-3xl font-bold mb-6">open ride</Text>
      <StatusBar style="auto" />
      
      <CustomeButton
        title="Sign In"
        handlePress={() => router.push('/sign-in')}
      />
      <CustomeButton
        title="Sign Up"
        handlePress={() => router.push('/sign-up')}
      />
    </View>
  );
}
