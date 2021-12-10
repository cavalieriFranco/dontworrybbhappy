import React ,{useEffect , useState} from 'react';
import axios from 'axios';
import './ItemListContainer.css';


import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {


    const [articulos, setArticulos] = useState ([])

    useEffect(()=>{
        setTimeout(()=>{
        axios('http://127.0.0.1:5500/my-e-commerce/public/carrito.json')
        .then((res) => setArticulos (res.data));
        },1000);
     
        
    }, []);


    return (
        <div className='ItemsList'>
            <div className='ItemsCards'>
                {articulos.map((articulo)=>{
                    return <ItemDetail data={articulo} key={articulo.id}/>;
                })} 
            </div>
        </div>
    )
}

export default ItemDetailContainer;
