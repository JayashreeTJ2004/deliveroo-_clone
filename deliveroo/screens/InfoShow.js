import React from "react"; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Pressable,TextInput} from 'react-native'; 
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icon } from 'react-native-elements' ;
import Icons from 'react-native-vector-icons/FontAwesome';

export default function InfoShow({navigation}){ 
  return( 
        <View style={{flex:1,backgroundColor:"white"}}>
       <View style={{height:"20%",backgroundColor:"white",borderBottomColor:"#d1cdcd",borderBottomWidth:1,elevatioin:2,flexDirection:"row"}} > 
       <Pressable  onPress={()=>navigation.navigate("Info Display")}>
      <Icons
           
            name="arrow-left"
            size={15}
            color="#49f5e1"
          
              style={{width:20,height:20,marginTop:50,marginStart:10}}
             />
            </Pressable>
           
      
       <TextInput 

       placeholder="Restaurant,groceries,dishes"
       style={{borderWidth:0,color:"grey",width:200,height:"20%",marginVertical:50,marginStart:3}}
       />
      
      
       
      
       </View>
      </View>
     
      
      
       
   
  );
} 


