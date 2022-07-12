import { useState } from "react";

const Item = ({imgUrl, alt, name, description, price, stock}) => {
    const [count, setCount] = useState(1);

    const cantidadProducto = (cantidad) => {
        if (cantidad === "-" && count > 1) {
            setCount(count - 1)
        } else if (cantidad === "+" && count < stock) {
            setCount(count + 1)
        }
    }
    return (
        <div className="card m-2">
            <img src={imgUrl} className="card-img-top border-bottom" alt={alt} />
            <div className="card-body">
                <h5 className="card-title">
                    {name}</h5>
                <p className="card-text">{description}.</p>
                <p><b>${price}</b></p>
                <p><b>Stock ({stock} disponibles)</b></p>
                <a href="#" className="rounded-0 btn-outline-dark me-2 btn">Add To Cart</a>
                <button className='btnQuantiti me-1' onClick={() => cantidadProducto("-")}>Remove</button>
                {count}
                <button className='btnQuantiti ms-1' onClick={() => cantidadProducto("+")}>Add</button>
            </div>
        </div>
    );
}

export default Item;