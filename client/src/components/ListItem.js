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
                        <div class="list-item">
                            <li
                                onClick={() => handleClick(pokemon.name)}>{pokemon.name.includes(props.searchTerm) ? pokemon.name : ""}
                            </li>
                            <button className="add-favourite-button" onClick={() => handleFavouriteClick(pokemon)}>Add favourite</button>
                        </div>

                    </>
                )
            })}


        </>
    )

}

export default ListItem