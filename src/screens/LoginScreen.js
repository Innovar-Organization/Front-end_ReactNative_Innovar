import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.bodyContainer}>
      <Image
        source={require('../media/logoinnovar.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={styles.loginContainer}>
        <View style={styles.loginCard}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const cardWidth = Math.min(width - 40, 350);
const imageHeight = height * 0.3;
const buttonMargin = height * 0.1;

const styles = StyleSheet.create({
  bodyContainer: {
  
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: width * 0.8,
    height: imageHeight,
    resizeMode: 'contain',
    marginBottom: buttonMargin,
  },
  loginContainer: {
    
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  loginCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#D0FFF1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    width: cardWidth,
  },
  loginButton: {
    
    backgroundColor: '#00b5b2',
    borderRadius: 5,
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.05,
    marginBottom: buttonMargin, 
  },
  loginButtonText: {
    color: '#fff',
    fontSize: Math.min(width * 0.04, 16),
    textAlign: 'center',
  },
});

export default LoginScreen;
