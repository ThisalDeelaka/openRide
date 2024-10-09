import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import CustomButton from "./components/CustomButton";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <View className="p-6">
        <Text className="text-3xl font-bold mb-6">open ride</Text>
        <StatusBar style="auto" />

        <CustomButton
          title="Sign In"
          onPress={() => router.push("/sign-in")} // Changed handlePress to onPress
        />
        <CustomButton
          title="Sign Up"
          onPress={() => router.push("/sign-up")} // Changed handlePress to onPress
        />

        <CustomButton
          title="Add Bicycle"
          onPress={() => router.push("/addBicycle")} // Changed handlePress to onPress
        />

        <CustomButton
          title="Get Bicycle"
          onPress={() => router.push("/GetAllBikes")} // Changed handlePress to onPress
        />
      </View>
    </SafeAreaView>
  );
}
