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
import baseUrl from '../plugins/config.js'; 

const Procedimentos = () => {
  const [procedimentos, setProcedimentos] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}procedimentos/`)
      .then((response) => {
        setProcedimentos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os Procedimentos:", error);
      });
  }, []);

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assine nossos Procedimentos:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {procedimentos.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.itemContainer,
              index === procedimentos.length - 1 && { marginRight: 20 }, // Espaço adicional no último item
            ]}
          >
            <View style={styles.cardContainer}>
              <Image
                source={{ uri: item.imagem.url }}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.text}>{item.nome}</Text>
              <Text style={styles.textDesc}>{item.descricao}</Text>
  
              <TouchableOpacity
                style={[styles.button, { marginTop: 'auto' }]}
                onPress={() => openWhatsApp(item.nome)}
              >
                <Text style={styles.buttonText}>Agendar Procedimento</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    maxWidth: 200,
    flexGrow: 1,
    flexDirection: 'column', 
  },
  scrollViewContent: {
    flexDirection: "row",
    paddingHorizontal: 10, 
  },
  container: {
    flex: 1,
    backgroundColor: "#00b5b2",
  },
  title: {
    color: "#fff",
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
    alignItems: "auto",
    padding: 20,
    maxHeight: 900,
    maxWidth: 200,
    height: 430,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
    width:200,
    height:100, 
  },
  text: {
    color: "#000",
    padding: 10,
    textAlign: "center",
    fontSize: 18,  
    maxWidth: 500,
  },
  textDesc: {
    color: "#000",
    paddingBottom:30,
    textAlign: "auto",
    color: "#696969",
    fontSize: 12,  
    fontWeight: "bold",
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
    fontSize: 18, 
  },
});

export default Procedimentos;
