import React,{Component} from "react"; 
import {View,StyleSheet,Image,Text,TouchableOpacity,Pressable,ScrollView} from 'react-native'; 
import {StatusBar} from 'expo-status-bar'; 
import Icons from 'react-native-vector-icons/FontAwesome';
 
class Variety extends Component{ 
  render(){ 
    return( 
    
        <View  style={{height:70,width:70,borderWidth:0.5,borderColor:"#e1edec",marginLeft:5,borderRadius:5,shadowColor:"black",shadowOffset:{width:0,height:8},shadowOpacity:0.16,shadowRadius:16,zIndex:10}}> 
                      
                    <View style={{flex:2}}> 
                    
                    <Image  
                          source={this.props.imageu}
                          style={{flex:1,height:null,width:null,resizeMode:'cover'}}/>
                    </View>
                    <View style={{flex:1,marginStart:5,fontSize:15,paddingTop:1,alignItems:"center"}}> 
                    <Text >{this.props.dish}</Text>
                   
                    </View>
                    
          </View>  
         
         
    );
  }
} 
 
export default Variety;
