import React from 'react'
import PokemonList from '../components/PokemonList'
import PokemonDetail from '../components/PokemonDetail'
import MyPokemon from '../components/MyPokemon'
import PokemonSearch from '../components/PokemonSearch'
import './PokedexContainer.css'

class PokedexContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            allPokemon: [],
            pokemon: "",
            searchTerm: ""
        }
        this.handlePokemonClick = this.handlePokemonClick.bind(this)
        this.handleSearchInput = this.handleSearchInput.bind(this)
    }





    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(pokemons => this.setState({
                allPokemon: pokemons.results
            }))
            .catch(err => console.error)
    }

    handlePokemonClick(selectedPokemonName) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + selectedPokemonName)
            .then(res => res.json())
            .then(pokemon => this.setState({
                pokemon: pokemon
            }))
    }


    handleSearchInput(event) {
        this.setState({
            searchTerm: event
        })
    }

    render() {
        return (
            <>
                <h1>Pokedex container</h1>
                {this.state.pokemon === "" ? "" :<PokemonDetail pokemon={this.state.pokemon}></PokemonDetail>}
                <MyPokemon></MyPokemon>
                <PokemonSearch searchTerm={this.state.searchTerm} handleSearchInput={this.handleSearchInput}></PokemonSearch>
                <PokemonList searchTerm={this.state.searchTerm} handlePokemonClick={this.handlePokemonClick} allPokemon={this.state.allPokemon} />
            </>
        )
    }

}

export default PokedexContainer;