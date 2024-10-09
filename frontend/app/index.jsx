import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import CustomButton from './components/CustomButton';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
    <View className="p-6">
      <Text className="text-3xl font-bold mb-6">open ride</Text>
      <StatusBar style="auto" />
      
      <CustomButton
        title="Sign In"
        handlePress={() => router.push('/sign-in')}
      />
      <CustomButton
        title="Sign Up"
        handlePress={() => router.push('/sign-up')}
      />
    </View>
    </SafeAreaView>
  );
}
