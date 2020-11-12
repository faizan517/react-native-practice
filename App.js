import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { white } from 'ansi-colors';

//icons
import { FontAwesome,Entypo } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='cover'
        source={require('./assets/attachment.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.picutreWrapper}>
        </View>

        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Let's get start</Text>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput style={styles.input}
            placeholder={'Mobile Number'} maxLength={11} keyboardType={'phone-pad'} />

          <TextInput style={styles.input}
            placeholder={'Password'}  maxLength={25} /> 
          <TouchableOpacity style={styles.button}>

            <Text style={styles.buttonText}><Entypo name="paper-plane" size={16.5} color="white"  />
          login </Text>
            </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#f36523', textAlign: 'center', backgroundColor: 'white' }}>Forget password?</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.signUpWrapper}>
          <TouchableOpacity style={styles.button, { backgroundColor: 'black', width: '85%', borderRadius: 35 }}>
            <Text style={styles.buttonText}>Sign Up</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.mediaButton}>
            <FontAwesome name="facebook" size={33} color="white" style={{ textAlign: 'center', paddingTop: 21.5, }} />
          </TouchableOpacity>
        </View>


      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  picutreWrapper: {
    height: '37%',
    width: '100%',

  },
  headingWrapper: {
    height: '10%',
    width: '100%',
  },
  heading: {
    fontSize: 45,
    color: '#f36523',
    fontWeight: '500',
    paddingLeft: 25.5,
  },
  inputWrapper: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    width: '85%',
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: 2.5,
    borderBottomColor: '#f36523',
  },
  button: {
    backgroundColor: '#f36523',
    width: '85%',
    borderRadius: 35,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    padding: 15,
  },
  signUpWrapper: {
    height: '23%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  mediaButton: {
    height: 75,
    width: 75,
    backgroundColor: '#f36523',
    borderRadius: 100,
  },
});