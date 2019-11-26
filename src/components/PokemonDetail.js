import React from 'react'
import './PokemonDetail.css'

const PokemonDetails = ({pokemon}) => {
    return (
        <div className="pokemon-details-container">
            <p>Name: {pokemon.name}</p>
            <p>id # {pokemon.id}</p>
            <p>Height: {pokemon.height}</p>
            <img src={console.log(pokemon.sprites)} />
            <p>{console.log(pokemon.types)}</p>
            {/* <p>{props.pokemon.types}</p> */}
        </div>
    )

}

export default PokemonDetails