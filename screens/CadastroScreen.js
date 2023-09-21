import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
  Alert,
} from "react-native";
import axios from "axios";

const BASE_URL = "http://localhost:19003/";

const CadastroScreen = () => {
  const navigation = useNavigation();
  const [possuiProblemaFisico, setPossuiProblemaFisico] = useState(false);
  const [possuiProblemaCardiaco, setPossuiProblemaCardiaco] = useState(false);
  const [possuiProblemaRespiratorio, setPossuiProblemaRespiratorio] =useState(false);
  const [possuiAlergia, setPossuiAlergia] = useState(false);
  const [senha, setSenha] = useState("");
  const [usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [numeroTelefone, setNumeroTelefone] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCPF] = useState("");
  const [prescricaoMedica, setPrescricaoMedica] = useState("");
  const [cpfValido, setCPFValido] = useState(false);

  const handleCadastro = async () => {
    if (!cpfValido) {
      Alert.alert("CPF inválido", "Por favor, insira um CPF válido.");
      return;
    }

    if (!isValidDateOfBirth(dataNascimento)) {
      Alert.alert(
        "Data de Nascimento inválida",
        "Por favor, insira uma data de nascimento válida."
      );
      return;
    }

    if (!isValidPhoneNumber(numeroTelefone)) {
      Alert.alert(
        "Número de Telefone inválido",
        "Por favor, insira um número de telefone válido."
      );
      return;
    }

    if (prescricaoMedica.length > 200) {
      Alert.alert(
        "Prescrição Médica muito longa",
        "A prescrição médica deve conter no máximo 200 caracteres."
      );
      return;
    }

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
      prescricaoMedica,
    };

    try {
      const response = await axios.post(BASE_URL + "usuarios/", userData);

      if (response.status === 201) {
        Alert.alert(
          "Cadastro bem-sucedido",
          "Seu cadastro foi realizado com sucesso."
        );

        // Redirecionar para a tela de login após o cadastro
        navigation.navigate("LoginScreen");
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      Alert.alert(
        "Erro ao cadastrar",
        "Ocorreu um erro ao cadastrar o usuário. Tente novamente mais tarde."
      );
    }
  };

  const isValidDateOfBirth = (dateOfBirth) => {
    // Implemente a lógica de validação da data de nascimento aqui
    return true; // Substitua por sua própria lógica de validação
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Implemente a lógica de validação do número de telefone aqui
    return true; // Substitua por sua própria lógica de validação
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
              onChangeText={(text) => setUsuario(text)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Nome"
              onChangeText={(text) => setNome(text)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Sobrenome"
              onChangeText={(text) => setSobrenome(text)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Data de Nascimento (Dia/Mês/Ano)"
              onChangeText={(text) => setDataNascimento(text)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Número de Telefone"
              onChangeText={(text) => setNumeroTelefone(text)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="CPF"
              onChangeText={(text) => {
                setCPF(text);
                const cpfRegex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
                setCPFValido(cpfRegex.test(text));
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Prescrição Médica"
              onChangeText={(text) => setPrescricaoMedica(text)}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={possuiProblemaFisico}
              onValueChange={setPossuiProblemaFisico}
            />
            <Text style={styles.label}>Possui Problema Físico</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={possuiProblemaCardiaco}
              onValueChange={setPossuiProblemaCardiaco}
            />
            <Text style={styles.label}>Possui Problema Cardíaco</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={possuiProblemaRespiratorio}
              onValueChange={setPossuiProblemaRespiratorio}
            />
            <Text style={styles.label}>Possui Problema Respiratório</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox value={possuiAlergia} onValueChange={setPossuiAlergia} />
            <Text style={styles.label}>Possui Alergia</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputField}
              placeholder="Senha"
              secureTextEntry
              onChangeText={(text) => setSenha(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.cadastroButton}
            onPress={handleCadastro}
          >
            <Text style={styles.cadastroButtonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("LoginScreen")} // Navegue para a tela de login
          >
            <Text style={styles.loginButtonText}>
              Já possui conta? Faça login aqui
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#B8B8B8",
  },
  CadastroContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#00b5b2",
    borderWidth: 2,
  },
  CadastroCard: {
    backgroundColor: "white",
    borderColor: "black",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    padding: 30,
    width: 350,
    borderColor: "#00b5b2",
    borderWidth: 2,
  },
  CadastroTitle: {
    fontSize: 28,
    marginBottom: 20,
    borderRadius: 10,
    textAlign: "center",
    color: "#000",
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666",
  },
  inputField: {
    width: "100%",
    padding: 12,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginBottom: 15,
    borderColor: "#00b5b2",
    borderWidth: 2,
  },
  cadastroButton: {
    backgroundColor: "#00b5b2",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  inputTextBold: {
    fontWeight: "bold",
  },
  cadastroButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: "#666",
  },
  loginButton: {
    marginTop: 20, // Espaçamento superior para separar o botão de cadastro do botão de login
  },
  loginButtonText: {
    color: "#00b5b2",
    fontSize: 16,
    textAlign: "center",
  },
});

export default CadastroScreen;
