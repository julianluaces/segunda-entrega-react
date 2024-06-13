

const Item = ({ id, name, img, price, stock }) => {
    return (


        <div className="tarjetas-productos">
            
            <div>
                <picture>
                    <img src={img} alt={name} />
                </picture>
            </div>
            <div>
                <article >
                    <header>
                        <h2> {name} </h2>
                    </header>
                    <section>
                        <p>Precio: $ {price} </p>
                        <p>Stock: {stock} </p>
                    </section>
                    <footer>
                        <button>
                            Ver detalle
                        </button>
                    </footer>
                </article>
            </div>
            
        </div>

    )
}

export default Item