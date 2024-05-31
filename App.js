import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { setStatusBarBackgroundColor } from 'expo-status-bar'

const App =() => {
  return (
    <View style={{
      flex: 1,
    }}>

<View style={{
  flex: 1,
  flexDirection:'row'
}}>
          <View style={{
          flex: 1, 
          backgroundColor: 'white',
          }}>
        </View>
        <View style={{
          flex: 1,
          backgroundColor: 'purple',
          }}>
    </View>
    </View>
      <View style={{
        flex: 1,
        backgroundColor: 'pink',
        }}> 
        </View>

      <View style={{
        flex: 1,
        backgroundColor: 'blue',
        }}></View>
      

    </View>

    
  )
}

export default App