import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);

    const cantidadProducto = (cantidad) => {
        if (cantidad === "subtract" && count > 1) {
            setCount(count - 1)
        } else if (cantidad === "add" && count < stock) {
            setCount(count + 1)
        }
    }
    return (<>
        <button className='btnQuantiti me-1' onClick={() => cantidadProducto("subtract")}>Remove</button>
        {count}
        <button className='btnQuantiti ms-1' onClick={() => cantidadProducto("add")}>Add</button><br />
        <button className="rounded-0 btn-outline-dark mt-2 btn" onClick={() => onAdd (count)} type='button'>Add To Cart</button>
    </>);
}

export default ItemCount;