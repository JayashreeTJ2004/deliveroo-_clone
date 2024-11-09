import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
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
import Ionicons from '@expo/vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Variety from '../components/InfoScreen/Variety';
import Ads from '../components/InfoScreen/Ads';
import Toppick from '../components/InfoScreen/Toppick';
import Brands from '../components/InfoScreen/Brands';
import Fav from '../components/InfoScreen/Fav';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InfoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flex: 3.5,
          borderBottomWidth: 0.5,
          borderBottomColor: '#d3e0df',
          elevation: 5,
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.16,
          shadowRadius: 16,
          height: '100%',
          width: '100%',
        }}>
        <View style={styles.bicyalign}>
          <View style={{ flex: 0.7, justifyContent: 'center' }}>
            <Image
              style={{ width: '70%', height: '130%', resizeMode: 'stretch' }}
              source={require('../assets/bicy.png')}
            />
          </View>
          <View style={{ flex: 4, justifyContent: 'center' }}>
            <Text style={styles.delitext}>Delivery . Now</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', flex: 2 }}>
          <Text style={styles.loctext}> Selected location </Text>
          <Pressable onPress={() => navigation.navigate('Select Location')}>
            <Text
              style={{
                color: '#38e8dc',
                fontSize: '12',
                fontWeight: 'bold',
                shadowColor: 'black',
              }}>
              V
            </Text>
          </Pressable>
        </View>
        <View style={{ flex: 3, padding: '2%' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Info Show')}
            style={styles.appContainer}>
            <Ionicons name="search-outline" color="#c0c4c4" size={15} />
            <Text style={styles.appButtonText}>
              {' '}
              Restaurant ,groceries ,dishes{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 10 }}>
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 2 }}>
            <View style={{ height: '3%', marginTop: '2%' }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Pressable onPress={() => navigation.navigate('Breakfast')}>
                  <Variety
                    imageu={require('../assets/breakfast.png')}
                    dish="Breakfast"
                  />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Grocery')}>
                  <Variety
                    imageu={require('../assets/Pictures/grocery.png')}
                    dish="Grocery"
                  />
                </Pressable>
                <Variety
                  imageu={require('../assets/dessert.png')}
                  dish="Dessert"
                />
                <Variety
                  imageu={require('../assets/indian.png')}
                  dish="Indian"
                />
                <Variety
                  imageu={require('../assets/healthy.png')}
                  dish="Healthy"
                />
                <Variety
                  imageu={require('../assets/italian.png')}
                  dish="Italian"
                />
                <Variety imageu={require('../assets/vegan.png')} dish="Vegan" />
                <Variety imageu={require('../assets/offer.png')} dish="Offer" />
              </ScrollView>
            </View>
            <View style={{ height: '8%', marginTop: '2%' }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Pressable onPress={() => navigation.navigate('Item Info')}>
                  <Ads ads={require('../assets/ad1.png')} />
                </Pressable>
                <Ads ads={require('../assets/ad2.png')} />
                <Ads ads={require('../assets/ad3.png')} />
              </ScrollView>
            </View>
            <View style={{ height: 250, marginTop: 20 }}>
              <Text style={{ marginStart: 3, fontSize: 18, fontWeight: 700 }}>
                Top picks in your neighbourhood
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Toppick
                  image={require('../assets/kfc.png')}
                  text="KFC"
                  review="4.4 Very Good "
                  val="(500+)"
                  milprice="1.1 miles away . £2.99 delivery"
                />
                <Toppick
                  image={require('../assets/burger.png')}
                  text="McDonald's"
                  review="4.4 Very Good "
                  val="(500+)"
                  milprice="0.8 miles away . £3.49 delivery"
                />
                <Toppick
                  image={require('../assets/gyoza.png')}
                  text="Gyoza & Cakes"
                  review="New on Deliveroo"
                  val="(500+)"
                  milprice="2.7 miles away . £4.49 delivery "
                />
              </ScrollView>
            </View>
            <View style={{ height: 250, marginTop: 20 }}>
              <Text style={{ marginStart: 3, fontSize: 18, fontWeight: 700 }}>
                Popular brands
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <ScrollView
                  vertical={true}
                  showsVerticalScrollIndicator={false}>
                  <Brands
                    image={require('../assets/acaigirls.png')}
                    brand="Acai Girls"
                    review="4.8  "
                    val="25-40 min"
                    milprice="£3.49 delivery"
                  />
                  <Brands
                    image={require('../assets/nandos.png')}
                    brand="Nando's"
                    review="4.6  "
                    val="25-40 min"
                    milprice="£3.49 delivery"
                  />
                  <Brands
                    image={require('../assets/wagamama.png')}
                    brand="Wagamama"
                    review="4.6  "
                    val="25-45 min"
                    milprice="£3.99 delivery"
                  />
                </ScrollView>
                <ScrollView
                  vertical={true}
                  showsVerticalScrollIndicator={false}>
                  <Brands
                    image={require('../assets/popeyes.png')}
                    brand="Popeyes Louisia..."
                    review="4.4  "
                    val="20-35 min"
                    milprice="£3.49 delivery"
                  />
                  <Brands
                    image={require('../assets/shake.png')}
                    brand="Shake Shack - B..."
                    review="4.4  "
                    val="25-45 min"
                    milprice="£2.99 delivery"
                  />
                  <Brands
                    image={require('../assets/bonedaddies.png')}
                    brand="Bone Daddies R..."
                    review="4.7  "
                    val="20-35 min"
                    milprice="£2.99 delivery"
                  />
                </ScrollView>
                <ScrollView
                  vertical={true}
                  showsVerticalScrollIndicator={false}>
                  <Brands
                    image={require('../assets/letocaffe.png')}
                    brand="L'ETO Caffe - Bel..."
                    review="4.8  "
                    val="20-40 min"
                    milprice="£3.49 delivery"
                  />
                  <Brands
                    image={require('../assets/waitrose.png')}
                    brand="Waitrose & Part..."
                    review="4.8  "
                    val="20-35 min"
                    milprice="Free delivery"
                  />
                  <Brands
                    image={require('../assets/bleecker.png')}
                    brand="Bleecher Burger"
                    review="4.8  "
                    val="25-40 min"
                    milprice="£2.99 delivery"
                  />
                </ScrollView>
              </ScrollView>
            </View>
            <View style={{ height: 350, marginTop: 20 }}>
              <Text style={{ marginStart: 3, fontSize: 18, fontWeight: 700 }}>
                Most favourited places{' '}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginStart: 3, marginBottom: 10 }}>
                  Added by others to their favourites
                </Text>
                <Icons name={'heart'} size={18} color="#e00460" />
              </View>
              <ScrollView
                horizontal={true}
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

            <View style={{ height: 350, marginTop: 20 }}>
              <Text style={{ marginStart: 3, fontSize: 18, fontWeight: 700 }}>
                Offers near you{' '}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ marginStart: 3, marginBottom: 10 }}>
                  Added by others to their favourites{' '}
                </Text>
                <Icons name={'tags'} size={18} color="#e00460" />
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Fav
                  image={require('../assets/Pictures/sushi.png')}
                  text="Sushi"
                  review="4.8 Excellent "
                  val="(500+)"
                  milprice="1 mile away . £2.99 delivery"
                />
                <Fav
                  image={require('../assets/Pictures/pokezone.png')}
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
            <ScrollView
              horizontal={false}
              showsHorizontalScrollIndicator={false}>
              <Fav
                image={require('../assets/Pictures/gyros.png')}
                text="Deli Daily"
                review="4.8 Excellent "
                val="(500+)"
                milprice="1 mile away . £2.99 delivery"
              />
              <Fav
                image={require('../assets/Pictures/shakes.png')}
                text="Papa Nadox Kitchen (Seafood and Soul food)"
                review="3.8 Good "
                val="(500+)"
                milprice="2.3 miles away . £9.99 delivery"
              />
              <Fav
                image={require('../assets/Pictures/hop.png')}
                text="You & Me Food Store"
                review="4.7 Excellent"
                val="(500+)"
                milprice="2.7 miles away . £4.49 delivery "
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#f1f2f0',

    flex: 1,

    alignItems: 'center',

    justifyContent: 'flex-start',
    width: '78%',
    flexDirection: 'row',
  },
  appButtonText: {
    fontSize: 15,
    color: '#c0c4c4',
    marginStart: '2%',
  },
  delitext: {
    textAlign: 'flex-start',
    color: '#b9bdbd',
    marginStart: '1%',
    fontSize: 14,
  },
  loctext: {
    fontSize: 15,
    marginStart: '20%',
    fontWeight: 'bold',
  },
  bicyalign: {
    marginTop: '3%',
    flexDirection: 'row',
    flex: 4,
  },
});
