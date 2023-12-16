import { View, Text } from 'react-native'
import React from 'react'
import Challenges from '../components/Challenges'
import Credits from '../components/Credits'

export default function HomePage() {

  return (
    <View>
      <Text>HomePage</Text>
      <Challenges/>
      <Credits/>
    </View>
  )
}