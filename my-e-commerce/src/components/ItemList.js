import React, {useEffect , useState} from 'react';
// import axios from 'axios';
import './ItemListContainer.css'

import Item from './Item';


const ItemList = () => {

    const [articulos, setArticulos] = useState ([])

    // const [data, setData]= useState ({});

    

    useEffect(()=>{
        setTimeout(()=>{
        fetch('http://127.0.0.1:5500/my-e-commerce/public/carrito.json')
        .then((response) => response.json ())
        .then((json) => setArticulos (json));
        },1000);
        // axios.get('https://api.nasa.gov/planetary/apod?api_key=EO4GDJORFRkPOSQNfnkATdI0kb18wXZCqZVlGh3N')
        // .then((res) => setData(res.data));
        
    }, []);
    
    return (
        <div className='ItemsList'>
            <div className='ItemsCards'>
                {articulos.map((articulo)=>{
                    return <Item data={articulo} key={articulo.id}/>;
                })} 
            </div>
        </div>
    )
}

export default ItemList;
