import {pokemon} from '../types/pokemon';
import Http from './axios';
import {buidConfig} from './config';

const config = buidConfig('https://pokeapi.co/api/v2/');
export const http = new Http(config);

export const loadPokemons = async () => {
  try {
    const pokemonList: pokemon[] = [];
    const pokemons = await http.get('pokemon?limit=20&offset=0');
    const {results} = pokemons.data;
    for await (const item of results) {
      const {data: pokemonInfo} = await http.get(item.url);
      pokemonList.push({
        id: pokemonInfo.id,
        name: pokemonInfo.name,
        type: pokemonInfo.types[0].type.name,
        order: pokemonInfo.order,
        image: pokemonInfo.sprites.other['official-artwork'].front_default,
      });
    }
    return pokemonList;
  } catch (error) {
    console.error(error);
  }
};
