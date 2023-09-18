import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'; // Importe Image e Dimensions
import { useNavigation } from '@react-navigation/native';

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
        source={{ uri: 'http://127.0.0.1:19003/media/images/5dc02292-7520-400e-b45b-dd4ceb9790bb.png' }}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      <View style={styles.loginContainer}>
        <View style={styles.loginCard}>
          <Text style={styles.loginTitle}>Entre na sua Conta</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.inputField} placeholder="Usuário" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.inputField} placeholder="Senha" secureTextEntry />
          </View>
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
const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: '#B8B8B8',
    alignItems: 'center', // Alinha o conteúdo ao centro verticalmente
    justifyContent: 'flex-start', // Alinha o conteúdo ao topo da tela
  },
  backgroundImage: {
    width: 300,
    height: 250,
    resizeMode: 'cover',
    marginTop: 50, // Espaço do topo da tela
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    padding: 30,
    width: 350,
  },
  loginTitle: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputField: {
    width: '100%',
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 15,
    borderColor: '#00b5b2',
    borderWidth: 2,
  },
  loginButton: {
    backgroundColor: '#00b5b2',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  CadastroButton: {
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  CadastroButtonText: {
    color: '#000',
    fontSize: 10,
    textAlign: 'center',
  },
});


export default LoginScreen;