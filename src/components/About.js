import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function About() {
  const [pokemon, setPokemon] = useOutletContext()

    return (
      <div >
        
          {/* {pokemon.stats?.map((el, i) => {
            return (
              
          <div className=' text-left  content-start' >
            <div className=' bg-gray-300 mx-2 my-2 rounded-lg px-2 py-2 font-bold  text-gray-700 text-left'>
            {el.stat.name.split("-").map(el => {
              return el.charAt(0).toUpperCase() + el.slice(1)
            }).join(" ")}

            </div>
           
            
           
          </div>
          
            )
          })} */}
           <div className=' bg-gray-300 mx-2 my-2 rounded-lg px-2 py-2 font-bold  text-gray-700 text-left'>
            Height   : {pokemon.height * 10} cm
            
            </div>
            <div className=' bg-gray-300 mx-2 my-2 rounded-lg px-2 py-2 font-bold  text-gray-700 text-left'>
            Weight  : {pokemon.weight / 10} kg
            
            </div>
            <div className=' bg-gray-300 mx-2 my-2 rounded-lg px-2 py-2 font-bold  text-gray-700 text-left'>
            Abilities  : {pokemon.abilities?.map(el => {
              return (
                <div>{el.ability.name.split("-").map(el => {
                  return el.charAt(0).toUpperCase() + el.slice(1)
                }).join(" ")}</div>
              )
            })}
            
            </div>
        
        
      </div>
    );
  }  