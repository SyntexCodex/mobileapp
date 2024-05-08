
import React ,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/Login';
import Signup from './src/Signup';
import Home from './src/Home';
import Otpscreen from './src/Otpscreen';
import AgreementScreen from './src/Agreement';
import Dashboard from './src/Dashboard';
import SignupWorker from './src/SignupWorker';
import { createStackNavigator } from '@react-navigation/stack';
import Mainpage from './src/Mainpage';
import Services from './src/Services';
import SecurityNotificationScreen from './src/SecurityNotificationScreen';
import Maid from './src/Maid';
import Plumber from './src/Plumber';
import Electrician from './src/Electrician';
import Chat from './src/Chat';

const Stack = createStackNavigator();

function App() {
 
  return (
<NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
   
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignupWorker" component={SignupWorker} />
        <Stack.Screen name="Otp" component={Otpscreen} /> 
        <Stack.Screen name="AgreementScreen" component={AgreementScreen} />
       <Stack.Screen name="Dashboard" component={Dashboard} /> 
       <Stack.Screen name="Mainpage" component={Mainpage} />
       <Stack.Screen name="Services" component={Services} />
       <Stack.Screen name="SecurityNotificationScreen" component={SecurityNotificationScreen} />
       <Stack.Screen name="Maid" component={Maid} />
       <Stack.Screen name="Plumber" component={Plumber} />
       <Stack.Screen name="Electrician" component={Electrician} />
       <Stack.Screen name="Chat" component={Chat} />
       



    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;

