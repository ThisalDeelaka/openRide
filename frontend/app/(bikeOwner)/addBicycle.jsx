import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { Link } from "expo-router";
import FormField from "../components/FormField";
import api from "../../api"; // Use centralized API from your backend configuration

const AddBicycle = ({ navigation }) => {
  const [bicycleName, setBicycleName] = useState("");
  const [bicycleModel, setBicycleModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [bikeImage, setBikeImage] = useState(null);
  const [location, setLocation] = useState("");
  const [ownershipProof, setOwnershipProof] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Image Picker Function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setBikeImage(result.uri);
    }
  };

  // Location Picker Function
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Location permission is required to get the bike location."
      );
      return;
    }

    let locationData = await Location.getCurrentPositionAsync({});
    setLocation(
      `${locationData.coords.latitude}, ${locationData.coords.longitude}`
    );
  };

  // Real-time validation
  const validateInput = () => {
    const newErrors = {};
    if (!bicycleName) newErrors.bicycleName = "Bicycle name is required";
    if (!bicycleModel) newErrors.bicycleModel = "Bicycle model is required";
    if (!serialNumber) newErrors.serialNumber = "Serial number is required";
    return newErrors;
  };

  const handleAddBicycle = async () => {
    const validationErrors = validateInput();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("bicycleName", bicycleName);
      formData.append("bicycleModel", bicycleModel);
      formData.append("serialNumber", serialNumber);
      if (bikeImage) {
        formData.append("bikeImage", {
          uri: bikeImage,
          type: "image/jpeg",
          name: "bikeImage.jpg",
        });
      }
      if (ownershipProof) {
        formData.append("ownershipProof", {
          uri: ownershipProof,
          type: "application/pdf",
          name: "proof.pdf",
        });
      }
      formData.append("location", location);

      const response = await api.post("/api/bicycles/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Alert.alert("Success", response.data.message);
      navigation.navigate("BicycleList");
    } catch (error) {
      Alert.alert(
        "Error",
        error.response ? error.response.data.message : "Something went wrong"
      );
    }
    setLoading(false);
  };

  return (
    <View className="flex-1 justify-center items-center bg-background p-6">
      {/* Page Title */}
      <Text className="text-primary font-display text-4xl font-bold mb-8">
        Add Bicycle
      </Text>

      {/* Form Fields */}
      <FormField
        label="Bicycle Name"
        placeholder="Enter bicycle name"
        onChangeText={setBicycleName}
        inputStyles={`border ${
          errors.bicycleName ? "border-danger" : "border-borderGray"
        } rounded-large p-4 text-base`}
        errorMessage={errors.bicycleName}
      />
      <FormField
        label="Bicycle Model"
        placeholder="Enter bicycle model"
        onChangeText={setBicycleModel}
        inputStyles={`border ${
          errors.bicycleModel ? "border-danger" : "border-borderGray"
        } rounded-large p-4 text-base`}
        errorMessage={errors.bicycleModel}
      />
      <FormField
        label="Serial Number"
        placeholder="Enter serial number"
        onChangeText={setSerialNumber}
        inputStyles={`border ${
          errors.serialNumber ? "border-danger" : "border-borderGray"
        } rounded-large p-4 text-base`}
        errorMessage={errors.serialNumber}
      />

      {/* Image Picker */}
      <TouchableOpacity
        onPress={pickImage}
        className="bg-secondary p-3 rounded mt-4"
      >
        <Text className="text-white text-center">Pick Bike Image</Text>
      </TouchableOpacity>
      {bikeImage && (
        <Image
          source={{ uri: bikeImage }}
          style={{ width: 100, height: 100, marginTop: 10, borderRadius: 10 }}
        />
      )}

      {/* Location Picker */}
      <TouchableOpacity
        onPress={getLocation}
        className="bg-secondary p-3 rounded mt-4"
      >
        <Text className="text-white text-center">Get Current Location</Text>
      </TouchableOpacity>
      {location && (
        <Text className="text-mutedText mt-2">Location: {location}</Text>
      )}

      {/* Proof of Ownership */}
      <TouchableOpacity
        onPress={pickImage}
        className="bg-secondary p-3 rounded mt-4"
      >
        <Text className="text-white text-center">
          Upload Proof of Ownership
        </Text>
      </TouchableOpacity>
      {ownershipProof && (
        <Text className="text-mutedText mt-2">Ownership Proof Uploaded</Text>
      )}

      {/* Add Bicycle Button with Loading State */}
      <TouchableOpacity
        onPress={handleAddBicycle}
        disabled={loading}
        className={`bg-primary p-4 rounded-full w-full mt-6 shadow-button ${
          loading && "opacity-50"
        }`}
        activeOpacity={0.8}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-lg font-semibold text-center">
            Add Bicycle
          </Text>
        )}
      </TouchableOpacity>

      {/* Back to Dashboard Link */}
      <View className="mt-6 w-full flex-row justify-center">
        <Text className="text-mutedText text-sm">
          Back to Dashboard?{" "}
          <Text className="text-secondary text-sm font-semibold">
            <Link href="/dashboard">Go Here</Link>
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default AddBicycle;
