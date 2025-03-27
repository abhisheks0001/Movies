import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
import React from "react";
import { image500 } from "../../../utils/moviesapi";

export default function Cast({ cast, navigation }) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Person", item)}
        style={styles.castItem}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: image500(item.profile_path) || "https://via.placeholder.com/150", // Fallback image
            }}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>
            {item?.original_name.length > 10
              ? `${item.original_name.slice(0, 10)}...`
              : item?.original_name}
          </Text>
          <Text style={styles.characterText}>
            {item?.character.length > 10
              ? `${item.character.slice(0, 10)}...`
              : item?.character}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cast</Text>

      <FlatList
        horizontal
        data={cast}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    color: "white",
    fontSize: 18,
    marginHorizontal: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  castItem: {
    alignItems: "center",
    marginRight: 16,
  },
  imageContainer: {
    width: 80,
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  nameContainer: {
    marginTop: 4,
    alignItems: "center",
  },
  nameText: {
    color: "white",
    textAlign: "center",
  },
  characterText: {
    color: "gray",
    textAlign: "center",
    fontSize: 12,
  },
  flatListContent: {
    paddingHorizontal: 15,
  },
});