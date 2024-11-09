import React,{Component} from "react"; 
import {StyleSheet,Text,View,Image} from "react-native"; 
import {Divider } from "react-native-paper"; 

class ItemInfo extends Component{
  render(){
  return(
     <View style={{flexDirection:"row",marginTop:7,height:"11%",width:"90%",marginStart:3,borderColor:"#e1edec",marginRight:"5%",padding:"3%"}}>
     <View style={{flexDirection:"column",width:"80%",color:"#969696"}}>
     <Text style={{fontWeight:"bold",}}>{this.props.item}</Text>
     <Text style={{color:"#969696",marginVertical:"2%"}}>{this.props.infoo}</Text>
     <Text style={{color:"#969696"}}>{this.props.fat}</Text>
     <Text style={{color:"#969696"}}>{this.props.price}</Text>
     </View>
    
     <Image style={{height:"60%",width:"30%",resizeMode:"stretch"}} source={this.props.img} />
     </View>
     
     
  );
  }
}
export default ItemInfo;