//@ts-check
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
//import Busqueda from '../components/Busqueda';

export default function Peliculas() {
  //  const history= useHistory();
    const [loading, setLoading]= useState(false);
    const [peliculas, setPeliculas]= useState ([]);
    const [ingreso, setIngreso] = useState ([]);
    
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
            <Card key={pelicula._id} id={pelicula._id} pelicula={pelicula}/>
            ))

    return (
        <div>
            <div>
                <input type="search" placeholder="Buscar Pelicula" onChange={handleChange}/>
            </div>
            
            {/* <Busqueda/> */}
                {
                    loading ? ( 
                    <span>Cargando...</span>
                     ) : (
                        <div className="container">
                            <div className="row my-3">
                                {pelicula}
                            </div>
                        </div>
                )} 
        </div>
        

    );
}