import React, { useState } from 'react';
import {
  Form,
  Input,
  Select,
  TextArea,
  Checkbox,
  Button,
  Rating,
  Modal,
  Header,
} from 'semantic-ui-react';

import './styles/ReviewForm.scss';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
];

function ReviewForm() {
  const [modalOpen, setModalOpen] = useState(false);

  function handleOpen() {
    setModalOpen(true);
  }

  return (
    <>
      <Modal
        className='review-form'
        trigger={<Button onClick={handleOpen}>Write a review</Button>}
        basic
        size='small'
      >
        <Modal.Header className='review-main-header'>Write a Review</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {/* <Header className='color-text'>My review</Header> */}
            <Form>
              <Form.Field
                control={Rating}
                maxRating={5}
                defaultRating={3}
                icon='star'
                size='large'
              />
              <Form.Group widths='equal'>
                <Form.Field control={Input} label='First name' placeholder='First name' />
                <Form.Field control={Input} label='Last name' placeholder='Last name' />
                {/* <Form.Field
                  control={Select}
                  label='Gender'
                  options={options}
                  placeholder='Gender'
                /> */}
              </Form.Group>
              <Form.Field
                control={TextArea}
                label='About'
                placeholder='Tell us more about you...'
              />
              <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
              <Form.Field control={Button}>Submit</Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
}

export default ReviewForm;
