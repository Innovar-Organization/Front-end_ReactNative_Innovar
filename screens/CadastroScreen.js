import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CadastroScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    const correctUsername = 'usuario';
    const correctPassword = 'senha';
    const enteredUsername = 'usuario';
    const enteredPassword = 'senha';

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
      navigation.navigate('Home'); 
    } else {
      alert('Login failed. Please check your username and password.');
    }
  };
    return (
        <View style={styles.bodyContainer}>
        <View style={styles.CadastroContainer}>
          <View style={styles.CadastroCard}>
            <Text style={styles.CadastroTitle}>Cadastro</Text>
          <View style={styles.inputWrapper}>
           <TextInput style={styles.inputField} placeholder="username" />
          </View>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.inputField} placeholder="Email" />
            </View>
         <View style={styles.inputWrapper}>
           <TextInput style={styles.inputField} placeholder="password" />
         </View>
         <View style={styles.inputWrapper}>
           <TextInput style={styles.inputField} placeholder="confirm password" secureTextEntry />
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
   profileImage: {
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom: 20,
   },
   inputWrapper:{
    fontStyle:"italic",
   },
   bodyContainer:{
    justifyContent: 'center',
    alignContent: 'center',
    height: '90%',
    width: '100%',
   },
   roundedImage: {
     width: 120,
     height: 120,
     borderRadius: 60,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 4 },
     shadowOpacity: 0.2,
     shadowRadius: 10,
   },
   ImageBackground: {
    flex:1,
    resizeMode: 'cover'
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
   CadastroTitle:{ 
     fontSize: 28,
     marginBottom: 20,
     borderRadius: 10,
     textAlign: 'center',
     color: '#333',
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
     backgroundColor: '#27ae60',
     borderRadius: 5,
     paddingVertical: 12,
     paddingHorizontal: 20,
   },
   ImageBackground: {
    height: '100%',
    width: '100%'
   },
   loginButtonText: {
     color: '#fff',
     fontSize: 16,
     textAlign: 'center',
   },
   
 });

 export default CadastroScreen;