import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { image500 } from "../../utils/moviesapi";

const { width, height } = Dimensions.get("window");

export default function SavedScreen() {
  const navigation = useNavigation();
  const [savedMovies, setSavedMovies] = useState([]);

  useFocusEffect(
    useCallback(() => {
      // Load saved movies from AsyncStorage when the screen gains focus
      const loadSavedMovies = async () => {
        try {
          const savedMovies = await AsyncStorage.getItem("savedMovies");
          const savedMoviesArray = savedMovies ? JSON.parse(savedMovies) : [];
          setSavedMovies(savedMoviesArray);
          console.log("Pulled saved movies from AsyncStorage");
        } catch (error) {
          console.log("Error loading saved movies", error);
        }
      };
      loadSavedMovies();
    }, [navigation])
  );

  const clearSavedMovies = async () => {
    try {
      await AsyncStorage.removeItem("savedMovies");
      setSavedMovies([]);
      console.log("Cleared all saved movies");
    } catch (error) {
      console.log("Error clearing saved movies", error);
    }
  };

  return (
    <ScrollView>
      <View className="relative flex-1">
        <ImageBackground
          source={require("../../assets/images/homescreen.png")}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
        >
          <View className="mt-12 p-4">
            <View className="flex-row justify-between items-center">
              <Text className="font-bold text-xl text-white">Saved Movies</Text>
              <TouchableOpacity
                onPress={clearSavedMovies}
                className="bg-blue-800 py-2 px-4 rounded-lg"
              >
                <Text className="font-bold text-lg text-white">Clear</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-between flex-wrap">
              {savedMovies.length > 0 ? (
                savedMovies.map((movie, index) => (
                  <View className="flex-row mt-4" key={index}>
                    <TouchableOpacity
                      onPress={() => navigation.push("Movie", movie)}
                    >
                      <Image
                        source={{
                          uri: image500(movie.poster_path),
                        }}
                        className="w-40 h-48 rounded-3xl"
                        style={{
                          width: width * 0.41,
                          height: height * 0.25,
                        }}
                      />
                      <Text className="text-gray-300 font-bold text-lg ml-1">
                        {movie.title.length > 15
                          ? movie.title.slice(0, 15) + "..."
                          : movie.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <Text className="text-white text-lg text-center mt-4">
                  No saved movies found.
                </Text>
              )}
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}