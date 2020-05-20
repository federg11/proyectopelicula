//@ts-check
import React from "react";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Peliculas from './components/Peliculas';
import Administrar from './components/Administrar';


export default function App() {
  return (
    <Router>
      <div>
        <nav className="text-white bg-black flex justify-center items-center">
          <ul className="flex p-4">
            <li className="ml-2 text-xl">
              <Link to="/">Peliculas</Link>
            </li>
            <li className="ml-2 text-xl">
              <Link to="/admin">Administar Peliculas</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/admin">
            <Administrar />
          </Route>
          <Route path="/">
            <Peliculas />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
