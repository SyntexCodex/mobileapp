import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

function Signup() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  async function submit() {
    try {
      const response = await axios.post('http://192.168.228.157:5000/signup', {
        email,
        address,
        password
      });

      if (response.data === 'exist') {
        alert('User already exists');
      } else if (response.data === 'notexist') {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Wrong details');
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1976D2' }}>
       <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginVertical: "20%" }}>Society Connect</Text>
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 }}>
        <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}>Signup</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={{ marginBottom: 10, padding: 10, width: 300, backgroundColor: '#f0f0f0' }}
        />
        <TextInput
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholder="Address"
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
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignupWorker')}>
          <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Signup as Service Provider</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Login Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Signup;
