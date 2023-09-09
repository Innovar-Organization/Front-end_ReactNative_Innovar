import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
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
    <View style={styles.container}>
      <Text><h2>Confira os horários e entre em contato!</h2></Text>
      <Text>Os Horários Indisponíveis:</Text>
      <FlatList
        data={horariosBloqueados}
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <View style={styles.horarioItem}>
            <Text>{item.dia}</Text>
            <Text>{item.hora_inicio} às {item.hora_fim}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b5b2',
    paddingHorizontal: 20,
  },
  horarioItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default HorariosBloqueadosList;
