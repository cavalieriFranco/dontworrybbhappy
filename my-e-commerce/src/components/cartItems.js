import React from 'react'
import { Card, Image } from 'semantic-ui-react';




const CartItems = ({data}) =>{
    return(
        <div>
        <Card.Group>
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={data.img}
                    />
                    <Card.Header>{data.name}</Card.Header>
                    <Card.Meta>Cantidad : 3</Card.Meta>
                    <Card.Description>
                        $ {data.price}
                    </Card.Description>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Image
                    floated='right'
                    size='mini'
                    src={data.img}
                    />
                    <Card.Header>{data.name}</Card.Header>
                    <Card.Meta>Cantidad : 3</Card.Meta>
                    <Card.Description>
                         $ {data.price}
                    </Card.Description>
                </Card.Content>
            </Card>
        </Card.Group>
        </div>
    );
};

export default CartItems;


/* <ul>
<li>{data.name}</li>
<li>$ {data.price}</li>
</ul> */