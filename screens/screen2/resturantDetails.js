import { View, Text , Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'
const ResturantDetails = ({route}) => {
  return (
    <View>
        <Image source={{uri:route.params.image}} style = {{
            width:'100%',
            height:200,
            
        }} />
        <Text style = {{fontSize:25 , fontWeight:'600' , marginTop:10}}>{route.params.title}</Text>
        <Text style = {{fontSize:18 , fontWeight:'300'}} >{route.params.description}</Text>
        <Divider width={2} style = {{marginHorizontal:25}}  />
    </View>
  )
}

export default ResturantDetails