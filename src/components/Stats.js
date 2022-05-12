import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function Stats() {
  const [pokemon, setPokemon] = useOutletContext()

    return (
      <div >
        
          {pokemon.stats?.map((el, i) => {
            return (
              
          <div className=' text-left grid grid-cols-3 content-start' >
            <div className=' bg-gray-300 mx-2 my-2 rounded-lg px-2 py-2 font-bold  text-gray-700 text-left'>
            {el.stat.name.split("-").map(el => {
              return el.charAt(0).toUpperCase() + el.slice(1)
            }).join(" ")}
            </div>
            <div className='text-center bg-gray-300 mx-2 my-2 rounded-lg px-2 py-2 font-bold text-gray-700'>
             {el.base_stat} <div className={` h-3 rounded-lg ${el.base_stat < 50 ? 'bg-red-600' : 'bg-green-600' }`} style={{width: `${el.base_stat}%`}}></div>
            </div>
           
          </div>
          
            )
          })}
        
        
      </div>
    );
  }  