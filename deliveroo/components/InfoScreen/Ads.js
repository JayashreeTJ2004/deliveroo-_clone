import React,{Component} from 'react'; 
import {View,Text,StyleSheet,Image} from 'react-native'; 
import {StatusBar} from 'expo-status-bar'; 

class Ads extends Component{ 
  render(){ 
    return( 
     <View style={{marginLeft:3,height:200,width:350,borderRadius:5,borderColor:"#e1edec",borderWidth:0.5,marginStart:5,borderTopEndRadius:5,shadowColor:"black",shadowOffset:{width:0,height:8},shadowOpacity:0.16,shadowRadius:16}}>
                 
                    <Image source={this.props.ads}
                       style={{height:null,width:null,flex:2,resizeMode:'stretch'}}/>
                  </View>
                
    );
  }
}
export default Ads;