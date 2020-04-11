import React, { useState } from 'react';
import { Item, Label, Header, Rating, Modal, Button, Divider } from 'semantic-ui-react';
import { useParams, Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

function Product({ products }) {
  // const [modalOpen, setModalOpen] = useState(false);

  // To get the id parameter from the path
  let { id } = useParams();

  const { name, mediaUrl, price, sku } = products[id - 1];

  // function handleOpen() {
  //   setModalOpen(true);
  // }

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
            <Divider />
            <Item.Extra>
              <ReviewForm />
              {/* <Modal
                trigger={<Button onClick={handleOpen}>Write a review</Button>}
                basic
                size='small'
              >
                <Modal.Header>Write a Review</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <Header>My review</Header>
                    <ReviewForm />
                  </Modal.Description>
                </Modal.Content>
              </Modal> */}
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
      <Item.Extra>
        <Link to='/' className='btn'>
          Back To Products
        </Link>
      </Item.Extra>
      <Divider />

      <Header as='h3'>Reviews</Header>
      <Reviews />
    </>
  );
}

export default Product;
