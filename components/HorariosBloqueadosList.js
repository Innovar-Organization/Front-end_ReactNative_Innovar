import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import axios from 'axios';

const HorariosBloqueadosList = () => {
  const [horariosBloqueados, setHorariosBloqueados] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:19003/horarios_bloqueados/')
      .then(response => {
        setHorariosBloqueados(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os horários bloqueados:', error);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>Confira os horários e entre em contato!</Text>
        <Text style={styles.subtitle}>Horários Indisponíveis:</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <FlatList
          data={horariosBloqueados}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <View style={styles.horarioItem}>
              <Text style={styles.diaText}>{item.dia}</Text>
              <Text style={styles.horaText}>{item.hora_inicio} às {item.hora_fim}</Text>
            </View>
          )}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b5b2',
    alignItems: 'center', 
    paddingTop: 20,
  },
  scroll: {
    maxHeight: 500, 
    width:500,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center', 
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center', 
  },
  horarioItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  diaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  horaText: {
    fontSize: 14,
    color: '#555',
  },
});

export default HorariosBloqueadosList;
