import './NavBar.css'
import { useState } from 'react';



const NavBar = () => {
  const [selected, setSelected] = useState('Home');

  const handleSelect = (option)=>{
    setSelected(option)
  }

  return(
    <>
    <div className="nav">
      <header>Multi Aplicativos Funcionais</header>
      <ul>
        <li>Login</li>
        <li>Tradutor</li>
        <li>Gerador QR Code</li>
        <li>Buscar Filmes</li>
        <li>Buscar IPs</li>
      </ul>
    </div>
  </>
  )
}

export default NavBar