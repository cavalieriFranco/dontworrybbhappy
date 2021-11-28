import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from './ItemCount';


const ItemDetail = ({data}) => (
  <div>
    <Card>
      <Image src={data.thumbnailUrl} wrapped ui={false} />
      <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>
        <span className='date'> $ {data.precio}</span>
      </Card.Meta>
      <Card.Description>
            {data.description}
      </Card.Description>
      </Card.Content>
      <ItemCount stock={10} initial={0}/>
    </Card>

  </div>
)

export default ItemDetail;


