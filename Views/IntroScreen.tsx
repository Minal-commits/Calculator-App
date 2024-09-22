import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import logo from '../assets/logo.jpg'
export default function IntroScreen() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
        <View style={styles.inner}>
          <Image
            source={logo} style= {styles.imgStyle}
          />
          <Text style={styles.txtStyle}> Made by Minal Ranjit</Text>
        </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    height: '100%',

  },
  inner:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgStyle:{
    width: 150,
    height: 150
  },
  txtStyle:{
    color: "black",
    fontSize: 24,
    fontWeight: '600'
  }
})