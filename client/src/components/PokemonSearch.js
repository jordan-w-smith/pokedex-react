import React from 'react'
import './PokemonSearch.css'

const PokemonSearch = (props) => {

    const handleChange = (event) => {
        props.handleSearchInput(event.target.value)
    }

    return (
    <div class="search-container">
        <label>Pokemon Search</label> <input type="text" onChange={handleChange}></input>
    </div>
    )
}

export default PokemonSearch