import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Animated, Image, Linking } from 'react-native';

// Header Component
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Society Connect</Text>
    </View>
  );
};

// Footer Component
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.credits}>App Credits:</Text>
      <Text style={styles.creditItem}>Developed by John Doe</Text>
      <Text style={styles.creditItem}>Designed by Jane Smith</Text>
      <Text style={styles.creditItem}>Contributions by Alex Johnson</Text>
    </View>
  );
};
const PlumberProfile = ({ name, number, info, photo }) => {
    const handleCallPlumber = () => {
      Linking.openURL(`tel:${number}`);
    };

  return (
    <View style={styles.profileContainer}>
      <Image source={photo} style={styles.photo} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.info}>{info}</Text>
      <TouchableOpacity style={styles.callButton}onPress={handleCallPlumber}>
        <Text style={styles.callButtonText}>Call Plumber</Text>
      </TouchableOpacity>
    </View>
  );
};

const Plumber = () => {
  const [fadeInOut] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeInOut, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  // Dummy data for plumber profiles
  const plumberProfiles = [
    {
      name: 'qanit',
      number: '123-456-7890',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      photo: require('./Components/logo.jpeg'), // Replace with actual image paths
    },
    {
      name: 'Awais',
      number: '987-654-3210',
      info: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      photo: require('./Components/logo.jpeg'), // Replace with actual image paths
    },
    // Add more plumber profiles as needed
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Animated.ScrollView contentContainerStyle={styles.contentContainer} style={{ opacity: fadeInOut }}>
        {plumberProfiles.map((profile, index) => (
          <PlumberProfile key={index} {...profile} />
        ))}
      </Animated.ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Background color of the page
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    color: 'black',
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
  profileContainer: {
    width: '80%',
    backgroundColor: '#E0E0E0', // Background color of each profile
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  number: {
    fontSize: 16,
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    marginBottom: 10,
  },
  callButton: {
    backgroundColor: '#2196F3', // Background color of the "Call Plumber" button
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  callButtonText: {
    color: '#FFFFFF', // Text color of the "Call Plumber" button
    fontWeight: 'bold',
  },
});

export default Plumber;
