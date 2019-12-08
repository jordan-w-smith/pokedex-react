import React from 'react'
import ListItem from './ListItem'

const PokemonList = (props) => {
        return(
            <ul>
                <ListItem 
                searchTerm={props.searchTerm} 
                handlePokemonClick={props.handlePokemonClick} 
                allPokemon={props.allPokemon}
                addFavourite={props.addFavourite}
                ></ListItem>
            </ul>
        )
}

export default PokemonList;