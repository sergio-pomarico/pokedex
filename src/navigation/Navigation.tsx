import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../screens/Settings';
import PokedexScreen from '../screens/Pokedex';
import AccountScreen from '../screens/Account';

const TabNavigation = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <TabNavigation.Navigator>
        <TabNavigation.Screen name="Settings" component={SettingsScreen} />
        <TabNavigation.Screen name="Pokedex" component={PokedexScreen} />
        <TabNavigation.Screen name="Account" component={AccountScreen} />
      </TabNavigation.Navigator>
    </NavigationContainer>
  );
};
