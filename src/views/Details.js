import { useEffect, useState } from "react";
import { Routes, Route, Link, useParams, Outlet, NavLink } from "react-router-dom";
import axios from "axios";




function Evolution() {
    return (
        <div>
            <h1>Evolution</h1>

        </div>
    );
}
function Moves() {
    return (
        <div>
            <h1>Move</h1>

        </div>
    );
}

export default function Details() {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true);
    const params = useParams()


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokeId}`)
            .then(resp => {
                console.log(resp)
               
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
            <NavLink to={"/"}><h2 className="font-bold text-3xl">PokeDex</h2></NavLink>

            </main>
            <div className="flex flex-wrap justify-center">
                <div className={`max-w-3xl h-max rounded ${pokemon.types?.find(el => el.type.name == 'fire') ? 'bg-red-400' : pokemon.types?.find(el => el.type.name == 'grass' || el.type.name == 'bug') ? 'bg-green-400' : pokemon.types?.find(el => el.type.name == 'water') ? 'bg-blue-400' : 'bg-gray-300'}  overflow-hidden shadow-lg px-4 py-4 my-4 mx-4 rounded-lg `}>
                    <div className="float-left">
                        <h5 className="card-title text-white text-3xl font-bold">{pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</h5>
                        {
                            pokemon.types?.map((type, index) => {
                                return (<span key={index} className={`inline-flex items-center justify-center px-2 py-1 mr-2 text-md font-bold leading-none text-green-100 ${type.type.name == 'fire' ? 'bg-red-600' : type.type.name == 'grass' ? 'bg-green-600' : type.type.name == 'water' ? 'bg-blue-600' : 'bg-gray-400'}  rounded-full`}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</span>)
                            })
                        }



                    </div>

                    <div className="flex flex-wrap justify-center">
                        <div>
                            <img className="object-contain card-img-top w-3/4 px-2" src={pokemon.sprites?.other["official-artwork"].front_default} alt="Card image cap" />
                        </div>


                    </div>
                    <div className="bg-gray-100 flex px-3">
                       <div>
                       <ul className="flex">
                            <li className="mr-6">
                                <Link to={`/pokemon/${params.pokeId}`} className="text-gray-800 font-bold  hover:text-blue-800" href="#">About</Link>
                            </li>
                            <li className="mr-6">
                                <Link to={`stats`} className="text-gray-800 font-bold hover:text-blue-800" href="#">Base Stats</Link>
                            </li>
                            {/* <li className="mr-6">
                                <Link to={`evolution`} className="text-gray-800 font-bold hover:text-blue-800" href="#">Evolution</Link>
                            </li> */}
                            <li className="mr-6">
                                <Link to={`moves`} className="text-gray-800 font-bold hover:text-blue-800" href="#">Moves</Link>
                            </li>
                        </ul>
                        
                       </div>
                       
                       
                    </div>
                    <div className="bg-gray-100 h-96 overflow-auto">
                       <Outlet context={[pokemon, setPokemon]} />
                       </div>
                </div>


                
            </div>



        </>
    );
}