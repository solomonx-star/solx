import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Year1 = () => {
  return (
    <View style = {styles.year1}>
        
        <View style = {styles.textHeader}>
        <Text style = {styles.header} >Year 3 and Year 4</Text>
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

  year1: {
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

export default Year1;