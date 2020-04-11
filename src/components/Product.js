import React from 'react';
import { Item, Label, Header, Rating } from 'semantic-ui-react';
import { useParams, Link } from 'react-router-dom';

function Product({ products }) {
  // To get the id parameter from the path
  let { id } = useParams();

  const { name, mediaUrl, price, sku } = products[id - 1];

  return (
    <>
      <Item.Group>
        <Item>
          <Item.Image size='medium' src={mediaUrl} />
          <Item.Content>
            <Item.Header>{name}</Item.Header>
            <Item.Description>
              <p>${price}</p>
              <Label>SKU: {sku} </Label>
            </Item.Description>
            <Item.Extra>
              <Rating maxRating={5} defaultRating={3} icon='star' size='huge' />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <Header as='h3'>About this product</Header>
      <p>
        Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque
        sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris
        sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis
        mattis egestas metus.
      </p>
      <Link to='/' className='btn'>
        Back To Products
      </Link>
    </>
  );
}

export default Product;
