import { Link } from "react-router-dom";

const Item = ({imgUrl, alt, name, price, id}) => {
    return (
        <div className="card m-2">
            <img src={imgUrl} className="card-img-top border-bottom" alt={alt} />
            <div className="card-body">
                <h5 className="card-title">
                    {name}</h5>
                <p><b>${price}</b></p>
                <Link to={`item/${id}`} className="rounded-0 btn-outline-dark me-2 btn">View Product</Link>
            </div>
        </div>
    );
}

export default Item;