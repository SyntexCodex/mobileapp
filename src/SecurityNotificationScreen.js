import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { black, blue } from './Constants';
import axios from 'axios';


const logoImage = require('./Components/logo.jpeg');

const SecurityNotificationScreen = ({ navigation }) => {
  const [notifications, setNotifications] = useState([]);
  const [fadeInOut] = useState(new Animated.Value(0));

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/notifications');
        setNotifications(response.data);
        // Fade in animation for notifications
        Animated.timing(fadeInOut, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);


  const handleCheckedPress = () => {
    navigation.navigate('Mainpage'); // Navigate back to the main page
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={logoImage} style={styles.logo} />
          <Text style={styles.headerText}>Society Connect</Text>
        </View>
      </View>

      {/* Body */}
      <Animated.View style={[styles.body, { opacity: fadeInOut }]}>
      {notifications.map((notification, index) => (
          <View key={index} style={styles.notificationBox}>
            <Text style={styles.notificationText}>{notification.message}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.checkedButton} onPress={handleCheckedPress}>
          <Text style={styles.checkedButtonText}>Checked</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.credits}>App Credits:</Text>
        <Text style={styles.creditItem}>Developed by John Doe</Text>
        <Text style={styles.creditItem}>Designed by Jane Smith</Text>
        <Text style={styles.creditItem}>Contributions by Alex Johnson</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
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
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBox: {
    padding: 20,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  notificationText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkedButton: {
    backgroundColor: blue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkedButtonText: {
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

export default SecurityNotificationScreen;
