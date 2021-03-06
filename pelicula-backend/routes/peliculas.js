const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './imagenes');
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
      cb(null, name);
    }
  });
  const upload = multer({storage})

  const ComentarioSchema = new Schema( {
        _id: ObjectId,
        autor: String,
        comentario: String
  },{timestamps:true})
  
const PeliculaSchema = new Schema(
    {
    _id: ObjectId,
    titulo: {type: String, trim: true, uppercase:true},
    anio: String,
    duracion: String,
    descripcion: String,
    //comentarios: [ComentarioSchema],
    imagen: String
  },
  {timestamps:true}
  );

  const Pelicula = mongoose.model("Pelicula", PeliculaSchema);

  const obtenerPeliculas = async (req,res) => { 
    try {
        const respuesta = await Pelicula.find();
        res.json({mensaje: "Listado de peliculas", pelicula: respuesta});
    } catch (error) {
        res.status(505).json({mensaje:"error", tipo: error});
    }
};

    const obtenerPelicula = async (req,res) => {
        const id = req.params.idPelicula;
        try {
            const respuesta = await Pelicula.findById(id);
            res.json({mensaje: "Pelicula encontrada", pelicula: respuesta});
        } catch (error) {
            res.status(505).json({mensaje:"error", tipo: error});
        }
    };

    const crearPelicula = async (req,res) =>{
        console.log('req: ',req.file.filename);
        const urlImagen = 'http://localhost:3000/imagenes/' + req.file.filename
        const peliculaNueva = new Pelicula({
            _id: new ObjectId(),
            anio: req.body.anio,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            duracion:req.body.duracion,
           // comentarios: [''],
            imagen: urlImagen //eso lo genero multer 
        });
        try {
            const respuesta = await peliculaNueva.save();
            res.json({mensaje:"Pelicula creada con exito", pelicula: respuesta});
        } catch (error) {
            res.status(505).json({mensaje: "error", tipo: error});
        }    
    };

    const modificarPelicula = async (req,res) => {
        //modifico una pelicula, la localizo por ID (req.params.idPelicula)
        //y sobreescribo el contenido, ese contenido esta en req.body
        const id= req.params.idPelicula;
        const peliculaModificada = req.body;
        try {
            const respuesta = await Pelicula.findByIdAndUpdate(id,peliculaModificada);
            res.json({mensaje:"la pelicula fue modificada", pelicula: respuesta});
        } catch (error) {
            res.status(505).json({mensaje: "error", tipo: error});
        }
        
    };

    const eliminarPelicula = async (req,res) =>{
        // eliminar pelicula
        const id= req.params.idPelicula;
        try {
            const respuesta = await Pelicula.findByIdAndDelete(id);
            res.json({mensaje:"la pelicula fue eliminada", pelicula: respuesta});
        } catch (error) {
            res.status(505).json({mensaje: "error", tipo: error});
        }
    };

router.get('/', obtenerPeliculas);
router.get('/:idPelicula', obtenerPelicula);
router.post('/',upload.single("imagen"),crearPelicula);
router.put('/:idPelicula', modificarPelicula);
router.delete('/:idPelicula', eliminarPelicula);

module.exports= router;
