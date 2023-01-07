
//import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View , FlatList , Image , SafeAreaView , StatusBar , Platform} from 'react-native';
import React from 'react';


import RootNavigation from './Navigation';



export default function App() {
 


  return (
    <View style={{ 
      
      flex:1
     }}>
      <RootNavigation />

    </View>
);
}

