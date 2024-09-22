import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import IntroScreen from './Views/IntroScreen'
import MainScreen from './Views/MainScreen'

export default function App() {
  const [isloaded, setIsLoaded] = useState(false)

  setTimeout(()=>{
    setIsLoaded(true)
  },2000)
  return (
    <View>
      {isloaded ? <MainScreen/> : <IntroScreen/>}
    </View>
  )
}

const styles = StyleSheet.create({})