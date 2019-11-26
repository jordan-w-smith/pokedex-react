import React from 'react'
import PokemonList from '../components/PokemonList'

class PokedexContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            allPokemon: [],
            selectedPokemon: []
        }
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(pokemons => this.setState({
            allPokemon: pokemons.results
        }))
        .catch(err => console.error)
    }

    handlePokemonClick(event) {
        this.setState({
            selectedPokemon: event.target.value
        })
    }

    render() {
        return(
            <>
                <h1>Pokedex container</h1>
                <PokemonList handlePokemonClick={this.handlePokemonClick} allPokemon={this.state.allPokemon}/>
            </>
        )
    }

}

export default PokedexContainer;