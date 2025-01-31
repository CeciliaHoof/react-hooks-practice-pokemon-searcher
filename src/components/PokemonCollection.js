import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonList}) {
  const pokemonCollection = pokemonList.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCollection}
    </Card.Group>
  );
}

export default PokemonCollection;
