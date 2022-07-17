import { useState, useEffect } from "react";
import dataProducts from "../../dataProducts";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    let [itemDetail, setDetail] = useState([]);

    useEffect(() => {
        function getItem() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(dataProducts)
                }, 2000)
            })
        }
        getItem().then((res) => {
            setDetail(res[0]);
            console.log(res[0])
        })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <ItemDetail itemDetail={itemDetail} />
    );
}

export default ItemDetailContainer;