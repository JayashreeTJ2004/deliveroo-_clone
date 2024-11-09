import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import BottomPopup from './BottomPopup';

import Icons from "react-native-vector-icons/FontAwesome"


const Third = [
  { id: 0, name: "DryBean" },
  { id: 1, name: 'Lentils' },
  { id: 2, name: 'Bambara bean' },
  { id: 3, name: 'Pulse res' }
]


export default class Thirdpop extends Component {
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
          ,flexDirection:"row",borderColor:"#a9abaa",borderRadius:10,borderWidth:0.5,marginHorizontal:"3%"}}
          onPress={() => {
            this.setState({
              isShow: !this.state.isShow
            })
          }}
        >
     <View style={{flexDirection:"row"}}>
          <Text style={{ color:"black" }}> Pulses </Text>
          <Icons style={{marginTop:3}} name="chevron-down"/>
          </View>
        
        
     
        </TouchableOpacity> 
       <BottomPopup
          show={isShow}
          title={"PULSES"}
          animationType={"fade"}
          closePopup={this.close}
          data={Third}
          haveOutsideTouch={true}
        />
       
       
        
        </View>
        
       
       
        
    
    );
  }
}