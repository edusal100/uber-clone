import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Icon } from '@rneui/base';
import React from 'react'
import { selectOrigin } from '../slices/navSlice';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const data = [
    {
        id: '123',
        title: 'Got a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatScreen'
    }
]

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
        style={tw`flex-initial`}
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item})=>(
            <TouchableOpacity style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2`}
                onPress={()=> navigation.navigate(item.screen)}
                disabled={!origin}
            >
                <View style={tw`${!origin? 'opacity-20': 'opacity-100'}`}>
                    <Image
                        style={{width: 120, height: 120, resizeMode: 'contain'}}
                        source={{uri: item.image}}
                    />
                    <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                     style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                     name='arrowright' color='white' type='antdesign'/>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({
})