import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { RadioButton, Divider } from 'react-native-paper';

const SelectItem = (item) => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '5%',
        }}>
        <View style={{flexDirection:"column"}}>
    <Text>{item.name1}</Text>
    <Text>{item.id1}</Text>
    </View>
        <RadioButton
          color="#49f5e1"
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
      </View>
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '5%',
        }}>
        <View style={{flexDirection:"column"}}>
    <Text>{item.name2}</Text>
    <Text>{item.id2}</Text>
    </View>
        <RadioButton
          color="#49f5e1"
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
      </View>
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '5%',
        }}>
        <View style={{flexDirection:"column"}}>
    <Text>{item.name3}</Text>
    <Text>{item.id3}</Text>
    </View>
        <RadioButton
          color="#49f5e1"
          value="third"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('third')}
        />
      </View>
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '5%',
        }}>
        <View style={{flexDirection:"column"}}>
    <Text>{item.name4}</Text>
    <Text>{item.id4}</Text>
    </View>
        <RadioButton
          color="#49f5e1"
          value="fourth"
          status={checked === 'fourth' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('fourth')}
        />
      </View>
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '5%',
        }}>
        <View style={{flexDirection:"column"}}>
    <Text>{item.name5}</Text>
    <Text>{item.id5}</Text>
    </View>
        <RadioButton
          color="#49f5e1"
          value="fifth"
          status={checked === 'fifth' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('fifth')}
        />
      </View>
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '5%',
        }}>
        <View style={{flexDirection:"column"}}>
    <Text>{item.name6}</Text>
    <Text>{item.id6}</Text>
    </View>
        <RadioButton
          color="#49f5e1"
          value="sixth"
          status={checked === 'sixth' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('sixth')}
        />
      </View>
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '5%',
        }}>
        <View style={{flexDirection:"column"}}>
    <Text>{item.name7}</Text>
    <Text>{item.id7}</Text>
    </View>
        <RadioButton
          color="#49f5e1"
          value="seventh"
          status={checked === 'seventh' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('seventh')}
        />
      </View>
      <Divider />
    </View>
  );
};
export default SelectItem;