import React from 'react'
import { Card, Image } from 'semantic-ui-react';


const Item = ({data}) => (
  <div>
    <Card>
      <Image src={data.thumbnailUrl} wrapped ui={false} />
      <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>
        <span className='date'> $ {data.precio}</span>
      </Card.Meta>
      </Card.Content>
    </Card>
  </div>
)

export default Item;