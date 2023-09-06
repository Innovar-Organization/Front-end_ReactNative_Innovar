import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const HorariosBloqueadosList = () => {
  const [horariosBloqueados, setHorariosBloqueados] = useState([]);

  useEffect(() => {
    // axios.get('http://(ip-da-maquina):19003/horarios_bloqueados/')
    axios.get('http://192.168.0.10:19003/horarios_bloqueados/')
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
