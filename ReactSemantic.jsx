import React from 'react';
import  'semantic-ui-css/semantic.min.css';
import { Card, Image } from 'semantic-ui-react';
const ReactSemantic = () =>{
    return(
         <Card>
    <Image src='https://cdn.pixabay.com/photo/2018/06/05/19/01/bluebird-3456115__340.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {/* <a>
<Icon name='user' />
        22 Friends
      </a> */}
    </Card.Content>
  </Card>
    )
};
export default ReactSemantic;