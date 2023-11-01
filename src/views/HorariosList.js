import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, Button, List } from 'react-native-paper';

import HorariosService from '../services/Horarios';
import { useEffect, useState } from 'react';

export default function HorariosAdd({ navigation }) {
  const [horarios, setHorarios] = useState([]);

  const getHorarios = async () => {
    const data = await HorariosService.getAllHorarios();
    setHorarios(data);
  };

  useEffect(() => {
    getHorarios();
  }, []);

  useEffect(() => {
    for (const horario of horarios) {
      console.log(horario.name);
    }
  }, [horarios]);

  return (
    <ScrollView style={styles.container}>
        {horarios.map((horario) => (
          <List.Item key={horario.id} title={horario.name} />
        ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '70%',
  },
});