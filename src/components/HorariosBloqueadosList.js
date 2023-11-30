import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import { format } from 'date-fns';

const HorariosBloqueadosList = () => {
  const [horariosBloqueados, setHorariosBloqueados] = useState([]);

  useEffect(() => {
    axios
      .get('https://seu-backend.com/horariosbloqueados/')  
      .then((response) => {
        const formattedHorarios = response.data.map((item) => ({
          id: item.id,
          data: format(new Date(item.data), 'dd-MM-yyyy'),
          hora_inicio: format(new Date(item.data + ' ' + item.hora_inicio), 'HH:mm'),
          hora_fim: format(new Date(item.data + ' ' + item.hora_fim), 'HH:mm'),
        }));
        setHorariosBloqueados(formattedHorarios);
      })
      .catch((error) => {
        console.error('Erro ao buscar os horários bloqueados:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confira os horários e entre em contato!</Text>
      <Text style={styles.subtitle}>Horários Indisponíveis:</Text>
      <ScrollView style={{ width: '90%', height: '70%' }}>
        <FlatList
          data={horariosBloqueados}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.horarioItem}>
              <Text style={styles.diaText}>{item.data}</Text>
              <Text style={styles.horaText}>
                {`Das ${item.hora_inicio} até ${item.hora_fim}`}
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b5b2',
    alignItems: 'center',
    paddingTop: '5%',
    paddingBottom: 30,
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
    fontSize: 14,
    color: '#555',
  },
  horaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
});

export default HorariosBloqueadosList;
