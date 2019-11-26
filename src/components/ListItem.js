import React from 'react'
import './PokemonList.css'

const ListItem = (props) => {

    function handleClick(event) {
        props.handlePokemonClick(event)
    }  

    return (
        <>
            {props.allPokemon.map((pokemon) => {
                return <li onClick={handleClick}>{pokemon.name}</li>
            })}
        </>
    )

}

export default ListItem