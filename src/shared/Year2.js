import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';





const Year2 = () => {


  return (
    <View style = {styles.year2} >
        
        <View style = {styles.textHeader} >
        <Text style = {styles.header} >Year 1 and Year 2 </Text>
        </View>
        
        
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 50
  },

  year2: {
    flexDirection: 'row',
    height: '100%',
    width: '100%'

  },

  textHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center'
  }
})

export default Year2;

