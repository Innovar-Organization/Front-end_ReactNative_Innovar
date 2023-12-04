import React from 'react';
import { ScrollView, View, StyleSheet} from 'react-native';
import HorariosBloqueadosList from '../components/HorariosBloqueadosList';
import Procedimentos  from '../components/Procedimentos';
import Pacotes from '../components/Pacotes'


const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HorariosBloqueadosList />
      <Procedimentos />
      <Pacotes />
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b5b2',
    display:'flex',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  column: {
    alignItems: 'center',
  },
  vsText: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
  },
});

export default HomeScreen;