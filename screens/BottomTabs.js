import { View, Text  , TouchableOpacity} from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useState } from 'react'



export default function Bottomtabs() {
    const [activeBottomTab , setactiveBottomTab] = useState('Home') 

  return (
    <View style = {{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        height: 65,
        backgroundColor:'black',
        borderTopEndRadius:40,
        borderTopStartRadius:40,
        
    }} >
      <BottomIcon Iconname='home' Icontext='Home' activeTab={activeBottomTab} setBottomTab={setactiveBottomTab} />
      <BottomIcon Iconname='th-large' Icontext='Categories' activeTab={activeBottomTab} setBottomTab={setactiveBottomTab} />
      <BottomIcon Iconname='shopping-cart' Icontext='Orders' activeTab={activeBottomTab} setBottomTab={setactiveBottomTab} />
      <BottomIcon Iconname='user-circle' Icontext='Profile' activeTab={activeBottomTab} setBottomTab={setactiveBottomTab} />
    </View>
  )
}


const BottomIcon = (props) => (
    <TouchableOpacity 
        onPress={() => {props.setBottomTab(props.Icontext)}} 
        style = {{justifyContent:'center' , alignItems:'center'}} >
        
            <FontAwesome5 name = {props.Iconname} size = {25}  style = {{
                color: props.activeTab === props.Icontext ? 'white' : 'gray'
            }} />
            
      
    </TouchableOpacity>
)