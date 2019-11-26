import React from 'react'
import ListItem from './ListItem'

const PokemonList = (props) => {
        return(
            <ul>
                <ListItem selectedPokemon={props.selectedPokemon} handlePokemonClick={props.handlePokemonClick} allPokemon={props.allPokemon}></ListItem>
            </ul>
        )
}

export default PokemonList;