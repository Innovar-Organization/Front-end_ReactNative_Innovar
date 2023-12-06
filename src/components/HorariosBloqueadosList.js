import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import baseUrl from '/src/plugins/config.js'; 
import axios from 'axios';
import { format } from 'date-fns';

const HorariosBloqueadosList = () => {
  const [horariosBloqueados, setHorariosBloqueados] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}horario_bloqueado/`)
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
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false} // Oculta a barra de rolagem vertical
      >
        {horariosBloqueados.map((item) => (
          <View key={item.id} style={styles.horarioItem}>
            <Text style={styles.diaText}>{item.data}</Text>
            <Text style={[styles.horaText, { paddingTop: 10 }]}>
              {`${item.hora_inicio} às ${item.hora_fim}`}
            </Text>
          </View>
        ))}
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
    fontFamily: 'Georgia',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'Georgia',
  },
  scrollContainer: {
    width: '90%',
    maxHeight: 450, 
  },
  horarioItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  diaText: {
    fontSize: 14,
    color: '#696969',
    fontFamily: 'Georgia',
  },
  horaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    fontFamily: 'Georgia',
    fontSize: 15,
  },
});

export default HorariosBloqueadosList;
