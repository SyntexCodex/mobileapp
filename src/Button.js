import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { blue } from './Constants';

export default function Btn({ bgColor, btnLabel, textColor, Press, width }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={[styles.button, { backgroundColor: blue, width: width }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{btnLabel}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

