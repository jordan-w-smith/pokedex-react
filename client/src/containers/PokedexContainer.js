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
            favouritePokemon: [],
            pokemon: "",
            searchTerm: "",
        }
        this.handlePokemonClick = this.handlePokemonClick.bind(this)
        this.handleSearchInput = this.handleSearchInput.bind(this)
        this.addFavourite = this.addFavourite.bind(this)
        this.deleteFavourite = this.deleteFavourite.bind(this)
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(pokemons => this.setState({
                allPokemon: pokemons.results
            }))
            .catch(err => console.error);

        fetch('http://localhost:8080/pokemon')

            .then(res => res.json())
            .then(favourites => this.setState({
                favouritePokemon: favourites
            }))
            .catch(err => console.error);
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

    addFavourite(pokemon) {
        console.log(pokemon)
        fetch('http://localhost:8080/pokemon', {
            method: "POST",
            body: JSON.stringify(pokemon),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())

        .then( () => {
            fetch('http://localhost:8080/pokemon')
            .then(res => res.json())
            .then(favourites => this.setState({
                favouritePokemon: favourites
            }))
            .catch(err => console.error);
                }
            )
    }

    deleteFavourite(pokemonId) {
        console.log(pokemonId)
        fetch('http://localhost:8080/pokemon/' + pokemonId, {
            method: "DELETE"
        })
        .then(() => {

            fetch('http://localhost:8080/pokemon')
            .then(res => res.json())
            .then(favourites => this.setState({
                favouritePokemon: favourites
            }))
            .catch(err => console.error);
            }
            )
    }

    render() {
        return (
            <>
                <h1>Pokedex</h1>
                {this.state.pokemon === "" ? "" : <PokemonDetail pokemon={this.state.pokemon}></PokemonDetail>}
                {this.state.favouritePokemon.length === 0 ? "" : 
                    <MyPokemon 
                    favouritePokemon={this.state.favouritePokemon} 
                    deleteFavourite={this.deleteFavourite} 
                    handlePokemonClick={this.handlePokemonClick} ></MyPokemon>
                }

                <PokemonSearch searchTerm={this.state.searchTerm} handleSearchInput={this.handleSearchInput}></PokemonSearch>
                <PokemonList 
                searchTerm={this.state.searchTerm} 
                handlePokemonClick={this.handlePokemonClick} 
                allPokemon={this.state.allPokemon}
                addFavourite={this.addFavourite}
                
                />
            </>
        )
    }

}

export default PokedexContainer;