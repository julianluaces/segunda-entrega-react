import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <div>
        <h3>Sabores de la Patagonia</h3>
        <h4>Pasteleria Artesanal</h4>
      </div>
      <button>Home</button>
      <button>Productos</button>
      <button>Contacto</button>
      <CartWidget/>
    </nav>
  )
}

export default NavBar