import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import BottomPopup from './src/BottomPopup';
import PopScroll from './src/PopScroll';
import Icons from "react-native-vector-icons/FontAwesome"
import Thirdpop from './src/Thirdpop'
import Fourthpop from './src/Fourthpop'
import Fifthpop from './src/Fifthpop'

const popupList = [
  { id: 0, name: 'Pulses' },
  { id: 1, name: 'Grains' },
  { id: 2, name: 'Cereals' },
  { id: 3, name: 'Greens' }
]


export default class Pop extends Component {
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
      
     <View style={{flex:1,marginHorizontal:"3%",marginVertical:"5%"}}>
      <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
      
       
       <PopScroll />
       <Thirdpop />
       <Fourthpop />
       <Fifthpop />

        </ScrollView>
      
        </View>
       
       
        
     
    );
  }
}