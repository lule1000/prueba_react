import Item from "./Item";

const ItemList = (props) => {
    return (
        props.items.map(item => {
            return <Item key={item.id} imgUrl={item.imgUrl} alt={item.alt} name={item.name} price={item.price} stock={item.stock} />
        })

    );
}

export default ItemList;