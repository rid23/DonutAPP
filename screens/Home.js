import React  , {useState} from 'react'
import { Text , View  , SafeAreaView , Platform ,StatusBar , ScrollView} from 'react-native' 
import Header from './Header' 
import SearchBar from './searchBar';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Categories from './categories';
import ResturantItems from './resturantItems';
import items from './Items';
import {Divider} from 'react-native-elements'
import Bottomtabs from './BottomTabs';


function Home( {navigation} ) {
  const [data , setData] = useState(items);
  return (

        <SafeAreaView style={{
          
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          flex:1,
          }}>
            
            <Header />
            <SearchBar />
            <ScrollView  showsVerticalScrollIndicator={false} >
              <Categories />
              <ResturantItems navigation={navigation} />
            </ScrollView>             
            <Divider width = {1} style = {{
              borderRadius:40
            }} />
            <Bottomtabs />
        </SafeAreaView>

  )
}

export default Home