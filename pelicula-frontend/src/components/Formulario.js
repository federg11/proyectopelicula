import React from 'react'
import {useState,useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import CardEdit from '../components/CardEdit';

export default function Formulario() {
    const [titulo, setTitulo]= useState('');
    const [anio, setAnio] = useState('');
    const [duracion, setDuracion]= useState('');
    const [descripcion, setDescripcion]= useState('');
    const [imagen, setImagen] = useState('');
    const [loading, setLoading]= useState(false);
    const [respuestaMensaje, setRespuestaMensaje]= useState("");
    const [ingreso, setIngreso] = useState ([]);
    const [peliculas, setPeliculas]= useState ([]);
    
    useEffect(() => {
        
        const fetchPelicula = async () =>{
            try {
                setLoading(true);
                const response = await axios.get("http://localhost:3000/peliculas");
                setPeliculas(response.data.pelicula);
                setIngreso(response.data.pelicula);
            } catch (error) {
                console.error(error);               
            }finally{
                setLoading(false);
            }        
            
    };   
        fetchPelicula();
    }, []);

    const handleChange = (e) => {
        const buscarPelicula = peliculas.filter(movie => {
            return movie.titulo.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setIngreso(buscarPelicula)
    }
                           
    const pelicula = ingreso.map((pelicula) => ( 
            <CardEdit key={pelicula._id} id={pelicula._id} pelicula={pelicula}/>
            ))
    
    
    const handleSubmit = async (e) =>{
        try {
            e.preventDefault();
            setLoading(true);
            const payload = new FormData();
            payload.append("titulo",titulo);
            payload.append("anio",anio);
            payload.append("duracion",duracion);
            payload.append("descripcion",descripcion);
            payload.append("imagen",imagen);
            const response = await axios.post("http://localhost:3000/peliculas/", payload);
            setRespuestaMensaje(response.data.mensaje);
        } catch (error) {
            console.error(error);
        }finally{
            setLoading(false);
        }
        
    };
    const handleImagen = e => {
        setImagen(e.target.files[0]);
    }
    const imagenURL = imagen && URL.createObjectURL(imagen);

    return (
        <div className="container">
            <form className="formula" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Titulo</label>
                    <input className="form-control" 
                    type="text" 
                    placeholder="Titulo de la pelicula"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}>   
                    </input>
                </div>
                <div className="form-group">
                    <label >Año</label>
                    <input className="form-control" 
                    type="text" placeholder="Año de la pelicula"
                    value={anio}
                    onChange={e => setAnio(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label >Duracion</label>
                    <input className="form-control" 
                    type="text" placeholder="Duracion HH:MM"
                    value={duracion}
                    onChange={e => setDuracion(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label >Descripcion</label>
                    <input className="form-control" type="text"
                     placeholder="Breve descripcion"
                     value={descripcion}
                     onChange={e => setDescripcion(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label >Foto</label>
                    {
                    imagen && <img src={imagenURL} style={{width:200}} alt=""/>
                    }
                    
                  <input type="file"
                    onChange={handleImagen}>

                </input> 
                </div>
                {
                    loading ? (
                        "Loading..."
                    ) : (
                        <button type="submit" className="btn btn-primary">Crear pelicula</button>   
                    )} 
                    <p>{respuestaMensaje}</p>
                    {
                        respuestaMensaje  && (
                            <Link to="/">Volver</Link>
                            )}  
            </form>
            <div className="justify-content-center">
                <input  type="search" placeholder="Buscar Pelicula" onChange={handleChange}/>
                <h4 className="text-center">Peliculas Creadas</h4>
            </div>
            <div className="container d-flex">
                <div className="row my-3">
                    
                    {pelicula}
                </div>
            </div>
           
        </div>
    );
}
