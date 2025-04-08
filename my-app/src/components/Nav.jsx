import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to="/">Ir a Inicio</Link>
        <br />
        <Link to="/home">Inicial</Link>
        <br />
        <Link to="/user/profile">Perfil</Link>
        <br />
    </div>
  )
}

export default Nav
