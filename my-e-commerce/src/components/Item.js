import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Item = ({data}) => (
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
  </Card>
)

export default Item;