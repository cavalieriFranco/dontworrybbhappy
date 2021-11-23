import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import './ItemListContainer.css';
import ItemCount from './ItemCount';


const ItemList= ({name,date,description,img}) => (
    <div className='ItemList'>
        <Card>
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                 <Card.Meta>
                    <span className='date'>{date}</span>
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
            <ItemCount/>
        </Card>
    </div>
)

export default ItemList;