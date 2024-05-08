import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit() {
    try {
      const response = await axios.post('http://192.168.228.157:5000/', {
        email,
        password,
      });

      if (response.data === 'exist') {
        navigation.navigate('Home');
      } else if (response.data === 'notexist') {
        Alert.alert(
          'User Not Found',
          'You have not signed up. Please sign up first.',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );
      } else if (response.data === 'wrongpass') {
        Alert.alert(
          'Incorrect Password',
          'The password you entered is incorrect. Please try again.',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#1976D2', flex: 1 }}>
      <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: "20%" }}>Society Connect</Text>
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={{ marginBottom: 10, padding: 10, width: 300, backgroundColor: '#f0f0f0' }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
          style={{ marginBottom: 10, padding: 10, width: 300, backgroundColor: '#f0f0f0' }}
        />
        <TouchableOpacity onPress={submit} style={{ marginBottom: 10, padding: 10, backgroundColor: '#000', borderRadius: 5 }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Login</Text>
        </TouchableOpacity>
        <Text style={{ marginBottom: 10, color: 'grey', fontSize: 16 }}>OR</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Signup Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
