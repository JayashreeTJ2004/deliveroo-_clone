import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Pop from "../Pop"; 
import Fav from '../components/InfoScreen/Fav';
export default function App({navigation}) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
      <View style={{ flex: 1,backgroundColor:"white",borderBottomWidth: 0.5,
          borderBottomColor: '#c9c9c9',
          elevation: 5,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.16,
          shadowRadius: 16,
           }}>
      <View style={{flex:3.5}}>
        <View style={{ flexDirection: 'row'}}>
          <Icons onPress={()=>navigation.navigate("Info Display")}
            style={{
              color: '#49f5e1',
              marginHorizontal: '1.5%',
              marginEnd: '1.5%',
            }}
            name="arrow-left"
            size={15}
          />
          <Text>Grocery</Text>
        </View>
        
        <Pop/>
        </View>
        <View style={{flex:10}}>
        <ScrollView 
        scrollEventThrottle={16}>
        <Fav
                  image={require('../assets/Pictures/co-op.png')}
                  text="Co-op"
                  review="4.7 Excellent "
                  val="(500+)"
                  milprice="0.6 mile away . Free delivery"
                />
                <Fav
                  image={require('../assets/Pictures/fine.png')}
                  text="Bridges Fine Newsagents"
                  review="4.9 Excellent(23) "
                  val="(500+)"
                  milprice="1.5 miles away . £3.99 delivery"
                />
                <Fav
                  image={require('../assets/Pictures/Partridges.png')}
                  text="Partridges of Sloane Square"
                  review="4.8 Excellent"
                  val="(500+)"
                  milprice="1.8 miles away . £3.99 delivery "
                />
                <Fav
                  image={require('../assets/Pictures/morri.png')}
                  text="Deliveroo Hop with Morrisons"
                  review="4.9 Excellent"
                  val="(500+)"
                  milprice="0.8 miles away . Free delivery "
                />
                <Fav
                  image={require('../assets/Pictures/sain.png')}
                  text="Sainbury's"
                  review="4.7 Excellent"
                  val="(500+)"
                  milprice="0.7 miles away . Free delivery "
                />
        </ScrollView>

        </View>
      </View>
    </SafeAreaView>
  );
}