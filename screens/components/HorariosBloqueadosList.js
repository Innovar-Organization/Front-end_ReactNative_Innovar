import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const HorariosBloqueadosList = () => {
  const [horariosBloqueados, setHorariosBloqueados] = useState([]);

  useEffect(() => {
    // Faça uma solicitação ao seu backend para buscar os horários bloqueados
    axios.get('URL_DO_SEU_BACKEND/horariosbloqueados')
      .then(response => {
        setHorariosBloqueados(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os horários bloqueados:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Horários Bloqueados</Text>
      <FlatList
        data={horariosBloqueados}
        keyExtractor={(item) => item.id.toString()} // Use a chave única do seu modelo
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
    backgroundColor: '#f2f2f2',
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
