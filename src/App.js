import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity } from 'react-native';
import { white } from 'ansi-colors';

//icons
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.radius}>
        <Ionicons name="md-mail-open" size={80} style={styles.iconStyle} />
      </View>

      <View style={styles.nestedContainer}>
        <Text style={styles.text}>SignIn</Text>
        <Text style={styles.ptext}>Speak,friend and enter</Text>
      </View>
      <StatusBar style="auto" />

      <TextInput
        style={styles.inputWrapper} placeholder='Email' textAlign='center' 
      />
      <TextInput
        maxLength={15}
        style={styles.secondInputWrapper} placeholder='Password' textAlign='center'
      />
      <View style={styles.buttonWrapper}>
        
      <TouchableOpacity
        style={styles.button}
        color='white'
      >
        <Text style={{color:'white'}}>SignIn</Text>
      </TouchableOpacity>        

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',

  },
  nestedContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  input: {
    width: 300,
    height: 35,
    backgroundColor: 'white',
    alignItems: "center",
  },
  text: {
    fontSize: 45,
    color: 'white',
    fontWeight: '100',
  },
  ptext: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontWeight: '100',
  },
  radius: {
    height: 120,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 100,
    marginTop: 110,
  },
  iconStyle: {
    marginTop: 16,
    marginLeft: 25.5,
    color: 'skyblue',
  },
  inputWrapper: {
    marginTop: 140,
    width: 340,
    height: 40,
    backgroundColor: 'white',
    alignItems: "center",
    borderRadius: 1,
  },
  secondInputWrapper: {
    marginTop: 20,
    width: 340,
    height: 40,
    backgroundColor: 'white',
    alignItems: "center",
    borderRadius: 1,
  },
  buttonWrapper: {
    marginTop: 120,
    width: 340,
  },
  button:{
    
    backgroundColor:'black',
    alignItems:'center',
    color:'white',
    padding:10,
  }
});