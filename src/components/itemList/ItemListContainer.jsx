import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import dataProducts from '../../dataProducts';
import Spinner from '../spinnerLoading/Spinner';
import './itemListContainer.scss';

const ItemListContainer = () => {
    let [dataItems, setItems] = useState ([]);
    let [loading, setLoading] = useState (true);

    useEffect (() => {
        const promiseData = new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve (dataProducts)
            }, 2000);
            setTimeout (() => {
                reject ('Hubo un error')
            }, 2000);
        });
        promiseData.then ((res) => {
            setItems (dataProducts);
        })
        .catch ((error) => {
            console.log (error);
        })
        .finally (() => {
            setLoading (false)
        })
    }, []);

    if (loading) return <Spinner />;
    return (
        <main className='m-2 d-flex flex-direction-row justify-content-center'>
            <ItemList items={dataItems} />
        </main>
    );
}

export default ItemListContainer;