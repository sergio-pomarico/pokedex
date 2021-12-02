import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokedexScreen from '../screens/Pokedex';

const PokedexStack = createNativeStackNavigator();

const PokedexStackNavigation = () => (
  <PokedexStack.Navigator>
    <PokedexStack.Screen
      name="List"
      component={PokedexScreen}
      options={{
        headerShown: false,
      }}
    />
  </PokedexStack.Navigator>
);

export default PokedexStackNavigation;
