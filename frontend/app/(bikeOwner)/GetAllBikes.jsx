// screens/GetAllBikes.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert,Image } from 'react-native';
import api from '../../api'; // Adjust the path as necessary

const GetAllBikes = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBikes = async () => {
    try {
      const response = await api.get('/api/bicycles/all');
      setBikes(response.data);
    } catch (err) {
      console.error("Error fetching bikes:", err);
      setError(err.response ? err.response.data.message : 'Something went wrong');
      Alert.alert('Error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBikes();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 p-4">
      <Text className="text-primary font-display text-2xl font-bold mb-4">All Bicycles</Text>
      <FlatList
        data={bikes}
        keyExtractor={(item) => item._id} // Assuming _id is the unique identifier
        renderItem={({ item }) => (
          <View className="border p-4 rounded mb-2">
            <Text className="font-semibold">Name: {item.bicycleName}</Text>
            <Text>Model: {item.bicycleModel}</Text>
            <Text>Serial Number: {item.serialNumber}</Text>
            <Image source={{ uri: item.bikeImage }} style={{ width: 100, height: 100 }} />
          </View>
        )}
      />
    </View>
  );
};

export default GetAllBikes;
