import React from 'react'
import './Footer.css';
//import {Link} from 'react-router-dom';

export default function Footer() {
    return (
            <footer className="footer__cont text-white">
                <div className="container py-3">
                    <div className="row justify-content-center">
                            <div className="col-md-3">
                                    <strong className="estilo_contacto">Acerca de nosotros</strong>
                                    <p>La mejor informacion de las peliculas</p>
                            </div>
                            <div className="col-md-3">
                                    <strong className="estilo_contacto">Buscanos en las redes</strong>
                                    <ul className="estilo_lista">
                                        <li><a href="https://www.facebook.com/" target="blank"><i className="fab fa-facebook"></i></a>Facebook</li>
                                        <li><a href="https://www.instagram.com/?hl=es-la" target="blank"><i className="fab fa-instagram"></i></a>Instagram</li>
                                        <li><a href="https://twitter.com/explore" target="blank"><i className="fab fa-twitter"></i></a>Twitter</li>
                                    </ul>
                            </div>
                            <div className="col-md-3">
                                    <strong className="estilo_contacto">Contacto</strong>
                                    <p>
                                        <i className="fab fa-whatsapp"></i>
                                        <a href="https://web.whatsapp.com/" target="blank">+5493816343931</a>
                                    </p> 
                                    <p>
                                        <i className="fas fa-envelope-square"></i>
                                        <a href="https://outlook.live.com/owa/" target="blank">tu-movies@tumovies.com.ar</a>
                                    </p> 

                            </div>
                    </div>
                </div>
                <div className="container-fluid text-center bg-secondary py-2">
                    &copy;Todos los derechos reservados 2020 | Tu Movies 
                </div>
            </footer>
    )
}
