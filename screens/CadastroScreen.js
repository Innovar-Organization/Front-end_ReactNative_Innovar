import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const BASE_URL = 'http://191.52.55.170:19003/';

const CadastroScreen = () => {
  const navigation = useNavigation();
  const [possuiProblemaFisico, setPossuiProblemaFisico] = useState(false);
  const [possuiProblemaCardiaco, setPossuiProblemaCardiaco] = useState(false);
  const [possuiProblemaRespiratorio, setPossuiProblemaRespiratorio] = useState(false);
  const [possuiAlergia, setPossuiAlergia] = useState(false);
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCPF] = useState('');
  const [cpfValido, setCPFValido] = useState(false);

  const handleCadastro = async () => {
    if (!cpfValido) {
      Alert.alert('CPF inválido', 'Por favor, insira um CPF válido.');
      return;
    }

    // Crie um objeto com os dados do usuário para enviar ao backend
    const userData = {
      usuario,
      nome,
      sobrenome,
      cpf,
      possuiProblemaFisico,
      possuiProblemaCardiaco,
      possuiProblemaRespiratorio,
      possuiAlergia,
      senha,
    };

    try {
      const response = await axios.post(BASE_URL + 'usuarios/', userData);

      if (response.status === 201) {
        Alert.alert('Cadastro bem-sucedido', 'Seu cadastro foi realizado com sucesso.');

        // Redirecionar para a tela de login após o cadastro
        navigation.navigate('LoginScreen');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro ao cadastrar', 'Ocorreu um erro ao cadastrar o usuário. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.bodyContainer}>
      <View style={styles.CadastroContainer}>
        <View style={styles.CadastroCard}>
          <Text style={styles.CadastroTitle}>Faça seu Cadastro</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Usuário"
              onChangeText={text => setUsuario(text)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Nome"
              onChangeText={text => setNome(text)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Sobrenome"
              onChangeText={text => setSobrenome(text)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="CPF"
              onChangeText={text => {
                setCPF(text);
                const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
                setCPFValido(cpfRegex.test(text));
              }}
            />
          </View>
          {/* ... Resto do formulário */}
          <TouchableOpacity style={styles.loginButton} onPress={handleCadastro}>
            <Text style={styles.loginButtonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CadastroContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#00b5b2',
    borderWidth: 2,
  },
  inputWrapper: {
    fontStyle: "italic",
  },
  bodyContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#B8B8B8',
  },
  CadastroCard: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    padding: 30,
    width: 350,
    borderColor: '#00b5b2', // Cor ciano para a borda
    borderWidth: 2, // Largura da borda
    
  },
  CadastroTitle: {
    fontSize: 28,
    marginBottom: 20,
    borderRadius: 10,
    textAlign: 'center',
    color: '#000',
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  inputField: {
    width: '100%',
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 15,
    borderColor: '#00b5b2', // Cor ciano para a borda
    borderWidth: 2, // Largura da borda
  },
  loginButton: {
    backgroundColor: '#00b5b2',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  inputTextBold: {
    fontWeight: 'bold',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: '#666',
  },
});

export default CadastroScreen;
