
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer"
import Peliculas from "./pages/Peliculas";
import Navbar from "./components/Navbar";
import AddPelicula from "./pages/AddPelicula";
import PeliculaPage from './pages/PeliculaPage';
import EditMoviePage from './pages/EditMoviePage';
export default function App() {
  return (
    <Router>
      <Header />
      <Navbar/>
      <main>
      <Switch>
      <Route path="/pelicula/editar/:id" exact component={EditMoviePage}/>
      <Route path="/pelicula/:id" exact component={PeliculaPage}>
        </Route>
        <Route path="/admin">
          <AddPelicula />
        </Route>
        <Route path="/">
          <Peliculas />
        </Route>
      </Switch>
      </main>
      <Footer />
    </Router>
  );
}
