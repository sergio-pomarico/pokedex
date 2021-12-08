import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {loadPokemons} from '../api/api';
import {pokemon} from '../types/pokemon';

const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState<pokemon[]>([]);
  useEffect(() => {
    (async () => {
      const pokemonsArray = await loadPokemons();
      setPokemons([...pokemons, ...pokemonsArray!]);
    })();
  }, [pokemons]);

  return (
    <View style={styles.container}>
      <Text>Pokedex</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default PokedexScreen;
