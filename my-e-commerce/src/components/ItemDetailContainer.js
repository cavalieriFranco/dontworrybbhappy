import React ,{useEffect , useState} from 'react';
import './ItemListContainer.css';

import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {

    const [articulos, setArticulos] = useState ([])

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
                    return <ItemDetail data={articulo} key={articulo.id}/>;
                })} 
            </div>
        </div>
    )
}

export default ItemDetailContainer;
