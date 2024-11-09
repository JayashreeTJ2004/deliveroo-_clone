import * as React  from 'react';
import { View ,Text,Image} from 'react-native';
import { RadioButton,Divider } from 'react-native-paper'; 


const CheckItem= (item) =>{

   const [checked, setChecked] = React.useState('first');

  return (
    <View style={{flex:1,backgroundColor:"white"}}> 
    <View style={{flexDirection:"row",justifyContent:"space-between",padding:"5%"}}>
    <View style={{flexDirection:"column"}}>
    <Text>{item.name1}</Text>
    <Text>{item.id1}</Text>
    </View>
      <RadioButton color="#49f5e1"
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
      </View>
      <Divider/>
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:"5%"}}>
      <View style={{flexDirection:"column"}}>
    <Text>{item.name2}</Text>
    <Text>{item.id2}</Text>
    </View>
      <RadioButton
      color="#49f5e1"
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
      </View>
    </View>
  );

};
export default CheckItem;