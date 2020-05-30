import React, { useState, useCallback, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'


function EditMoviePage() {
    const params = useParams()
    const history = useHistory()
    const [titulo, setTitulo] = useState('')
    const [anio, setAnio] = useState('')
    const [descripcion, setDescripcion] = useState('');
    
    const EditMovie = useCallback(async () => {
        const res = await axios.get(`http://localhost:3000/peliculas/${params.id}`);
        setTitulo(res.data.pelicula.titulo)
        setAnio(res.data.pelicula.anio)
        setDescripcion(res.data.pelicula.descripcion);
    }, [params.id])
    useEffect(() => {
        EditMovie()
    }, [EditMovie])
    const handleClick = async () => {
        try {
            await axios.put(`http://localhost:3000/peliculas/${params.id}`, { titulo, anio, descripcion })
            history.goBack()
        } catch (error) {
            console.log(error)
        }
    }
    const DeleteMovie = async () => {
        try {
            await axios.delete(`http://localhost:3000/peliculas/${params.id}`);
            history.push('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
    
        <form className='col-3'>
            
            <div className="form-group">
                <label>Titulo</label>
                <input type="text" value={titulo} className="form-control"
                    id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={(e) => setTitulo(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Año</label>
                <input type="text" value={anio} className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setAnio(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Descripcion</label>
                <input type="text" value={descripcion} className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setDescripcion(e.target.value)} />
            </div>
            <div className='d-flex justify-content-between'>
                <div>
                    <button type="button" className="btn btn-outline-primary mr-20"
                        onClick={handleClick}>Guardar Cambios</button>
                        
                </div>
                <div>
                    <button type="button" className="btn btn-outline-primary"
                        onClick={DeleteMovie}>Eliminar Pelicula</button>
                </div>
            </div>
        
        </form>
    )
}
export default EditMoviePage;