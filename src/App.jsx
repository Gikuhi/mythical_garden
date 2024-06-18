import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Exp from "./components/Exp.jsx";
import Dining from "./components/Dining.jsx";
import Events from "./components/Events.jsx";


function App(){

  return (
    <>
    <Router>
    <Routes>
    <Route path = "/"  element = {<Home/>} />
    <Route path = "/exp"  element = {<Exp/>} />
    <Route path = "/dining"  element = {<Dining/>} />
    <Route path = "/events"  element = {<Events/>} />




    </Routes>
    </Router>
    </>
  )
}
export default App