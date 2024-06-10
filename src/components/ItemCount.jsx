
import { useState } from 'react'


const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial);

    const increment = () => {

        if (quantity < stock) {
            setQuantity(quantity + 1)
        }

    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }



    return (

        <div className='counter'>

            <div>
                <button className='button' onClick={decrement}>-</button>
                <button className='button' onClick={increment}>+</button>

            </div>

            <div>
                <h1 className='numeroCarrito'>{quantity}</h1>
            </div>

            <div>
                <button className="button" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            </div>

          
        </div>

    )
}

export default ItemCount 