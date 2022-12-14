import { StyleSheet, Text, View } from 'react-native'

import { GOOGLE_MAPS_APIKEY } from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { setDestination } from '../slices/navSlice'
import tw from 'twrnc'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();


  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning, Eduardo</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete 
                placeholder='where to?'
                styles={toInputBoxStyles}
                fetchDetails={true}
                enablePoweredByContainer={false}
                minLength={2}
                onPress={(data, details = null)=> {
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description
                    }))
                    navigation.navigate('RideOptionsCard')
                }}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}  
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
        </View>
      </View>
    </View>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
       backgroundColor: 'white',
       paddingTop: 20,
       flex: 0 
    },
    textInput: {
        backgroundColor: '#d3d3d3',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})