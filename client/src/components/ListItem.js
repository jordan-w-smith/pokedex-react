import React from 'react'
import './PokemonList.css'

const ListItem = (props) => {

    function handleClick(pokemonName) {
        props.handlePokemonClick(pokemonName)
    }  

    return (
        <>
            {props.allPokemon.map((pokemon) => {
                return <a href="#"><li onClick={() => handleClick(pokemon.name)}>{pokemon.name.includes(props.searchTerm) ? pokemon.name : ""}</li></a>
            })}
        </>
    )

}

export default ListItem