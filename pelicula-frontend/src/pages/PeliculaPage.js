
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import Card from '../components/Card';
//import Busqueda from '../components/Busqueda';
import { useParams, useHistory} from 'react-router-dom';

export default function Peliculas() {
    const history= useHistory();
    const params = useParams();
  //  const [loading, setLoading] = useState(false);
    const [pelicula, setPelicula]= useState ({});
    
    useEffect(() => {
        
        const fetchPelicula = async () =>{
            try {
                //setLoading(true);
                const response = await axios.get(`http://localhost:3000/peliculas/${params.id}`);
                setPelicula(response.data.pelicula);
            } catch (error) {
                console.error(error);               
            }finally{
               // setLoading(false);
            }                
    };   
        fetchPelicula();
    }, [params.id]);

    const volver = () => {
        history.goBack();
    }

    return (
    <div className="estilo__card d-flex justify-content-center">
    <div className="card mb-3 bg-black">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={pelicula.imagen} className="card-img" alt="..."/>
          </div>
          <div className="cont_card col-md-8">
            <div className="card-body">
                <h5 className="card-title">Título: {pelicula.titulo}</h5>
                <p className="card-text">Año: {pelicula.anio}</p>
                <p className="card-text">Duración: {pelicula.duracion} Hs</p>
              <p className="card-text">Descripción: {pelicula.descripcion}</p>
              <button type="button" className="btn btn-success" onClick={volver}>Volver</button>
            </div>
          </div>
        </div>
        </div>
    </div>
    );
}
