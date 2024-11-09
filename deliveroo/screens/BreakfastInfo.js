import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Breakfast from '../components/InfoScreen/Breakfast';
import Fav from '../components/InfoScreen/Fav';
export default function BreakfastInfo({ navigation }) {
  return (
  
      <View style={{ flex: 1, backgroundColor: 'white',marginTop:"3%" }}>
        <View
          style={{
            flex: 2,
            backgroundColor: 'white',
            shadowOpacity: 0.16,
            borderBottomColor: '#e6e6e6',
            shadowOffset: { width: 0, height: 8 },
            shadowRadius: 16,
            borderBottomWidth: 2,
           
          }}>
          <View style={{ flexDirection: 'row',marginTop:"10%",marginHorizontal:"3%"}}>
            <Icons
              onPress={() => navigation.navigate('Info Display')}
              name="arrow-left"
              size={15}
              color="#49f5e1"
            />
            <Text style={{ marginLeft: "2%", fontWeight: 'bold' }}>Search </Text>
          </View>
          
            <TouchableOpacity
              style={{
                marginStart: 14,
                marginTop: 14,
                height: 35,
                marginEnd: 120,
                backgroundColor: '#ebeced',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                paddingStart: 10,
              }}>
              <Icons name="search" color="#c9c9c9" />
              <Text style={{ marginStart: 10, color: '#c9c9c9', fontSize: 16 }}>
               Search 'Crumpet'
              </Text>
            </TouchableOpacity>
          
           <View style={{ flex: 2, marginTop: "3%" }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
             
              <Breakfast name="Sort" />
              <Breakfast name="Hygiene rating" />
              <Breakfast name="Offers" />
              <Breakfast name="Dietary" />
              <Breakfast name="Acai" />
              <Breakfast name="Bakery" />
              <Breakfast name="Cafe" />
              
            </ScrollView>
          </View>
        </View>
        <View style={{ flex: 7, backgroundColor: 'white',alignItems:"center"}}>
          <View style={{ height:"100%", marginTop: 20 }}>
            <Text style={{ marginStart: 3, fontSize: 18, fontWeight: 700 }}>
              Breakfast{' '}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginStart: 3, marginBottom: 10 }}>
                Added to your healthy diet
              </Text>
              <Icons name={'heart'} size={18} color="#e00460" />
            </View>

            <ScrollView style={{alignItems:"center"}}
              horizontal={false}
              showsHorizontalScrollIndicator={false}>
              <Fav
                image={require('../assets/Pictures/farmer.png')}
                text="Farmer TJ"
                review="4.8 Excellent "
                val="(500+)"
                milprice="1 mile away . £2.99 delivery"
              />
              <Fav
                image={require('../assets/Pictures/papa.png')}
                text="Papa Nadox Kitchen (Seafood and Soul food)"
                review="3.8 Good "
                val="(500+)"
                milprice="2.3 miles away . £9.99 delivery"
              />
              <Fav
                image={require('../assets/Pictures/unme.png')}
                text="You & Me Food Store"
                review="4.7 Excellent"
                val="(500+)"
                milprice="2.7 miles away . £4.49 delivery "
              />
            </ScrollView>
          </View>
        </View>
      </View>
    
  );
}
