import React from 'react'
import { View , Text , FlatList , ScrollView , Image } from 'react-native';
 



const items = [
    { image : require("./Assets/images/bread.png") ,
        text:"bread",

    },
    {
        image : require('./Assets/images/deals.png'),
        text:'deal',
    },

    {
        image : require('./Assets/images/coffee.png'),
        text:'coffee',
    },
    {
        image : require('./Assets/images/fast-food.png'),
        text:'quickies',
    },
    {
        image : require('./Assets/images/shopping-bag.png'),
        text:'bag',
    }
] 

function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style = {{
        marginTop:10,
        marginLeft:10
    }} >
        
        {items.map((item) => (
            <View style = {{
            alignItems: 'center', 
            marginRight:30,
            
        }}
        key = {item.image}
        >
            <Image 
                source={ item.image }
                style = {{
                    resizeMode: 'contain',
                    width:50,
                    height:40,
                }}
            />
            <Text style = {{ fontWeight:'900'  , fontSize:15}}>{ item.text }</Text>
        </View>))}
    </ScrollView>
  )
}

export default Categories