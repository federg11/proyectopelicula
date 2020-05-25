//@ts-check
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer"
import Peliculas from "./pages/Peliculas";
import Administrar from "./pages/Administrar";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <Router>
      <Header />
      <Footer />
      <Navbar/>
      <main>
      <Switch>
        <Route path="/admin">
          <Administrar />
        </Route>
        <Route path="/">
          <Peliculas />
        </Route>
      </Switch>
      </main>
    </Router>
  );
}
