import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import BottomPopup from './BottomPopup';

import Icons from "react-native-vector-icons/FontAwesome"


const Fifth = [
  { id: 0, name: "20% on Deli" },
  { id: 1, name: "30% on J's farm"},
  { id: 2, name: '5% on Tesco' },
  { id: 3, name: '15% on Asda' }
]


export default class Fifthpop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  close = () => {
    this.setState({
      isShow: false
    })
  }

  render() {
    const { isShow } = this.state;
    return (
     
      <View style={{flex:1}}>
      <TouchableOpacity
          style={{
            width: "100%", height: "20%",
            justifyContent: 'center', alignItems: 'center'
          ,flexDirection:"row",borderColor:"#a9abaa",borderRadius:10,borderWidth:0.5,marginEnd:"3%"}}
          onPress={() => {
            this.setState({
              isShow: !this.state.isShow
            })
          }}
        >
     <View style={{flexDirection:"row"}}>
          <Text style={{ color:"black" }}> Offers </Text>
          <Icons style={{marginTop:3}} name="chevron-down"/>
          </View>
        
        
     
        </TouchableOpacity> 
       <BottomPopup
          show={isShow}
          title={"OFFERS"}
          animationType={"fade"}
          closePopup={this.close}
          data={Fifth}
          haveOutsideTouch={true}
        />
       
       
        
        </View>
        
       
       
        
    
    );
  }
}