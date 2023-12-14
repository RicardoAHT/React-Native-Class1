import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import theme from "../theme"

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBotton: 5,
        paddingTop: 5,
        //BackgroundColor: #fff
        /*
        borderRadius: 4
        overFlow: hidden  el border radius debe ir acompañado del overflow: hidden
        */
    },
    strong:{
        color:"#09f",
        fontWeight:"bold",
        marginBottom: 5
    }
})


export default function Challenges() {
  return (
    <View style={styles.container}>
      <Text style={styles.strong}>Challenges</Text>
      <Text>Prueba nuestros retos o responde con la verdad</Text>
      <View></View>
      <Text>Boton</Text>
    </View>
  )
}