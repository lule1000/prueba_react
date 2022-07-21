import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const { stock, imgUrl, alt, name, description, price } = item;
    const [amount, setAmount] = useState(0);
    const onAdd = (amount) => {
        setAmount(amount);
    }

    return (
        <div className="row g-0 border m-5">
            <div className="col-md-4">
                <img src={imgUrl} className="img-fluid rounded-start border-end" alt={alt} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h5>Description</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><b>${price}</b></p>
                    <p className="card-text"><b>Stock  ({stock} available)</b></p>
                    {amount === 0 ? <ItemCount stock={stock} onAdd={onAdd} /> : <>
                        <h5>{amount} products have been added to the cart</h5>
                        <Link to={'/cart'}><button className="rounded-0 btn-outline-dark mt-2 btn">Go to Checkout</button></Link>
                    </>}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;