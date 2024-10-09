import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import CustomButton from './components/CustomButton';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <View className="p-6 flex-1 justify-center">
        <Text className="text-3xl font-bold mb-6">Open Ride</Text>
        <StatusBar style="auto" />

        <CustomButton
          title="Sign In"
          onPress={() => router.push('/sign-in')} // Navigate to Sign In screen
        />
        <CustomButton
          title="Sign Up"
          onPress={() => router.push('/sign-up')} // Navigate to Sign Up screen
        />
        {/* New Button to Navigate to Home Screen */}
        <CustomButton
          title="Go to Home"
          onPress={() => router.push('/HomeScreen')} // Navigate to Home screen
          className="mt-4" // Add some margin for spacing
        />

        <CustomButton
          title="Add Bicycle"
          onPress={() => router.push('/addBicycle')} // Changed handlePress to onPress
        />
      </View>
    </SafeAreaView>
  );
}
