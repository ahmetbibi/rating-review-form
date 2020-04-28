import React, { useState } from 'react';
import { Item, Label, Header, Divider, Button } from 'semantic-ui-react';
import { useParams, Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';
import Rating from 'react-rating';
import './styles/Product.scss';

// To calculate the average rating value
function calculateAverage(reviews) {
  const total = reviews.reduce((acc, review) => acc + review.rating, 0);
  return total / Math.max(reviews.length, 1); // To get a number (avoid from NaN)
}

function Product({ products, reviews, setReviews }) {
  let { id } = useParams();
  id = Number(id);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredReviews = reviews.filter((review) => review.id === id);
  const average = calculateAverage(filteredReviews);

  const { name, mediaUrl, price, sku, description } = products[id - 1];

  function handleOpen() {
    setModalOpen(true);
  }

  function handleClose(review) {
    if (review) {
      setReviews([...reviews, { ...review, id }]);
    }
    setModalOpen(false);
  }

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
            <Item.Description>
              <Rating
                className='star-icon rating'
                initialRating={average}
                readonly={true}
                emptySymbol='fa fa-star-o fa-2x'
                fullSymbol='fa fa-star fa-2x'
                fractions={10}
              />{' '}
              <span className='average'>{average ? average.toFixed(1) : ''}</span>
            </Item.Description>
            <Divider />
            <Item.Extra>
              <Button onClick={handleOpen}>Write a review</Button>
              <ReviewForm modalOpen={modalOpen} handleClose={handleClose} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <Header as='h3'>About this product</Header>
      <p>{description}</p>
      <Item.Extra>
        <Link to='/' className='btn'>
          Back To Products
        </Link>
      </Item.Extra>
      <Divider />

      <Header as='h1'>Reviews</Header>
      {filteredReviews.length === 0 && <p>No reviews...</p>}
      <Reviews reviews={filteredReviews} productId={id} />
    </>
  );
}

export default Product;
