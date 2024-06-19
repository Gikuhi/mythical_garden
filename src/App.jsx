import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Exp from "./components/Exp.jsx";
import Dining from "./components/Dining.jsx";
import Events from "./components/Events.jsx";
import Wedding from './components/Wedding.jsx';
import Concert from './components/Concert.jsx';


function App(){

  return (
    <>
    <Router>
    <Routes>
    <Route path = "/"  element = {<Home/>} />
    <Route path = "/exp"  element = {<Exp/>} />
    <Route path = "/dining"  element = {<Dining/>} />
    <Route path = "/events"  element = {<Events/>} />
    <Route path = "/wedding"  element = {<Wedding/>} />
    <Route path = "/concert"  element = {<Concert/>} />






    </Routes>
    </Router>
    </>
  )
}
export default App