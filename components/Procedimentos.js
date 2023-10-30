import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import axios from "axios";

const Procedimentos = () => {
  const [procedimentos, setProcedimentos] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:19003/api/procedimentos/")
      .then((response) => {
        setProcedimentos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os Procedimentos:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja nossos Procedimentos:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {procedimentos.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <View style={styles.imageTextContainer}>
              <Image
                source={{ uri: item.imagem }}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.text}>{item.nome}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "#00b5b2",
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
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

export default Procedimentos;
