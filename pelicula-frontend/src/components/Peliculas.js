//@ts-check
import React from 'react';
import { useHistory } from 'react-router-dom';


export default function Peliculas (){
  const history =useHistory();

  const addPelicula = () => {
    console.log('hola');
    history.push("/");

  };
    return (
        <div className="bg-gray-300 h-screen w-full flex justify-center items-center flex-col">
            <button onClick={addPelicula} className="bg-blue-700 rounded p-4 mb-4 text-white">Agregar</button>
            <ul className="p-4 bg-black rounder text-white">
              <li>hola</li>
              <li>chau</li>
              <li>test</li>
            </ul>
        </div>

    );
}