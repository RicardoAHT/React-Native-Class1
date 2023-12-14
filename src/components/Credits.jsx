import { View, Text } from 'react-native'
import React from 'react'
import StyledText from './StyledText'

export default function Credits() {
  return (
    <View style={{flexDirection: "row", justifyContent:"space-around"}}>
        <View>
            <StyledText fontWeight="bold">Creador:</StyledText>
            <StyledText>Ricardo Herrera</StyledText>
        </View>
        <View>
            <StyledText fontWeight="bold">Fundador:</StyledText>
            <StyledText>Ricardo Herrera</StyledText>
        </View>
    </View>
  )
}