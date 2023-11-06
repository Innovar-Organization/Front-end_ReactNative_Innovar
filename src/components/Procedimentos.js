import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import axios from "axios";

  const openWhatsApp = (mensagem) => {
    const phoneNumber = "996731463"; 
    const whatsappMessage = `Olá, gostaria de agendar ${mensagem}`;

    const url = `whatsapp://send?phone=${phoneNumber}&text=${whatsappMessage}`;

    Linking.openURL(url)
      .then((data) => {
        console.log("WhatsApp aberto com sucesso");
      })
      .catch((error) => {
        console.error("Erro ao abrir o WhatsApp: ", error);
      });
  };

const Procedimentos = () => {
  const [procedimentos, setProcedimentos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:19003/api/procedimentos/")
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => openWhatsApp(item.nome)}
            >
              <Text style={styles.buttonText}>Agendar Procedimento</Text>
            </TouchableOpacity>
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
  button: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  buttonText: {
    color: "#00b2b5",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Procedimentos;