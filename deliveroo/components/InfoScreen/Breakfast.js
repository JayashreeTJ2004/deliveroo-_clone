import React,{Component} from 'react'; 
import {StyleSheet,View,Text,ScrollView,Image} from 'react-native'; 
import Icons from 'react-native-vector-icons/FontAwesome'; 

class Breakfast extends Component{ 
  render() { 
    return(
  <View style={{height:30,borderColor:"#dcdcde",borderWidth:2,marginHorizontal:3,borderRadius:5}}>
           <View style={{flexDirection:"row"}}>
           <Text style={{marginHorizontal:2}}>{this.props.name}</Text>
           <Icons style={{marginVertical:5,marginHorizontal:2}}name="chevron-down" color="#cccdcf"/>
           </View>
           </View>
    );
  }
}
export default Breakfast;
