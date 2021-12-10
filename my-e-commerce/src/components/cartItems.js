const CartItems = ({data}) =>{
    return(
        <div 
        style={{
            backgroundColor: "grey",
            width: 300,
            margin:15,
            border: "2px solid black",
            borderRadius: 3
        }}
        >
            <ul>
                <li>{data.name}</li>
                <li>$ {data.price}</li>
            </ul>
        </div>
    );
};

export default CartItems;