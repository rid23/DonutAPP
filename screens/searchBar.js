import React from 'react'
import { View , Text , TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
function SearchBar() {
  return (
    <View style={{ marginTop:2 , flexDirection:'row' , marginBottom:10}}>
        
        <GooglePlacesAutocomplete 
            query= {{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}
            placeholder='Search'
            
            styles = {{
                
                textInput:{
                    
                    backgroundColor:'#eee',
                    borderRadius:20,
                    fontWeight:'700',
                    color:'black',
                    marginTop:7,
                    paddingHorizontal:10
                } , 
                textInputContainer:{
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'#eee',
                    borderRadius:50,
                    marginHorizontal:10
                },

                description:{
                    color:'black',
                }

                
            }}

            renderLeftButton={() => (
                <View style={{ marginLeft:10 }}>
                    <Ionicon name='location-sharp' size={24}  style = {{color:'black'}} />
                </View>
            )}

            renderRightButton = {() => (
            
            <TouchableOpacity>
                <View style={{
                    flexDirection:'row' , 
                    marginRight:10,
                    backgroundColor:'black',
                    padding:10,
                    alignItems:'center',
                    borderRadius:30,
                    justifyContent:'center',
                    
                    }}>
                    <AntDesign name='clockcircle' size = {11} style={{ marginRight:8 , color:'white' }}/>
                    <Text style = {{ paddingRight:5 , fontWeight:'600' , color:'white' }}>Search</Text>
                    
                </View>
            </TouchableOpacity>
            )}
        />

    </View>
  )
}

export default SearchBar;
