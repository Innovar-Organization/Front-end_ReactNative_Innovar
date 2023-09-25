import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const images = [
    require('/home/jose.gabriel/Documentos/frontend-innovar-react-native/assets/volksLogo.jpeg'),
    require('/home/jose.gabriel/Documentos/frontend-innovar-react-native/assets/logo-bmw-2048.png'),
    require('/home/jose.gabriel/Documentos/frontend-innovar-react-native/assets/ferrariLogo.jpeg'),
    require('/home/jose.gabriel/Documentos/frontend-innovar-react-native/assets/bentleyLogo.png'),
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.slideContainer}>
      <Image source={images[currentImageIndex]} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    backgroundColor: '#00b5b2',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    aspectRatio: 1,
  },
});

export default HomeScreen;

