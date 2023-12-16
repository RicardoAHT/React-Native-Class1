import React from 'react'
import { View } from 'react-native'
//import Constants from "expo-constants"
import Imagenes from './Imagenes'
import AppBar from './AppBar'
import { Route, Routes } from "react-router-native"
import HomePage from '../pages/HomePage'
import LogInPage from '../pages/LogInPage'

export default function Main() {
  return (
    <View /*style={{marginTop: Constants.statusBarHeight}} Con este estilo le doy el margin necesario para cualquier smartphone*/    
    > 
      <AppBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<LogInPage />} />
        <Route path="/images" element={<Imagenes />} />   
      </Routes>
    </View>
  )
}