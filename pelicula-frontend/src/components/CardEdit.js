import React from 'react' 
import { Link } from 'react-router-dom';
import './Card.css';
export default function Card(props) {
    const { pelicula } = props
    return (
        <>
            <div className="col-md-4 col-12">
                <div key={pelicula._id} className="card">
                    <div style={{ height: '300px', overflow: 'hidden', backgroundColor: 'black' }}>
                        <img src={pelicula.imagen} className="card-img-top" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title">{pelicula.titulo}</h5>
                        <p className="card-text text-white">{pelicula.anio}</p>
                        <Link to={`/pelicula/editar/${pelicula._id}`} className="text-white">Editar</Link>
                    </div>
                </div>
            </div>
       </>
    )
}