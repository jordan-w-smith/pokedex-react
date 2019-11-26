import React from 'react'
import PokemonList from '../components/PokemonList'
import PokemonDetail from '../components/PokemonDetail'
import './PokedexContainer.css'

class PokedexContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            allPokemon: [],
            selectedPokemon: [],
            pokemon: [],
        }
        this.handlePokemonClick = this.handlePokemonClick.bind(this)
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
        console.log(event.target.innerHTML)
        this.setState ({
            selectedPokemon: event.target.innerHTML
        })

        fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.selectedPokemon)
            .then(res => res.json())
            .then(pokemon => this.setState({
                pokemon: pokemon
            }))
    }

    render() {
        return(
            <>
                <h1>Pokedex container</h1>
                <PokemonDetail pokemon={this.state.pokemon}></PokemonDetail>
                <PokemonList selectedPokemon={this.selectedPokemon} handlePokemonClick={this.handlePokemonClick} allPokemon={this.state.allPokemon}/>
            </>
        )
    }

}

export default PokedexContainer;