import React, { useState } from "react";
import PokémonList from "./PokémonList";
import axios from 'axios';

const FetchComponent = () => {
    const [allPokémon, setallPokémon] = useState([]);
    
    const FetchPokémon = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1008')
            .then(response => { addPokémon(response.data.results);
                // we now run another promise to parse the HTTP response into usable JSON
            }).catch(err => {
                console.log(err);
            });
    } 

    const addPokémon = pokémonList => {
        const list = [];
        for(let i = 0; i < pokémonList.length; i++){
            //const name = pokémonList[i].name.charAt(0).toUpperCase()+pokémonList[i].name.slice(1);
            list.push(pokémonList[i].name.charAt(0).toUpperCase()+pokémonList[i].name.slice(1));
        }
        setallPokémon([...list]);
    }

    return (
        <div className="container d-flex">
            <ol className="list mx-auto justify-content-center mt-5">
                <button className="btn btn-primary mb-2" onClick={FetchPokémon}>
                    Fetch Pokémon
                </button>
                <PokémonList allPokémon={allPokémon}/>
            </ol>
        </div>
    );
};

export default FetchComponent;
