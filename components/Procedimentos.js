import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const HorizontalList = () => {
  const items = [
    {
      id: 1,
      image:
        "http://localhost:19003/media/images/5d5d9493-3be7-45e9-b8ea-09c8e63860f7.png",
      text: "Limpeza de Pele",
    },
    {
      id: 2,
      image:
        "http://localhost:19003/media/images/5d5d9493-3be7-45e9-b8ea-09c8e63860f7.png",
      text: "Massagem Terapêutica",
    },
    {
      id: 3,
      image:
        "http://localhost:19003/media/images/5d5d9493-3be7-45e9-b8ea-09c8e63860f7.png",
      text: "Design de Sombrancelhas",
    },
    {
      id: 4,
      image:
        "http://localhost:19003/media/images/5d5d9493-3be7-45e9-b8ea-09c8e63860f7.png",
      text: "Massagem com Pedras Quentes",
    },
    {
      id: 5,
      image:
        "http://localhost:19003/media/images/5d5d9493-3be7-45e9-b8ea-09c8e63860f7.png",
      text: "Design de Cílios",
    },
    {
      id: 6,
      image:
        "http://localhost:19003/media/images/5d5d9493-3be7-45e9-b8ea-09c8e63860f7.png",
      text: "Texto 6",
    },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <View style={styles.imageTextContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu Procedimento:</Text>
      <HorizontalList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00b5b2",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  itemContainer: {
    marginRight: 10,
  },
  imageTextContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    maxHeight: 300,
    maxWidth: 200,
    height: 300,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
  text: {
    color: "black",
    padding: 30,
    textAlign: "center",
    fontSize: 18,
  },
});

export default HomeScreen;
