import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icons from 'react-native-vector-icons/FontAwesome';
class Favv extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'column', padding: '2%' }}>
          <Text style={{ color: '#969696', fontSize: 16 }}>
            {this.props.time}
          </Text>

          <View style={{ flexDirection: 'row', padding: '2%' }}>
            <Icons
              style={{ marginVertical: '1%' }}
              name="star"
              color="#12b03c"
            />
            <Text style={{ color: '#12b03c', fontSize: 16 }}>
              {this.props.rate}
              <Text style={{ color: '#969696' }}>{this.props.info}</Text>
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icons
              style={{ marginVertical: '1%' }}
              name="info-circle"
              color="#b4b5b8"
              size={15}
            />
            <Text style={{ color: '#969696' }}> Info</Text>
            
            <Icons  name="arrow-right" color="#49f5e1"/>
          ..          </View>
          <Text
            style={{ color: '#969696', marginHorizontal: '5%', fontSize: 13 }}>
            Map,allergensand hygiene rating
          </Text>
          <View style={{flexDirection:"row"}}>
           <Image
            style={{ height: '150%', width: '15%' }}
            source={this.props.img}/>
          
          <Text style={{color:"#969696",marginTop:"6%",marginLeft:"2%"}}>Delivery in 20 - 40 min</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Favv;