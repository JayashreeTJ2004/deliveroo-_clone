import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions, Pressable} from 'react-native';  
import MapView,{PROVIDER_GOOGLE} from "react-native-maps";

export default function SecondScreen({ navigation }) {
  return (
<View style={styles.container}>  
      <MapView style={styles.map}
              provider={PROVIDER_GOOGLE} 
              showsUserLocation={true}
             />
      <Pressable style={styles.box} onPress={()=>{navigation.navigate('Info Display');}}>
         <Text style={styles.ts}>Confirm</Text>
  </Pressable>
  <StatusBar style="auto" />    
</View>                       
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',   
      
    },  
    map: {
        width: "100%",
        height:"100%",
      },
      box:{ 
        width:'100%',
        height:50, 
        justifyContent:'center' ,
        alignItems:'center',
        position:'absolute',
        backgroundColor:"#49f5e1",
        bottom:0
      }, 
     
      ts:{ 
        color:'white', 
        fontWeight:'bold', 
        fontSize:18

      }, 
      
});