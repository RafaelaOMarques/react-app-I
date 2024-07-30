
import './App.css'
import { BrowserRouter  as Router, Route, Routes, Navigate} from "react-router-dom";

import LanguageTranslator from './components/LanguageTranslator'
import MovieSearcEngine from './components/MovieSearcEngine'
import QRCodeGenerator from './components/QRCodeGenerator'
import IPAddressFinder from './components/IPAddressFinder'
import Login from './components/Login'
import NavBar from './components/NavBar'


function App() {


  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/translate" element={<LanguageTranslator/>}/>
          <Route path="/searchmovies" element={<MovieSearcEngine/>}/>
          <Route path="/generatorcode" element={<QRCodeGenerator/>}/>
          <Route path="/findip" element={<IPAddressFinder/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
