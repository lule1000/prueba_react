import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataProducts from "../../dataProducts";
import './itemDetailContainer.scss';
import ItemDetail from "./ItemDetail";
import Spinner from "../spinnerLoading/Spinner";

const ItemDetailContainer = () => {
    let [itemDetail, setItemDetail] = useState({});
    const { id } = useParams();
    let [loading, setLoading] = useState(true);

    function getItem() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(dataProducts)
            }, 2000)
        })
    }

    useEffect(() => {
        getItem().then((res) => {
            const foundItem = res.filter (item => item.id == id)
            setItemDetail (foundItem[0])
        })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    if (loading) return <Spinner />;
    return (
        <ItemDetail item={itemDetail} />
    );
}

export default ItemDetailContainer;