import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ( {name, img, price, description, stock, category  }) => {
  return (
    <article className="detalle-productos">
        <header>
            <h2> {name} </h2>
        </header>
        <picture>
        <img src= {img} alt= {name} />
        </picture>
        <section>
            <p> {description} </p>
            <p>Precio: $ {price} </p>
            <p>Categoria: {category} </p>
        </section>
        <footer>
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada', quantity) } />
        </footer>
    </article>
  )
}


export default ItemDetail