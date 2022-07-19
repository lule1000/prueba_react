import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import dataProducts from '../../dataProducts.json';
import Spinner from '../spinnerLoading/Spinner';
import './itemListContainer.scss';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const { name } = useParams();
    let [dataItems, setItems] = useState([]);
    let [loading, setLoading] = useState(true);

    const promiseData = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000);
        setTimeout(() => {
            reject('Hubo un error')
        }, 2000);
    });

    useEffect(() => {
        promiseData.then((res) => {
            const products = res;
            console.log(name)
            if (name) {
                setItems(products.filter(product => product.category == name))
            } else {
                setItems(products)
            }
        })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [name]);

    if (loading) return <Spinner />;
    return (
        <main className='m-4 d-flex flex-direction-row justify-content-center d-flex flex-wrap'>
            <ItemList items={dataItems} />
        </main>
    );
}

export default ItemListContainer;