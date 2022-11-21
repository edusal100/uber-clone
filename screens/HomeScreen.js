import { Image, StyleSheet, Text, View } from 'react-native'

import NavOptions from '../components/NavOptions'
import React from 'react'
import tw from 'twrnc'

const HomeScreen = () => {
  return (
    <View style={tw`bg-white flex-1 p-5`}>
      <Image
      style={{width: 100, height:100, resizeMode: 'contain'}}
      source={{uri: 'https://links.papareact.com/gzs'} }
      />
    <NavOptions/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})



