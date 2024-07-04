import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import SignUpPage from './SignupPage';
import ForgotPasswordPage from './ForgotPasswordPage';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Ke Halaman Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up " onPress={() => navigation.navigate('SignUp')} />
      <Button title="Forgot Password" onPress={() => navigation.navigate('Forgot Password')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;