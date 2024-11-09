import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import BottomPopup from './BottomPopup';

import Icons from "react-native-vector-icons/FontAwesome"


const Second = [
  { id: 0, name: "SainBury's" },
  { id: 1, name: 'Lakshmi Stores' },
  { id: 2, name: 'Tesco' },
  { id: 3, name: 'Asda' }
]


export default class PopScroll extends Component {
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
          <Text style={{ color:"black" }}> Stores </Text>
          <Icons style={{marginTop:3}} name="chevron-down"/>
          </View>
        
        
     
        </TouchableOpacity> 
       <BottomPopup
          show={isShow}
          title={"STORES"}
          animationType={"fade"}
          closePopup={this.close}
          data={Second}
          haveOutsideTouch={true}
        />
       
       
        
        </View>
        
       
       
        
    
    );
  }
}