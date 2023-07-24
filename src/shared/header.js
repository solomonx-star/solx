import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const header = () => {
  return (
    <View style = {styles.header1} >
        <Text style = {styles.header} >University Of Makeni</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    
    
  },

  header1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})

export default header;
