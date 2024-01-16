import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon, pokemonList}) {
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    hp: "",
  })
  const [newSprites, setNewSprites] = useState({
    front: "",
    back: ""
  })

  function handleChange(e){
    if (e.target.name === "name"){setNewPokemon({...newPokemon, name: e.target.value})}
    else if (e.target.name === "hp"){setNewPokemon({...newPokemon, hp: parseInt(e.target.value)})}
  }

  function handleSprites(e){
    if (e.target.name === "frontUrl"){setNewSprites({...newSprites, front:e.target.value})}
    else if (e.target.name === "backUrl"){setNewSprites({...newSprites, back:e.target.value})}
  }
  
  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({...newPokemon, sprites:newSprites})
    })
    .then(resp => resp.json())
    .then(data => addPokemon([...pokemonList, data]))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleSprites}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleSprites}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
