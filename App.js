import 'react-native-gesture-handler'

import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen 
          name='HomeScren' 
          component={HomeScreen} 
          options={{
            headerShown: false,
          }}/>
          <Stack.Screen 
          name='MapScreen' 
          component={MapScreen} 
          options={{
            headerShown: false,
          }}/>
        </Stack.Navigator>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
