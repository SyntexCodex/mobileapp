import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { black } from './Constants';
import Btn from './Button';

// Assume you have a logo image imported or require it from a file
const logoImage = require('./Components/logo.jpeg');

const Mainpage = ({ navigation }) => {
  const handleServicesPress = () => {
    navigation.navigate('Services');
  };

  const handleNotificationsPress = () => {
    navigation.navigate('SecurityNotificationScreen');
    
  };

  const handleChatPress = () => {
    navigation.navigate('Chat');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Logo and header text */}
        <View style={styles.headerLeft}>
          <Image source={logoImage} style={styles.logo} />
          <Text style={styles.headerText}>Society Connect</Text>
        </View>

        {/* Security Notifications button */}
        <TouchableOpacity onPress={handleNotificationsPress} style={styles.notificationButton}>
          <Text style={styles.notificationText}>Security Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.buttonContainer}>
          <Btn bgColor={black} textColor="white" btnLabel="Services" width={200} Press={handleServicesPress} />
          <Btn bgColor={black} textColor="white" btnLabel="Chat" width={200} Press={handleChatPress} />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.credits}>App Credits:</Text>
        <Text style={styles.creditItem}>Developed by Roohullah</Text>
        <Text style={styles.creditItem}>Designed by Roohulah</Text>
        <Text style={styles.creditItem}>Contributions by Hassan Muaz</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: black,
  },
  notificationButton: {
    padding: 10,
  },
  notificationText: {
    fontSize: 16,
    color: black,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
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

export default Mainpage;
