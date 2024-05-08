import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Background from './Background';
import Btn from './Button';
import { darkGreen, green, black, blue } from './Constants';

const Home = (props) => {
  return (
    <View style={{ backgroundColor: 'white', height: "100%" }}>
      
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}><Image style={{height:'20%', width:'55%', }}  source={require('./Components/logo.jpeg')}/>
        <Text style={{ marginTop:'5%' ,color: 'black', fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>Society Connect</Text>
      </View>
      <View style={{ marginBottom:'10%', alignItems: 'center' }}>
        <Btn bgColor={black} textColor='white' width={300} btnLabel="Get Started" Press={() => props.navigation.navigate("AgreementScreen")} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Home;