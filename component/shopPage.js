import { View, Text, Image } from 'react-native'
import React from 'react'

const shopPage = () => {
  return (
    <View>
      <Image source={require('../assets/img/hero.png')} style={{width:'100%', height:500, resizeMode:'contain', alignSelf:'center', alignItems:'center'}} />
    </View>
  )
}

export default shopPage