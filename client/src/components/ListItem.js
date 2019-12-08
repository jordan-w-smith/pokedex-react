import React from 'react'
import './PokemonList.css'

const ListItem = (props) => {

    function handleClick(pokemonName) {
        props.handlePokemonClick(pokemonName)
    }

    function handleFavouriteClick(favourite) {
        props.addFavourite(favourite)
    }

    return (
        <>
            {props.allPokemon.map((pokemon) => {
                return (
                    <>
                        {pokemon.name.includes(props.searchTerm) ?
                            <div className="list-item">
                                <li
                                    onClick={() => handleClick(pokemon.name)}>{pokemon.name}
                                </li>
                                <button className="add-favourite-button" onClick={() => handleFavouriteClick(pokemon)}>Add favourite</button>
                            </div>
                            : ""}
                    </>
                )
            })}


        </>
    )

}

export default ListItem