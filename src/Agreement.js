import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { black,blue,white} from './Constants';
import Btn from './Button';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const AgreementScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        By tapping the arrow below, you agree to Society Connect's Terms of Use and acknowledge that you have read the Privacy Policy
      </Text>
      <Text style={styles.subtitle}>
        Check the box to indicate that you are at least 18 years of age, agree to the Terms & Conditions, and acknowledge the Privacy Policy.
      </Text>
      <View style={styles.buttonContainer}>
        <Btn
          backgroundColor={white}
          textColor={black}
          btnLabel="Agree and Continue"
          width={200}
          Press={() => {
            props.navigation.navigate("Mainpage");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    color: 'black',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    
  
  },
});

export default AgreementScreen;
