import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


export default function Card(props) {
    const { pelicula } = props
    return (
    <div className="card_cont col-md-4 col-12">
        <div key={pelicula._id} className="card">
            <div style={{height:'300px', overflow:'hidden', backgroundColor:'black'}}>
            <img src={pelicula.imagen} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">{pelicula.titulo}</h5>
                <Link to={`/pelicula/${pelicula._id}`} className="btn btn-primary">Info</Link>
            </div>
        </div>
    </div>
    )
}
