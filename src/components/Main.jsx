import React from 'react'
import { View, Text } from 'react-native'
//import Constants from "expo-constants"
import Challenges from './Challenges'
import Credits from './Credits'
import Imagenes from './Imagenes'
import AppBar from './AppBar'
import { Switch, Route, Routes } from "react-router-native"

export default function Main() {
  return (
    <View /*style={{marginTop: Constants.statusBarHeight}} Con este estilo le doy el margin necesario para cualquier smartphone*/    
    > 
      <AppBar/>
      <Routes>
        <Route path="/" element={<Challenges />} />
        <Route path="/signin" element={<Credits />} />
        <Route path="/images" element={<Imagenes />} />
      
      </Routes>
    </View>
  )
}