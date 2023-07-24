import React from 'react'
import { Pressable } from 'react-native';
import { View, Image, Button, Text, Dimensions, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import solImage from '../../assets/calc2.jpg';
import  solImage1 from '../../assets/R.png';




export default function Home({navigation}) {

  

  const pressHandler = () => {
    navigation.navigate('Year3');
    // navigation.push('Year3')
  }
  
  const pressHandler2 = () => {
    navigation.navigate('Year1');
  }

  

  return (
    <View className = 'flex-1 items-center mt-2 ' >
      <View className = '' >
      <View className = ' w-screen h-44 shadow-lg' >
      <Image source = {solImage} 
              width = {Dimensions.get('window').width}
            style = {{width: '100%', height: '100%'}}
            />
      </View>
      </View>

      <View className = 'items-center mt-3' >
        <Text className = 'font-bold text-lg' >Unimak GPA calculator for Year  1 to 4</Text>
        <Text></Text>
      </View>
    {/* <ImageBackground source={solImage1}  style={{width: '100%', height: 4}} >
      <Text>Inside</Text>
    </ImageBackground> */}

      
      {/* <Pressable onPress = {pressHandler2} >
        <View className = 'items-center mt-44' >
        <View className = 'bg-blue-500 h-8 w-60 items-center justify-center rounded-lg' >
        <Text className = 'text-white font-bold'  >Year 1 and Year 2</Text>
        </View>
        </View>
      </Pressable>
      
      
      <Pressable onPress = {pressHandler} >
      <View className = 'items-center mt-10' >
        <View className = 'bg-blue-500 h-8 w-60 items-center justify-center rounded-lg' >
        <Text className = 'text-white font-bold' >Year 3 and Year 4</Text>
        </View>
        </View>
      </Pressable> */}


      {/* <View className = '' >
      <TouchableOpacity onPress={pressHandler3} >
        <Text>info</Text>
      </TouchableOpacity>
      </View> */}
      



      
        
        
        
    </View>
  )
}

