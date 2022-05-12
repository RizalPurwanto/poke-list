import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function Moves() {
  const [pokemon, setPokemon] = useOutletContext()

    return (
      <div >
        
          {pokemon.moves?.map((el, i) => {
            return (
              
          <div key={i} className='bg-gray-300 mx-2 my-2 rounded-lg px-2 py-2 font-bold text-gray-700' >
            {el.move.name.split("-").map(el => {
              return el.charAt(0).toUpperCase() + el.slice(1)
            }).join(" ")}
          </div>
            )
          })}
        
        
      </div>
    );
  }  