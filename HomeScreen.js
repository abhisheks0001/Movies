import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "../../utils/moviesapi"; // Only fetching genres now
import Loading from "../components/Loading";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [genre, SetGenres] = useState([]);

  // Fetch genres
  const { isLoading: isGenresLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    onSuccess: (data) => {
      SetGenres(data.genres);
    },
    onError: (error) => {
      console.log("Error fetching Genre", error);
    },
  });

  return (
    <View className="flex-1">
      <Image
        source={require("../../assets/images/homescreen1.png")}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      />
      <ScrollView className="mt-16">
        <StatusBar style="light" />

        {/* Welcome Title */}
        <View className="flex-row justify-between items-center mx-4 mg-4">
          <View className="border-2 border-white rounded-full overflow-hidden">
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{
                width: 45,
                height: 45,
              }}
              resizeMode="cover"
            />
          </View>

          {/* Notification and Search Icon */}
          <View className="flex-row space-x-4">
            <BellIcon size={30} strokeWidth={2} color="white" />
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {isGenresLoading ? (
          <Loading />
        ) : (
          <ScrollView>
            {/* Display genres or any other relevant information */}
            {genre?.length > 0 && (
              <View>
                <Text className="text-white text-lg mx-4">Genres</Text>
                <View className="flex-row flex-wrap mx-4">
                  {genre.map((g) => (
                    <View key={g.id} className="bg-gray-800 rounded-full px-3 py-1 m-1">
                      <Text className="text-white">{g.name}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
}