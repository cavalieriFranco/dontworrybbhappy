import React, {useEffect , useState} from 'react';
import {Link} from 'react-router-dom';
import './ItemListContainer.css'
import  { db } from '../firebase/firebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';

import Item from './Item';


const ItemList = () => {

    const [artData, setartData] = useState ([]);
    

    useEffect(()=>{
        const getProducts = async() =>{
           
                const q = query (collection(db, 'bbhappy'));
                const docs = [];
                const querySnapshot = await getDocs (q);
                querySnapshot.forEach((doc) =>{
                    docs.push({...doc.data(), id: doc.id});
                });
                setartData (docs);
        };
        getProducts();
    }, []);
    
    return (
        <div className='ItemsList'>
            <div className='ItemsCards'>
                {artData.map((article)=>{
                    return (
                        <div>
                            <Link to={`/detail/${article.id}`} key={article.id}>
                                <Item data={article}/>;
                            </Link>
                        </div>
                    );
                })} 
            </div>
        </div>
    );
};

export default ItemList;





