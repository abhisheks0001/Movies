import { Dimensions, TouchableWithoutFeedback, Image, StyleSheet } from "react-native";
import React from "react";
import { image500 } from "../../utils/moviesapi";

const { width, height } = Dimensions.get("window");

export default function MovieCard({ item, handleClick }) {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={{
          uri: image500(item.poster_path) || "https://via.placeholder.com/150", // Fallback image
        }}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width * 0.8,
    height: height * 0.25,
    borderRadius: 20, // Adjusted for consistency with rounded corners
  },
});