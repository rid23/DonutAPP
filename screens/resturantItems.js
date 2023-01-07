import React , {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View , Text , TouchableOpacity , Image} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import items from './Items';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function ResturantItems( {navigation , ...props} ) {

    const [ItemData , setItemData] = useState(items)
  return (
    <View>
    {ItemData.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate("ResturantDetails" , {
            image:item.image,
            title:item.title,
            price:item.price,
            rating:item.rating,
            description:item.description,
        })} 

        
         >
        <View style = {{
            marginTop:10,
            padding:15,
            backgroundColor:'#eee',
            borderRadius:20,
            marginHorizontal:10
        }}
    
        >
            <ResturantImage image = {item.image}  />
            <ResturantInfo title={item.title} price = {item.price} rating = {item.rating} timeOfArrival={item.eta}  />
        </View>
        </TouchableOpacity>
    ))}
    </View>
  )
}


const ResturantImage = (props) => (
    <>
        <Image
            source={{uri: props.image}}

            style = {{
                width: '100%',
                height: 180,
                borderRadius:15

            }}
        />
        <TouchableOpacity style={{
            position:'absolute',
            top: 20,
            right: 20
        }} >
            <MaterialCommunityIcons name = 'heart-outline' size={24} color='red' />
        </TouchableOpacity>
    </>
)

const ResturantInfo = (props) => (
    <View style = {{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:8,
        alignItems:'center',
    }}>
        <View>
            <Text style ={{ fontSize:15 , fontWeight:'bold' }}>{props.title}</Text>
            <View style = {{
                flexDirection:'row',
                alignItems:'center',
            }}>
                <MaterialCommunityIcons name = 'timer' color='green' size={11}  style = {{ marginRight:2 }}/>
                <Text style = {{fontSize:13 , color:'gray'}} >{props.timeOfArrival} . min</Text>
            </View>

            <View style = {{
                flexDirection:'row',
                alignItems:'center',
                marginLeft:3
            
            }}>
                <FontAwesome name = 'rupee' size = {11}  style = {{ marginTop:2 , color:'gray' , marginRight:2}}/>
                <Text style = {{fontSize:12 , fontWeight:'800' , color:'gray'}}>{props.price} . For Two</Text>
            </View>
        </View>

        <View style = {{
            flexDirection: 'row',
            backgroundColor:'green',
            paddingVertical:3,
            paddingHorizontal:10,
            height:30,
            borderRadius:5,
            alignItems: 'center',
            justifyContent:'space-evenly',
            marginRight:15
        }}>
            <Ionicon name = 'md-star-half' size = {11}  style = {{ marginRight:2 }} color='white' />
            <Text style = {{
                color:'white',
                fontSize:13,
                fontWeight:'500' 
            }}>{props.rating}</Text>
        </View>
    </View>
)

export default ResturantItems