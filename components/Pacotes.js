import { View, Text, StyleSheet, ScrollView, Image, FlatList } from "react-native";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Pacotes = () => {
  const [pacotes, setPacotes] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:19003/api/pacotes/")
      .then(response => {
        setPacotes(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os Pacotes:', error);
      });
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
   
   <FlatList
        data={pacotes}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View key={item.id} style={styles.itemContainer}>
          <View style={styles.imageTextContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.text}>{item.nome}</Text>
          </View>
        </View>
        )}
      />

    </ScrollView>
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

export default Pacotes;
