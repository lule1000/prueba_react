import { useState } from "react";

const ItemDetail = ({ item }) => {
    const [count, setCount] = useState(1);

    const cantidadProducto = (cantidad) => {
        if (cantidad === "subtract" && count > 1) {
            setCount(count - 1)
        } else if (cantidad === "add" && count < item.stock) {
            setCount(count + 1)
        }
    }
    return (
        <div className="row g-0 border m-5">
            <div className="col-md-4">
                <img src={item.imgUrl} className="img-fluid rounded-start border-end" alt={item.alt} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    <h5>Description</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text"><b>${item.price}</b></p>
                    <p className="card-text"><b>Stock  ({item.stock} available)</b></p>
                    <button className='btnQuantiti me-1' onClick={() => cantidadProducto("subtract")}>Remove</button>
                    {count}
                    <button className='btnQuantiti ms-1' onClick={() => cantidadProducto("add")}>Add</button><br />
                    <button className="rounded-0 btn-outline-dark mt-2 btn">Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;