import Item from "./Item";

const ItemList = (props) => {
    return (
        props.items.map(cadaItem => {
            return <Item key={cadaItem.id} imgUrl={cadaItem.imgUrl} alt={cadaItem.alt} name={cadaItem.name} description={cadaItem.description} price={cadaItem.price} stock={cadaItem.stock} />
        })

    );
}

export default ItemList;