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
            // if (!resp.ok) {
            //     return resp.json().then(err => {
            //         Promise.reject(err)
            //     })
            // }
            // return resp.json()
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
                <h2 className="font-bold text-3xl">PokeDex</h2>

            </main>
            <div className="flex flex-wrap justify-center">
                <div className=" max-w-sm rounded bg-green-400 overflow-hidden shadow-lg px-4 py-4 my-4 mx-4 rounded-lg grid grid-cols-2">
                    <div>
                        <NavLink to={`/pokemon/1`}> <h5 className="card-title text-white text-xl font-bold">Bulbasaur</h5></NavLink>
                        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">Grass</span>
                        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">Poison</span>
                    </div>

                    <div className="card-body d-flex flex-column">


                        <NavLink to={`/pokemon/1`}><img className="card-img-top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"} alt="Card image cap" /></NavLink>
                    </div>
                </div>
                {pokemons.map(pokemon => {
                return (
                    <div className=" max-w-sm rounded bg-green-400 overflow-hidden shadow-lg px-4 py-4 my-4 mx-4 rounded-lg grid grid-cols-2">
                    <div>
                        <NavLink to={`/pokemon/1`}> <h5 className="card-title text-white text-xl font-bold">Bulbasaur</h5></NavLink>
                        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">Grass</span>
                        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">Poison</span>
                    </div>

                    <div className="card-body d-flex flex-column">


                        <NavLink to={`/pokemon/1`}><img className="card-img-top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"} alt="Card image cap" /></NavLink>
                    </div>
                </div>
                )

            })}
                
            </div>
           
            
            
        </>
    );
}