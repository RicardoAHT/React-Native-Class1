import React from 'react'
import { View, Text, Image } from 'react-native'
import StyledText from './StyledText'

export default function Imagenes() {
  return (
    <View style={{alignItems:'center', marginTop: 20}}>
      <Text 
        style={{marginBottom:10, }
      }>
        Imagenes
      </Text>
      <Image 
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJ54j0xkeqChl_ZK-zyxHKU0WSbAZwlMYmQ&usqp=CAU"}}
        style={{width:200, height: 200, borderRadius:50}}
      />
      <StyledText color="primary">Este es el mejor equipo del mundo</StyledText>
    </View>
  )
}