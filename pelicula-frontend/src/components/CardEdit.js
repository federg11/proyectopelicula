import React, {useState} from 'react';
//import { Link } from 'react-router-dom';
import './Card.css';
import axios from 'axios';

export default function Card(props) {
    const { pelicula } = props
    const [editPelicula, setEditPelicula]= useState ({titulo:'',anio:''});

    const fetchEditarPelicula = async () =>{
        const {titulo, anio} = editPelicula;
        await axios.put(`http://localhost:3000/peliculas/${editPelicula._id}`,{titulo,anio});
        try {
            console.log(editPelicula);
        } catch (error) {
            console.error(error);               
        }        
};   

    const handleChangeEditar = (e) => {
        setEditPelicula({...editPelicula, [e.target.name]: e.target.value});
        console.log(editPelicula);
    }

    return (
        <div className="col-md-4 col-12">
            <div key={pelicula._id} className="card">
                <div style={{ height: '300px', overflow: 'hidden', backgroundColor: 'black' }}>
                    <img src={pelicula.imagen} className="card-img-top" alt="..." />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{pelicula.titulo}</h5>
                    <p className="card-text">{pelicula.anio}</p>

                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Editar
                    </button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <input type="text" name='titulo' className="form-control" 
                                    onChange={handleChangeEditar}
                                    value={pelicula.titulo}/>
                                    <input type="text" name='anio' className="form-control"  
                                    onChange={handleChangeEditar}
                                    value={pelicula.anio}/>
                                </div>
                                <div className="modal-body">
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-primary w-50" data-dismiss="modal" onClick={fetchEditarPelicula}>Guardar</button>
                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}