import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Home() {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(resp => {
            console.log(resp)
            
            console.log(resp, "INI POKEMONS")
           setPokemons(resp.data.results)
        })
        
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })

        


    }, [])


    return (
        <>
            <main>
               <NavLink to={"/"}><h2 className="font-bold text-3xl">PokeDex</h2></NavLink>

            </main>
            <div className="flex flex-wrap justify-center">
                
                {pokemons.map((pokemon, index) => {
                return (
                    <NavLink to={`/pokemon/${pokemon.name}`}>
<div key={index} className=" max-w-sm rounded bg-gray-400 overflow-hidden shadow-lg px-4 py-4 my-4 mx-4 rounded-lg grid grid-cols-2">
                    <div>
                         <h5 className="card-title text-white text-xl font-bold">{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                        
                    </div>

                    <div className="card-body d-flex flex-column">


                        <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`} alt="Card image cap" />
                    </div>
                </div>

                    </NavLink>
                    
                )

            })}
                
            </div>
           
            
            
        </>
    );
}