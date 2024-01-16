import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(resp => resp.json())
      .then(data => setPokemonList(data.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery))))
  }, [searchQuery])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={setPokemonList} pokemonList={pokemonList}/>
      <br />
      <Search onSearch={setSearchQuery}/>
      <br />
      <PokemonCollection pokemonList={pokemonList}/>
    </Container>
  );
}

export default PokemonPage;
