import React,{Component} from 'react'; 
import {StyleSheet,View,Text,Image} from 'react-native'; 
import Icons from 'react-native-vector-icons/FontAwesome'; 

class Brands extends Component{ 
  render(){ 
    return(
          <View style={{marginTop:7,height:70,width:280,marginStart:3,borderColor:"#e1edec",borderWidth:0.5,borderRadius:5,elevation:10,shadowColor:"black",shadowOffset:{width:0,height:8},shadowOpacity:0.16,shadowRadius:16}}>
          <View style={{flexDirection:'row'}}>
         <View style={{flex:1,justifyContent:"center"}}>
           <Image source={this.props.image}
                  style={{flex:1,height:null,width:null,resizeMode:'stretch'}}/> 
         </View>
        <View  style={{flex:2,justifyContent:'center'}}>
           <Text style={{marginStart:7,marginTop:6,fontSize:18,fontWeight:'bold'}}>{this.props.brand}
             </Text>
        <View style={{marginStart:5,flexDirection:"row"}}>
            <Icons name={'star'}  size={18} color="#369c78"/> 
             <Text style={{color:"#369c78",marginLeft:5}}>{this.props.review}</Text>
             <Text style={{color:"#989c9b"}}>{this.props.val}</Text>
        </View>
           <View style={{marginStart:8}}>
              <Text style={{color:"#989c9b"}}>{this.props.milprice}  </Text>
            </View> 
            </View>
         </View>
        </View>
    );
  }
}
export default Brands;