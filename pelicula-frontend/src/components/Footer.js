import React from 'react'
import './Footer.css';
//import {Link} from 'react-router-dom';

export default function Footer() {
    return (
            <footer className="footer__cont bg-primary text-white">
                <div className="container py-3">
                    <div className="row">
                            <div className="col-lg-3 col-sm-6 pb-2">
                                    <h4>Acerca de nosotros</h4>
                                    <p>Podras encontrar el mejor contenido de peliculas</p>
                            </div>
                            <div className="col-lg-3 col-sm-6 pb-2">
                                    <h4>Estamos en las redes</h4>
                                    <ul>
                                        <li><a href="https://www.facebook.com/" target="blank">Facebook</a></li>
                                        <li><a href="https://twitter.com/explore/" target="blank">Twitter</a></li>
                                        <li><a href="https://www.instagram.com/?hl=es-la" target="blank">Instagram</a></li>
                                    </ul>
                            </div>
                            <div className="col-lg-3 col-sm-6 pb-2">
                                    <h4>Acerca de nosotros</h4>
                                    <p>Podras encontrar el mejor contenido de peliculas</p>
                            </div>
                    </div>
                </div>
                <div className="container- fluid text-center bg-secondary py-2">
                    &copy;Todos los derechos reservados 2020.
                </div>
            </footer>
    )
}
