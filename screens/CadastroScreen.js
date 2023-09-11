import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CadastroScreen = () => {
  const navigation = useNavigation();
  const [possuiProblemaFisico, setPossuiProblemaFisico] = useState(false);
  const [possuiProblemaCardiaco, setPossuiProblemaCardiaco] = useState(false);
  const [possuiProblemaRespiratorio, setPossuiProblemaRespiratorio] = useState(false);
  const [possuiAlergia, setPossuiAlergia] = useState(false);
  const [senha, setSenha] = useState('');

  const handleCPFChange = (text) => {
    setCPF(text);
    const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;

    if (cpfRegex.test(text)) {
      setCPFValido(true);
    } else {
      setCPFValido(false);
    }
  };

  const handleLogin = () => {
    if (!cpfValido) {
      alert('CPF inválido. Por favor, insira um CPF válido.');
      return;
    }
  };
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.CadastroContainer}>
        <View style={styles.CadastroCard}>
          <Text style={styles.CadastroTitle}>Faça seu Cadastro</Text>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.inputField} placeholder="Usuario" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.inputField} placeholder="Nome" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.inputField} placeholder="Sobrenome" />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.inputField} placeholder="CPF" />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={possuiProblemaFisico}
              onValueChange={setPossuiProblemaFisico}
            />
            <Text style={styles.label}>Tenho Problema Físico</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={possuiProblemaCardiaco}
              onValueChange={setPossuiProblemaCardiaco}
            />
            <Text style={styles.label}>Tenho Problema Cardíaco</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={possuiProblemaRespiratorio}
              onValueChange={setPossuiProblemaRespiratorio}
            />
            <Text style={styles.label}>Tenho Problema Respiratório</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={possuiAlergia}
              onValueChange={setPossuiAlergia}
            />
            <Text style={styles.label}>Tenho Alergia</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Senha"
              secureTextEntry
              value={senha}
              onChangeText={(text) => setSenha(text)}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
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
  },
  CadastroTitle: {
    fontSize: 28,
    marginBottom: 20,
    borderRadius: 10,
    textAlign: 'center',
    color: '#00b5b2',
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
