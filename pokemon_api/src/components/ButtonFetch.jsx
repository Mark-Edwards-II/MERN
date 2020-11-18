import React, { useState, useEffect } from 'react';


const ButtonFetch = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, []);

    return(
        <div className="mx-auto overflow-hidden">
            <div className="mx-auto">
                {pokemon.length > 0 && pokemon.map((poke, index)=>{
                    return (<div key={index}>{poke.name}</div>)
                })}
            </div>
        </div>
    );
};
export default ButtonFetch;