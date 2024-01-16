import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [toggleImage, setToggleImage] = useState(false)

  function handleToggle(){
    setToggleImage(!toggleImage)
  }

  return (
    <Card>
      <div onClick={handleToggle}>
        <div className="image">
          {toggleImage ?
          <img src={pokemon.sprites.back} alt={`${pokemon.name}-back`} /> :
          <img src={pokemon.sprites.front} alt={`${pokemon.name}-front`} />}
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {`${pokemon.hp} hp`}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
