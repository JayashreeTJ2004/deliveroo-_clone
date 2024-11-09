import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Alert} from 'react-native'; 


export default function HomeScreen({ navigation})  { 

  setTimeout(()=>{navigation.navigate('Select Location')},3000);
  return (
    
    <View style={styles.container}>  
      <Image
      style={styles.tinylogo}
      
      source={require('../assets/delilogoff.png')}/> 
      <Text style={styles.deli}>deliveroo </Text>  
      
      <StatusBar style="auto" />
    </View>                                
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#49f5e1",
    alignItems: 'center',
    justifyContent: 'center',   
    
  }, 
  deli: { 
    fontSize:40 ,
    color: 'white', 
    fontWeight:'bold'

  }, 
  tinylogo:{ 
    width:100,
    height:100,
  }, 
 
});
