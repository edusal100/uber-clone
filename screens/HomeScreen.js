import { Image, StyleSheet, Text, View } from 'react-native'

import { GOOGLE_MAPS_APIKEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
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
      <GooglePlacesAutocomplete
        placeholder='Where from?'
        styles={{
          container: {
            flex: 0
          },
          textInput: {
            fontSize: 18,
          }
        }}
        query= {{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en'
        }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
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



