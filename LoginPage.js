import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import React from 'react';

const ButtonCustom = ({ text, color }) => {
  return (
    <View style={{
      backgroundColor: color,
      width: '100%',
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      marginTop: 20,
    }}>
      <Text style={{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      }}>
        {text}
      </Text>
    </View>
  );
};

const TextInputCustom = ({ placeholder, keyboardType }) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={{
        width: '100%',
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
        fontSize: 18,
      }}
    />
  );
};

const App = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.form}>
          <TextInputCustom placeholder="Email" keyboardType="email-address" />
          <TextInputCustom placeholder="Password" keyboardType="default" />
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}>
            <Text style={styles.ForgotPasswordtext} onPress={() => navigation.navigate('Forgot Password')}>Forgot your password?</Text>
          </View>
          <ButtonCustom text="LOGIN" color="grey" />
        </View>
      </View>
      <Text style={{ fontSize: 16, textAlign: 'center', fontFamily: 'MetroMedium' }}>Continue with</Text>
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
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 40,
    fontFamily: 'MetroBold'
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  logoContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  ForgotPasswordtext: {
    fontSize:15,
    textAlign: 'flex-end',
    marginLeft: '150',
    fontFamily: 'MetroMedium',
  }
});
