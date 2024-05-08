import React, { useState, useRef } from 'react';
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native';

const OTPScreen = (props) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]; // Refs for each OTP input

  const handleOTPChange = (text, index) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);

    // Move cursor to the next input field
    if (text.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleVerifyOTP = () => {
    const enteredOTP = otp.join('');
    const correctOTP = '0000';
    if (enteredOTP === correctOTP) {
      Alert.alert('Success', 'OTP Verified!');
      props.navigation.navigate('AgreementScreen');
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.codeText}>Enter 4-Digit Code</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder=""
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOTPChange(text, index)}
            ref={inputRefs[index]} // Assign ref to each input
          />
        ))}
      </View>
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  codeText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 50,
    textAlign: 'center',
    marginHorizontal: 5,
    color: 'black',
  },
});

export default OTPScreen;
