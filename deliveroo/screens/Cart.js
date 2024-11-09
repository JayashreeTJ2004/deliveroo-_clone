import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import CheckItem from '../src/rbutton';
import SelectItem from '../src/SelectItem';
import { Divider } from 'react-native-paper';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import Counter from "../src/Counter"


const MAX_HEIGHT = 190;
const MIN_HEIGHT = Platform.OS == 'ios' ? 90 : 55;

export default function Cart() {
  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <StatusBar barStyle="light-content" />

      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image
            source={require('../assets/burger.png')}
            style={styles.image}
          />
        )}>
        <ScrollView style={{flex:2}}>
          <TriggeringView style={styles.section}>
            <View style={{ marginHorizontal: '2%' }}>
              <Text style={styles.title}>
                Mighty McMufFIN With Ketchup Meal
              </Text>
              <Text style={{ marginBottom: '5%', marginTop: '5%' }}>
                A pork sausage patty seasoned with herbs, a free-range egg, two
                slices of bacon and a slice of chese served in a toasted English
                muffin with either tomato ketchup or brown sauce. Delicious.Meal
                includes a choice of side and drink {'\n'}643 kcal
              </Text>
            </View>
            <Divider />
            <Text style={{ marginBottom: '5%', marginTop: '5%' }}>
              Questions about allergens, ingredients or cooking methods? Please
              contact the restaurant
            </Text>
            <Divider />
          </TriggeringView>
        <View style={{flex:0.5}}>
          <Text
            style={{
              fontWeight: 'bold',
              marginBottom: '1%',
              marginTop: '1%',
              marginLeft: '5%',
            }}>
            Breakfast side
          </Text>
          <CheckItem
            name1="Hash Brown"
            id1="127 kcal"
            name2="Carrot bag"
            id2="36 kcal"
          />
          <Divider />
          <Text
            style={{
              fontWeight: 'bold',
              marginBottom: '3%',
              marginTop: '9%',
              marginLeft: '5%',
            }}>
            Select Items
          </Text>
          <SelectItem
            name1="Large PG tips tEA"
            id1="12 kcal"
            name2="Large Lattle"
            id2="192 kcal"
            name3="Large Cappuccino"
            id3="127 kcal"
            name4="Flat White"
            id4="86 kcal"
            name5="Large Black Coffee"
            id5="8 kcal"
            name6="Regular Cappuccino"
            id6="94 kcal"
            name7="Pg tips Tea"
            id7="127 kcal"
          />
          </View>
        </ScrollView> 
        
      </ImageHeaderScrollView>
      <View style={{flex:0.2,backgroundColor:"white",borderTopColor:"#e9f0ef",borderTopWidth:1,elevation:16,zIndex:2,shadowColor:"gray",shadowOffset:{width:0,height:0},shadowOpacity:0.16,shadowRadius:16}}>
      <Counter/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: 'white',
    
    padding: '5%',
  },
});
