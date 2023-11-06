import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Dimensions, Text, ScrollView } from "react-native";
// import baseUrl from '/src/plugins/config.js'; 

const HomeScreen = () => {
  const imageUris = [
    "http://localhost:19003/media/images/74b1df78-fb4f-4199-ba9c-283be1e8d9bc_NP8yzbH.png",
    "http://localhost:19003/media/images/48f49e20-e03d-4f22-85ed-8feabe979961_b1e5unp.png",
    "http://localhost:19003/media/images/5d5d9493-3be7-45e9-b8ea-09c8e63860f7.png",
    "http://localhost:19003/media/images/8d97f9dc-88d8-4903-a85f-cd03b8786cca.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUris.length);
    }, 4000);

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
    <View style={styles.container}>
      <Text style={styles.title}>Acompanhe nossas promoções!</Text>
      <Image
        source={{ uri: imageUris[currentImageIndex] }}
        style={{
          width: "100%",
          height: (imageWidth / 16) * 9,
          marginBottom: 5,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 30,
    flex: 0.2,
  },
});

export default HomeScreen;
