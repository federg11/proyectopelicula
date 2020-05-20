//@ts-check
import React from "react";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Administrar from "./pages/Administrar";
import Home from "./pages/Home";
import {Button} from 'antd';




export default function App() {
  return (
    <Router>
        <div>
        <Button type="primary">Primary</Button>
        </div>
  
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">Administrar Peliculas</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/admin">
            <Administrar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    );
}
