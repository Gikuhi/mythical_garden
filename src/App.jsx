import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Exp from "./components/Exp.jsx";

function App(){

  return (
    <>
    <Router>
    <Routes>
    <Route path = "/"  element = {<Home/>} />
    <Route path = "/exp"  element = {<Exp/>} />


    </Routes>
    </Router>
    </>
  )
}
export default App