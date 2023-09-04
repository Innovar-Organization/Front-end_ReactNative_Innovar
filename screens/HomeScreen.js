import React from 'react';
import { View, Text, StyleSheet, TextInput, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.bodyContainer}>

        <View style={styles.container}>
          <View style={styles.menu}>
            <Text style={styles.menuItem}>Home</Text>
            <View style={styles.searchBar}>
              <TextInput placeholder="Search" style={styles.searchInput} />
              <Image source={LupaIcon} style={styles.lupaIcon} />
            </View>
          </View>
        </View>

    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    display:'flex',
    
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    width:'center',
    backgroundColor:'gray'
  },
  menuItem: {
    padding: '20',
    color: '#fff',
    fontSize: 18,
    marginRight:10,
    color:'black'
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',

    borderBottomColor: '#ccc',
    borderRadius: 5,
  },
  lupaIcon: {
    width: 20,
    height: 20,
    marginTop:5, 
    tintColor: '#555',
  },
  searchInput: {
    borderColor: 'transparent',
    padding: 5,
    flex: 1,
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
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    alignItems: 'center',
  },
  image: {
    width: '90px',
    height: '90px',
    marginBottom: 10,
  },
  vsText: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
  },
  CompraButton: {
    backgroundColor: '#27ae60',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  CompraButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;