import React from 'react'

function PokémonList({allPokémon}) {
    return (
        allPokémon ? allPokémon.map((onePokémon,index) => <li className="list-item mt-2" key={index+1}>{onePokémon}</li>): ''
    )
}

export default PokémonList;