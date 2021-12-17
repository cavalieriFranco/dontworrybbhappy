import React from 'react'
import { Card, Image } from 'semantic-ui-react';


const Item = ({data}) => (
  <div>
    <Card>
      <Image src={data.img} wrapped ui={false} />
      <Card.Content>
      <Card.Header>{data.title}</Card.Header>
      <Card.Meta>
        <strong className='date'> $ {data.price}</strong>
      </Card.Meta>
      </Card.Content>
    </Card>
  </div>
)

export default Item;