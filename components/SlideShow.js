import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";

const HomeScreen = () => {
  const imageUris = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1LGn3b4u8E__peeZEkOZ97laJuXWUrfrQA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7hdGUXrLK70CdNlwP1Hq5Mkj__3ulS7-QA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RxOUwg_EdqSDRwWVP5mhm08lCfaVBx1irQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWwAZOlhJOXEOKYfKqEPhv1YTzg7R3fHGVA&usqp=CAU",
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUris.length);
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Image
      source={{ uri: imageUris[currentImageIndex] }}
      style={styles.image}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width, // Define a largura da imagem igual à largura da tela
    height: 200, // Define a altura da imagem como 200px
  },
});

export default HomeScreen;
