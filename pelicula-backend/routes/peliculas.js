const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const PeliculaSchema = new Schema(
    {
    _id: ObjectId,
    titulo: {type: String, trim: true},
    descripcion: String,
    comentarios: String
  },
  {timestamps:true}
  );

  const PeliculaModel = mongoose.model('PeliculaModel', PeliculaSchema);

router.get('/', async (req,res) => { 
        try {
            const respuesta = await PeliculaModel.find();
            res.json({mensaje: "Listado de peliculas", pelicula: respuesta});
        } catch (error) {
            res.status(505).json({mensaje:"error", tipo: error});
        }
});

router.get('/:idPelicula', async (req,res) => {
    const id = req.params.idPelicula;
    try {
        const respuesta = await PeliculaModel.findById(id);
        res.json({mensaje: "Pelicula encontrada", pelicula: respuesta});
    } catch (error) {
        res.status(505).json({mensaje:"error", tipo: error});
    }
});

router.post('/', async (req,res) =>{
    const peliculaNueva = new PeliculaModel({
        _id: new ObjectId(),
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        comentarios: req.body.comentarios
    });
    try {
        const respuesta = await peliculaNueva.save();
        res.json({mensaje:"Pelicula creada con exito", pelicula: respuesta});
    } catch (error) {
        res.status(505).json({mensaje: "error", tipo: err});
    }    
});

router.put('/:idPelicula', async (req,res) => {
    //modifico una pelicula, la localizo por ID (req.params.idPelicula)
    //y sobreescribo el contenido, ese contenido esta en req.body
    const id= req.params.idPelicula;
    const peliculaModificada = req.body;
    try {
        const respuesta = await PeliculaModel.findByIdAndUpdate(id,peliculaModificada);
        res.json({mensaje:"la pelicula fue modificada", pelicula: respuesta});
    } catch (error) {
        res.status(505).json({mensaje: "error", tipo: error});
    }
    
});

router.delete('/:idPelicula', async (req,res) =>{
    // eliminar pelicula
    const id= req.params.idPelicula;
    try {
        const respuesta = await PeliculaModel.findByIdAndDelete(id);
        res.json({mensaje:"la pelicula fue eliminada", pelicula: respuesta});
    } catch (error) {
        res.status(505).json({mensaje: "error", tipo: error});
    }
});

module.exports= router;
