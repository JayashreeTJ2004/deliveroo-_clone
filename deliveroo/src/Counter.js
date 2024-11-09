import React, { useState } from 'react';
import { View, Text, Pressable,TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
const Counter = () => {
  const [count, setCount] = useState(6.33);
  return (
    <View >
      <TouchableOpacity
        style={{
          backgroundColor: '#20b3e8',
          height: 75,
          width: "100%",
          position: 'absolute',
          padding: '4%', 
          flexDirection:"column",
          
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: '8%',
          }}>
          <Pressable onPress={() => {
              setCount(count + 6.33);}}>
          <Icons
            
            
            name="plus"
            color="white"
            size={15}
          />
          </Pressable>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
            Add to cart {'\n'}
          </Text>
          <Pressable onPress={() => {
             count<=6.33?setCount(0):setCount(count - 6.33);
            }} >
          <Icons
            
            
            name="minus"
            color="white"
            size={15}
          />
          </Pressable>
        </View>
        <Text style={{paddingHorizontal:"42%",color:"white"}}>£{count}</Text>
      </TouchableOpacity>
      
    </View>
  );
};
export default Counter;