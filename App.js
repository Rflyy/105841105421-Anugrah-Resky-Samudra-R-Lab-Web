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

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Forgot password</Text>
        <View style={styles.form}>
          <Text style={{ fontSize: 13, textAlign: 'flex-end', marginBottom: 10, fontFamily: 'MetroMedium' }}>
            Please, enter your email address. You will receive a link to create a new password via Email.
          </Text>
          <TextInputCustom placeholder="Email" keyboardType="email-address" />
          <ButtonCustom text="SEND" color="grey" />
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
    fontFamily:'MetroBold'
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
});