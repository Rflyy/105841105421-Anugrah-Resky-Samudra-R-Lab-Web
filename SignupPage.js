import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const ButtonCustom = ({ text, color }) => (
  <View style={[styles.button, { backgroundColor: color }]}>
    <Text style={styles.buttonText}>{text}</Text>
  </View>
);

const TextInputCustom = ({ placeholder, keyboardType }) => (
  <TextInput
    placeholder={placeholder}
    keyboardType={keyboardType}
    style={styles.input}
  />
);

const App = () => {
    const [dapatFont] = useFonts({
        'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
        'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf')
    });
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sign up</Text>
        <View style={styles.form}>
          <TextInputCustom placeholder="Name" keyboardType="default" />
          <TextInputCustom placeholder="Email" keyboardType="email-address" />
          <TextInputCustom placeholder="Password" keyboardType="default" />
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10}}>
            <Text style={{ fontSize: 15, textAlign: 'flex-end', marginLeft: 170, fontFamily: 'MetroMedium'}}>Already have an account?</Text>
          </View>
          <ButtonCustom text="SIGN UP" color="grey" />
        </View>
      </View>
      <Text style={styles.orSignUpWithSocial}>or continue with</Text>
      <View style={styles.logoRow}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/google.png')} style={styles.logo} />
        </View>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/facebook.png')} style={styles.logo} />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    fontFamily: 'MetroBold'
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 18,
  },
  alreadyHaveAccount: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  orSignUpWithSocial: {
    fontSize: 16,
    textAlign: 'center',
  },
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logoContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
});