import React ,{useEffect , useState} from 'react';

import './ItemListContainer.css';
import  { db } from '../firebase/firebaseConfig';
import { collection, query, getDocs} from 'firebase/firestore';

import { useParams } from 'react-router';

import CartItems from './cartItems';

const CartContainer = () => {
	const [artData, setartData] = useState ([]);

    let paramsID = useParams();

    const artDataFiltered = artData.filter((article)=>{
        return article.id === paramsID.id;
    })
    

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
        <div className='cardDetail'>
            <div>
                {artDataFiltered.map((article)=>{
                    return <CartItems data={article} key={article.id}/>;
                })} 
            </div>
        </div>
    )
}

export default CartContainer;




