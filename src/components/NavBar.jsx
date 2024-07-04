import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <div>
        <h3>Sabores de la Patagonia</h3>
        <h4>Pasteleria Artesanal</h4>
      </div>
      <button> <Link to={'/'} className='link'> Home </Link> </button>
      <button> <Link to={'/products'} className='link' > Productos </Link> </button>
      <button> <Link to={'/contact'} className='link' > Contacto </Link></button>
      <CartWidget/>
    </nav>
  )
}

export default NavBar