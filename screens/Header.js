import React from 'react'
import { View , SafeAreaView , Text , FlatList  , TouchableOpacity , Platform , StatusBar} from 'react-native'
import { useState , useEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'




function Header() {
    const [activeTabs , setActivetabs] = useState('Delivery');

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop:20,
        marginHorizontal:20,
        marginBottom:10
      }}
    >
      <Headerbutton
        text="Delivery"
        btncolor="black"
        txtColor="white"
        activetab={activeTabs}
        setactivetab={setActivetabs}
      />
      <Headerbutton
        text="Pickup"
        btncolor="white"
        txtColor="black"
        activetab={activeTabs}
        setactivetab={setActivetabs}
      />

    </View>
  );

}

const Headerbutton = (props) => (
    
    <TouchableOpacity
        style={{
            backgroundColor: props.activetab === props.text ? 'black' : 'white',
            paddingVertical:5,
            paddingHorizontal:10,
            borderRadius:30
        }}
        
        onPress = {() => {props.setactivetab(props.text)}}
    >
        <Text style={{color: props.activetab === props.text ? 'white' : 'black' , fontWeight:'900' , fontSize:16 }}>
            {props.text}
        </Text>

    </TouchableOpacity>

)

export default Header