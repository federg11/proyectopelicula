// import React, {useState, useEffect} from 'react';
// import axios from 'axios';

// export default function Busqueda() {
// const [ingreso, setIngreso] = useState ('');
// const [search, setSearch] = useState([]);
// const [loading, setLoading] = useState (false);

// const handleSubmit = e => {
//     e.preventDefault();
    
//     useEffect(() => {
        
//         const fetchBusqueda = async () =>{
//             try {
//                 setLoading(true);
//                 const response = await axios.get();
//                 setSearch(response.data.pelicula);
//             } catch (error) {
//                 console.error(error);               
//             }finally{
//                 setLoading(false);
//             }        
            
//     };   
//         fetchBusqueda();
//     }, []);

// }
//     return (
//         <div>
//             <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
//                 <input className="form-control mr-sm-2" 
//                 type="text"
//                  placeholder="Busca tu pelicula" 
//                  aria-label="Search"
//                  value={ingreso}
//                  onChange={(e) => setIngreso(e.target.value)}></input>
//                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
//             </form>
//         </div>
//     )
// }
