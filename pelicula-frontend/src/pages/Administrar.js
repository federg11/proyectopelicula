import React from 'react';
import {useState} from 'react';
import axios from "axios";

export default function Administrar (){
    const [titulo, setTitulo] = useState("");
    const [anio, setAnio] = useState ("");
    const [descripcion, setDescripcion] = useState("");
    const [loading,setLoading] = useState(false);
   // const [comentarios,setComentarios] = useState("");
    

    const handleSubmit =  async (e) => {
        try {
            e.preventDefault();
            setLoading(true);
            const payLoad = {

                titulo,
                anio,
                descripcion,
                //imagen
            }
            console.log('test', payLoad);
            const response = await axios.post("http://localhost:3000/peliculas/", payLoad);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    }
    return (
        <div className="bg-gray-300 h-screen w-full flex justify-center items-center flex-col">
            <form className="p-4 bg-black rounded flex-col" onSubmit={handleSubmit}>
            <label className="text-white">Titulo</label>
            <input className="bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" 
            type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
            <label className="text-white">año</label>
            <input className="bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" 
            type="text" value={anio} onChange={(e)=> setAnio (e.target.value)}></input>
            <label className="text-white">descripcion</label>
            <input className="bg-white border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" 
            type="text" value={descripcion} onChange={(e) => setDescripcion (e.target.value)}></input>
            {
                loading ? (
                    <span className="text-white">"Loading..."</span>
                ) : (
                    <button className="text-white bg-blue-700 rounded p-4" type="submit">Agregar</button>
                )}
            </form>
        </div>
    );
}