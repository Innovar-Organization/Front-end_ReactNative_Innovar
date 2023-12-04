import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import baseUrl from '/src/plugins/config.js'; 

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    const correctUsername = 'usuario';
    const correctPassword = 'senha';
    const enteredUsername = 'usuario';
    const enteredPassword = 'senha';

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
      navigation.navigate('Home'); 
    } else {
      alert('Usuario ou Senha incorretos, tente novamente!');
    }
  };
  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };


  return (
    <View style={styles.bodyContainer}>
      <Image
      source={require('../media/logoinnovar.png')}
        // source={{ uri: `${baseUrl}/media/images/adb07347-ffe3-4940-bdfc-69decdf4385b.png` }} 
        style={styles.backgroundImage}
        resizeMode="contain"
      />

      <View style={styles.loginContainer}>
        <View style={styles.loginCard}>
          <Text style={styles.loginTitle}>Entre na sua Conta</Text>
          <TextInput
            style={styles.inputField}
            placeholder="Usuário"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Senha"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.CadastroButton} onPress={handleCadastro}>
            <Text style={styles.CadastroButtonText}>Não possui conta? Clique aqui!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get('window');
const cardWidth = Math.min(width - 40, 350); 

const styles = StyleSheet.create({

  
  bodyContainer: {
    fontFamily: 'Georgia',
    flex: 1,
    backgroundColor: '#B8B8B8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: width * 0.8, 
    height: height * 0.2, 
    resizeMode: 'contain',
    marginBottom: 10,
  },
  loginContainer: {
    fontFamily: 'Georgia',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginCard: {
    backgroundColor: '#fff',
    borderColor: '#00b5b2',
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: '#D0FFF1',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    padding: width * 0.05, 
    width: cardWidth,
  },
  loginTitle: {
    fontFamily: 'Georgia',
    fontSize: Math.min(width * 0.08, 28), 
    marginBottom: width * 0.05, 
    textAlign: 'center',
  },
  inputField: {
    fontFamily: 'Georgia',
    width: '100%',
    padding: width * 0.03, 
    fontSize: Math.min(width * 0.04, 16), 
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: width * 0.04, 
    borderColor: '#00b5b2',
    borderWidth: 2,
  },
  loginButton: {
    fontFamily: 'Georgia',
    backgroundColor: '#00b5b2',
    borderRadius: 5,
    paddingVertical: width * 0.04, 
    paddingHorizontal: width * 0.05,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: Math.min(width * 0.04, 16),
    textAlign: 'center',
  },
  CadastroButton: {
    marginTop: width * 0.1, 
  },
  CadastroButtonText: {
    fontFamily: 'Georgia',
    color: '#00b5b2',
    fontSize: Math.min(width * 0.04, 16), 
    textAlign: 'center',
  },
});

export default LoginScreen;