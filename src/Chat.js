import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image, TextInput } from 'react-native';
import { black } from './Constants';

// Header Component
const logoImage = require('./Components/logo.jpeg');

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={logoImage} style={styles.logo} />
      <Text style={styles.headerText}>Society Connect</Text>
    </View>
  );
};

// Footer Component
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.credits}>App Credits:</Text>
      <Text style={styles.creditItem}>Developed by Roohulah</Text>
      <Text style={styles.creditItem}>Designed by Jane Roohullah</Text>
      <Text style={styles.creditItem}>Contributions by Hassan Muaz</Text>
    </View>
  );
};

// Chat Component
const Chat = () => {
  const [fadeInOut] = useState(new Animated.Value(0));
  const [message, setMessage] = useState('');

  useEffect(() => {
    Animated.timing(fadeInOut, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSend = () => {
    // Logic to handle sending message
    console.log('Message sent:', message);
    // Clear input field
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Header />
      <Animated.View style={[styles.body, { opacity: fadeInOut }]}>
        {/* Chat content */}
        <View style={styles.chatContainer}>
          {/* Display chat messages */}
          <Text style={styles.chatText}>Chat goes here...</Text>
        </View>
        {/* Input field for typing message */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={message}
            onChangeText={setMessage}
          />
          {/* Button to send message */}
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Background color of the page
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: black,
  },
  logo: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatText: {
    fontSize: 18,
    color: black,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#2196F3', // Send button background color
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
  },
  credits: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  creditItem: {
    marginBottom: 3,
  },
});

export default Chat;
