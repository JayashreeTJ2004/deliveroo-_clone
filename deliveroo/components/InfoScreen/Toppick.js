import React,{Component} from 'react'; 
import {View,Text,StyleSheet,Image} from 'react-native'; 
import {StatusBar} from 'expo-status-bar'; 
import Icons from 'react-native-vector-icons/FontAwesome'
class Toppick extends Component{ 
  render(){ 
    return(
 <View style={{marginStart:3,borderColor:"#e1edec",borderRadius:5,borderWidth:0.5,height:230,width:280,borderBottomColor:"#e1edec",shadowColor:"black",shadowOffset:{width:0,height:8},shadowOpacity:0.16,shadowRadius:16}}>
           <View style={{flex:2}}>
             <Image source={this.props.image}
                    style={{flex:1,height:null,width:null,resizeMode:'stretch'}}/>
           </View>
           <View style={{flex:1,marginTop:15}}>
            <Text style={{marginStart:7,marginTop:6,fontSize:18,fontWeight:'bold'}}>{this.props.text}</Text>
            <View style={{flexDirection:'row',marginStart:8}}>
             <Icons name={'star'}  size={18} color="#369c78"/> 
             <Text style={{color:"#369c78",marginLeft:5}}>{this.props.review}</Text>
             <Text style={{color:"#989c9b"}}>{this.props.val}</Text>
              </View>    
              <View style={{marginStart:8}}>
              <Text style={{color:"#989c9b"}}>{this.props.milprice}  </Text>
              </View> 
          </View>
  </View>  
    );
  }
}
export default Toppick;