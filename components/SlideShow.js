import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Dimensions, Text } from "react-native";

const HomeScreen = () => {
  const imageUris = [
    "http://localhost:19003/media/images/74b1df78-fb4f-4199-ba9c-283be1e8d9bc_NP8yzbH.png",
    "http://localhost:19003/media/images/48f49e20-e03d-4f22-85ed-8feabe979961_b1e5unp.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RxOUwg_EdqSDRwWVP5mhm08lCfaVBx1irQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWwAZOlhJOXEOKYfKqEPhv1YTzg7R3fHGVA&usqp=CAU",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUris.length);
    }, 2500);

    const updateImageWidth = () => {
      setImageWidth(Dimensions.get("window").width);
    };

    Dimensions.addEventListener("change", updateImageWidth);

    return () => {
      clearInterval(timer);
      Dimensions.removeEventListener("change", updateImageWidth);
    };
  }, []);

  return (
    <View style={styles.slideContainer}>
      <Text style={styles.title}>Acompanhe nossas promoções!</Text>
      <Image
        source={{ uri: imageUris[currentImageIndex] }}
        style={{ width: imageWidth, height: (imageWidth / 16) * 9 }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    backgroundColor: "#00b5b2",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center", 
    textAlignVertical: "center", 
    flex: 1,
    marginTop: -40,
    marginBottom: 20,
  },
});

export default HomeScreen;
