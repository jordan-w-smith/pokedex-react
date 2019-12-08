import React from 'react'
import './MyPokemon.css'

const MyPokemon = (props) => {
    return (
        <div className="my-pokemon-container">
            <h2>My Pokemon</h2>
            {props.favouritePokemon && props.favouritePokemon.map(pokemon => {
                return (
                    <>
                    
                        <div className="list-item">
                            <li onClick={() =>
                                props.handlePokemonClick(pokemon.name)}>{pokemon.name}
                            </li>
                            <img className="pokeball-image" alt="pokeball" src={require("../assets/pokeball.png")}></img>
                            <button className="delete-button" onClick={() => props.deleteFavourite(pokemon._id)}>Delete</button>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default MyPokemon