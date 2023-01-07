import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home';
import ResturantDetails from './screens/screen2/resturantDetails';

const RootNavigation = () => {
    const Stack = createStackNavigator();
    const screenOptions = {
        headerShown: false,
    }
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'  screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ResturantDetails' component={ResturantDetails} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation