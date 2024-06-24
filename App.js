import React from 'react'
import { View, Text } from 'react-native'

const ButtonCustom = ({ text, color }) => (
  <View style={{
    backgroundColor: color,
    width: 250,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 10,
  }}>
    <Text style={{
      textAlign: 'center',
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    }}>
      {text}
    </Text>
  </View>
)

const App = () => (
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <ButtonCustom text="Login" color="red" />
    <ButtonCustom text="Logout" color="blue" />
    <ButtonCustom text="Register" color="green" />
  </View>
)

export default App