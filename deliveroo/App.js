import HomeScreen from './screens/HomeScreen';  
import SecondScreen from './screens/SecondScreen';
import { NavigationContainer } from '@react-navigation/native';  
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import InfoScreen from './screens/InfoScreen';
import InfoShow from './screens/InfoShow'; 
import BreakfastInfo from './screens/BreakfastInfo'
import Itdisplay from './screens/Itdisplay';
import Grocery from './screens/Grocery'; 
import Cart from "./screens/Cart"
const Stack = createNativeStackNavigator();
export default function App() {
  return (
         <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen 
            name="Home"
            component={HomeScreen} 
            options={{headerShown:false}}
            />
            <Stack.Screen 
            name='Select Location' 
            component={SecondScreen}
            />
            <Stack.Screen
            name='Info Display'
            component={InfoScreen} 
            options={{headerShown:false}}
            /> 
            <Stack.Screen 
            name="Info Show"
            component={InfoShow} 
            options={{headerShown:false}}
            />
            <Stack.Screen
                name="Breakfast" 
                component={BreakfastInfo} 
                 options={{headerShown:false}}
                
                />
                <Stack.Screen
                name="Grocery"
                component={Grocery}
                options={{headerShown:false}}
                />
            <Stack.Screen 
                 name="Item Info" 
                 component={Itdisplay} 
                 />
            <Stack.Screen
                name="Add to cart"
                component={Cart} 
                />
          </Stack.Navigator>
         </NavigationContainer>

  );
}

