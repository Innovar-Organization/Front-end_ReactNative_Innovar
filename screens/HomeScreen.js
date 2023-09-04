import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import HorariosBloqueadosList from './HorariosBloqueadosList';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tela Inicial</Text>
      <HorariosBloqueadosList /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
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