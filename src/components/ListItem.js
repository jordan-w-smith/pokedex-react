import React from 'react'

const ListItem = (props) => {
    const singlePokemon = props.allPokemon.map((pokemon) => {
        return pokemon
    });

    return (
        <>
            {props.allPokemon.map((pokemon) => {
                return <li>{pokemon.name}</li>
            })}
        </>
    )
}

export default ListItem