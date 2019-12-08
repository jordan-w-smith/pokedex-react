import React from 'react'
import './PokemonDetail.css'

// let i = 0

const PokemonDetails = ({ pokemon }) => {
    return (
        <div className="pokemon-details-container">
            <div className="details">
                <p className="name">Name: {pokemon.name}</p>
                <p>id # {pokemon.id}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p className="type">Type:
                {/* {pokemon.types && pokemon.types.map(pokemonType => {
                i ++
                return pokemonType.type.name + (i <= 1 ? ", " : "")
                })} */}
                    {" "}
                    {pokemon.types && pokemon.types.map(pokemonType => {
                        return pokemonType.type.name + ", "
                    })}
                </p>
            </div>
            <div className="image-container">
                <img src={pokemon.sprites && pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>

            {/* <p>{props.pokemon.types}</p> */}
        </div>
    )

}

export default PokemonDetails