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
import {Divider} from "react-native-paper";
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import Favv from '../components/InfoScreen/Favv';
import ItemInfo from '../components/InfoScreen/ItemInfo'; 
import Cart from "../screens/Itdisplay"
const MAX_HEIGHT = 150;
const MIN_HEIGHT = Platform.OS == 'ios' ? 90 : 55;

export default function Itdisplay({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: 'grey' }}>
      <StatusBar barStyle="light-content" />
       
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={require('../assets/burger.png')} style={styles.image} />
        )}>
        <ScrollView >
        <TriggeringView style={styles.section}>
          <View style={{ marginHorizontal: '2%' }}>
            <Text style={styles.title}>Farmer J - Regent Street</Text>
          </View> 
          
         
          <Favv 
            img={require("../assets/bicy.png")} 
            time="20 - 40 min . chicken . Mediterranean .  British"
            rate="  4.9 Excellent  "
            info="(500+) . 1.00 mile away . Closes at 21.00 . £2.99 delivery . £7.00 minimum"
          />
        </TriggeringView>  
        
       
        <View style={{height: '30%',backgroundColor:"#f0f5f2",borderBottomColor:"#e1edec",borderBottomWidth:2}}>
        
          <View
            style={{
              height: '30%',
              width: '90%',
              borderWidth: 0.1,
              shadowColor: '#969696',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.2,
              shadowRadius: 42,
              marginVertical: '10%',
              marginHorizontal: '5%',
              backgroundColor: 'white',
              borderColor: '#e6e8e6',
            }}>
            <Text style={{ padding: '5%', color: '#969696' }}>
              The safety of our riders is our priority so,during today's bad
              weather, you'll see fewer restaurants and your order may take
              longer to arrive
            </Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ color: '#969696', padding: '2%' }}>
              For nutrition and allergen information visit:
            </Text>
            <Text style={{ color: '#969696', padding: '2%' }}>
              https://www.mcdonalds.co.uk/nutrition
            </Text>

            <Text style={{ color: '#969696', padding: '2%' }}>
              Adults need around 2000 kcal a day
            </Text>
          </View>
           <View style={{marginVertical:"13%",marginBottom:"2%"}}>
          <Text style={{fontWeight:"bold",fontSize:18,marginHorizontal:"3%",}}>Featured</Text>
          </View>
         
        </View>
       
         <Pressable onPress={()=>navigation.navigate("Add to cart")} >
        <ItemInfo
          item="Mighty McMufFIN With Ketchup Meal"
          infoo="A 100% beef patty, bacon,cheese made with emmental,onions,juice.."
          fat="845 kcal " 
          price="£6.69"
          img={require('../assets/burger.png')}
        />
        </Pressable>
        
        <Divider style={{marginHorizontal:"2%",marginVertical:"2%"}}/>
        <ItemInfo
          item="Cheese Melt Dippers Sharebox®"
          infoo="Twelve breaded cheese dippers m.."
          fat="729 kcal"
          price="£6.39.Popular"
          img={require('../assets/burger.png')}
        />
        <Divider style={{marginHorizontal:"2%",marginVertical:"2%"}}/>
        <ItemInfo
          item="McCrispy®"
          infoo="100% chicken breast fillet in a crispy,crunchy coating.Served wit..."
          fat="484 kcal" 
          price="£5.49.Popular"
          img={require('../assets/burger.png')}
        />
         <Divider style={{marginHorizontal:"2%",marginVertical:"2%"}}/>
        <ItemInfo
          item="20 Chicken McNuggets® Sharebox"
          infoo="100% chicken breast meant in a del..."
          fat="869 kcal" 
          price="£5.99.Popular"
          img={require('../assets/burger.png')}
        />
      
     </ScrollView>
      </ImageHeaderScrollView>
      
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
    fontSize: 25,
    fontWeight: 'bold',
  },
 
  section: {
    height: '21%',
    borderBottomWidth: 2,
    borderBottomColor: '#e1edec',
    backgroundColor: 'white',
    elevation: 2,
    zIndex: 2,
  },
  
});