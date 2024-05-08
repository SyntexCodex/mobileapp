import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomDrawer = ({ navigate }) => (
  <View style={styles.drawerMenu}>
    <TouchableOpacity style={styles.drawerMenuItem} onPress={() => navigate('home')}>
      <Text>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.drawerMenuItem} onPress={() => navigate('notifications')}>
      <Text>Notifications</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.drawerMenuItem} onPress={() => navigate('profile')}>
      <Text>Profile</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  drawerMenu: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft: 20,
  },
  drawerMenuItem: {
    marginBottom: 10,
  },
});

export default CustomDrawer;
