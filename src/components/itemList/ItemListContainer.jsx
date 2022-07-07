import { useState, useEffect } from 'react';
import './itemListContainer.scss';
import termoStanley from './images/termoStanley (1).webp'

const ItemListContainer = ({ stock }) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log('Componente montado')
    }, [count])

    const cantidadProducto = (cantidad) => {
        if (cantidad === "-" && count > 1) {
            setCount(count - 1)
        } else if (cantidad === "+" && count < 6) {
            setCount(count + 1)
        }
    }

    return (
        <main className='m-2'>
            <div className="card">
                <img src={termoStanley} className="card-img-top" alt="Moneda Romana" />
                <div className="card-body">
                    <h5 className="card-title">
                        Stanley term</h5>
                    <p className="card-text">Stanley thermos keep the temperature for 12 hours.</p>
                    <p>{stock}</p>
                    <a href="#" className="me-1 btn btn-dark">Add to cart</a>
                    <button onClick={() => cantidadProducto("-")}>-</button>
                    {count}
                    <button onClick={() => cantidadProducto("+")}>+</button>
                </div>
            </div>
        </main>
    );
}

export default ItemListContainer;