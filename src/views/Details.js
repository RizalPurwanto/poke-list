import { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true);
    const params = useParams()
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokeId}`)
        .then(resp => {
            console.log(resp)
            // if (!resp.ok) {
            //     return resp.json().then(err => {
            //         Promise.reject(err)
            //     })
            // }
            // return resp.json()
            console.log(resp.data, "INI ONE POKEMON")
           setPokemon(resp.data)
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
            <div className=" max-w-3xl h-max rounded bg-green-400 overflow-hidden shadow-lg px-4 py-4 my-4 mx-4 rounded-lg ">
                    <div className="float-left">
                         <h5 className="card-title text-white text-3xl font-bold">{pokemon.name}</h5>
                        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-md font-bold leading-none text-green-100 bg-green-600 rounded-full">Grass</span>
                        <span className="inline-flex items-center justify-center px-2 py-1 mr-2 text-md font-bold leading-none text-green-100 bg-green-600 rounded-full">Poison</span>
                    </div>

                    <div className="flex flex-wrap justify-center">
                        <div>
                        <img className="object-contain card-img-top w-3/4 px-2" src={pokemon.sprites?.other["official-artwork"].front_default} alt="Card image cap" />
                        </div>

                       
                    </div>
                    <div className="bg-gray-100">
            test
                    </div>
                </div>
            
                
                
            </div>
           
            
            
        </>
    );
}