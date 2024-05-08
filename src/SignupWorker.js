import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { black, blue } from './Constants';
import Field from './Field';
import Btn from './Button';

const SignupWorker = (props) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleLoginPress = () => {
    props.navigation.navigate("Login");
  };

  const handleSignUPPress = () => {
    props.navigation.navigate("Otp");
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  return (
    <View>
      <View style={{ alignItems: 'center', backgroundColor: black }}>
        <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginTop: 20 }}>Register</Text>
        <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: "5%" }}>As a Service Provider</Text>
        <View style={{ backgroundColor: 'white', width: "100%", height: '100%', paddingTop: '10%', alignItems: 'center', borderRadius: 40 }}>
          <Field placeholder=" Name" />
          
          <Field placeholder="Job/profession" secureTextEntry={true} />
          <Field placeholder="Contact Number" keyboardType={'numeric'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Btn textColor="white" bgColor={black} btnLabel="Signup" width={'80%'} Press={handleSignUPPress} />

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}>Already have an account ?{' '}</Text>
            <TouchableOpacity onPress={handleLoginPress}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupWorker;
