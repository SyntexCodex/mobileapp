import React, { useState } from 'react';
import { View, Text, StyleSheet, DrawerLayoutAndroid } from 'react-native';
import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationsScreen';

import CustomDrawer from './Components/CustomDrawer';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  const navigate = (screen) => {
    setSelectedTab(screen);
    this.drawer.closeDrawer();
  };

  return (
    <DrawerLayoutAndroid
      ref={(ref) => (this.drawer = ref)}
      drawerWidth={200}
      drawerPosition="left"
      renderNavigationView={() => <CustomDrawer navigate={navigate} />}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard</Text>
        </View>
        {selectedTab === 'home' && <HomeScreen />}
        {selectedTab === 'notifications' && <NotificationsScreen />}
       
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"12%"
  },
  header: {
    backgroundColor: 'blue',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Dashboard;

