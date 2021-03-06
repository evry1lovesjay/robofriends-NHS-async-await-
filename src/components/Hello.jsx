import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const Hello = () => {
    return ( 
<div>
<h1>Hello World</h1>
<Button variant="primary">Primary</Button>{' '}

     
     <Form Col xs={6} md={4}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div> );
}
 
export default Hello;
