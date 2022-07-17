import { useState } from "react";

const ItemDetail = ({ itemDetail }) => {
    const [count, setCount] = useState(1);

    const cantidadProducto = (cantidad) => {
        if (cantidad === "subtract" && count > 1) {
            setCount(count - 1)
        } else if (cantidad === "add" && count < itemDetail.stock) {
            setCount(count + 1)
        }
    }
    return (
        <div className="row g-0 border m-5">
            <div className="col-md-4">
                <img src={itemDetail.imgUrl} className="img-fluid rounded-start border-end" alt={itemDetail.alt} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{itemDetail.name}</h3>
                    <p className="card-text">{itemDetail.description}</p>
                    <p className="card-text"><b>{itemDetail.price}</b></p>
                    <p className="card-text"><b>Stock  ({itemDetail.stock} available)</b></p>
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