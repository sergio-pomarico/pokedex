import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoritesScreen from '../screens/Favorites';
import AccountScreen from '../screens/Account';
import PokedexStackNavigation from './PokedexNavigation';

const TabNavigation = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <TabNavigation.Navigator>
        <TabNavigation.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({color, size}) => (
              <Icon name="heart" size={size} color={color} />
            ),
            headerTitle: 'Favoritos',
          }}
        />
        <TabNavigation.Screen
          name="Pokedex"
          component={PokedexStackNavigation}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => <Pokebal />,
            headerTitle: 'Pokedex',
          }}
        />
        <TabNavigation.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Cuenta',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" size={size} color={color} />
            ),
            headerTitle: 'Cuenta',
          }}
        />
      </TabNavigation.Navigator>
    </NavigationContainer>
  );
};

const Pokebal: React.FC = () => {
  return (
    <Image source={require('../assets/pokeball.png')} style={style.pokebal} />
  );
};

const style = StyleSheet.create({
  pokebal: {
    width: 75,
    height: 75,
    marginTop: -36,
  },
});
