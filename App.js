import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const App = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
        <View style={{
          width: 140,
          height: 80,
          backgroundColor: 'red',
          borderRadius: 15,
          marginRight: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ color: 'white', fontSize: 25 }}>SIGN IN</Text>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
        <View style={{
          width: 140,
          height: 80,
          backgroundColor: 'blue',
          borderRadius: 15,
          marginLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ color: 'white', fontSize: 25 }}>SIGN UP</Text>
        </View>
      </View>
    </View>
  )
}

export default App
