import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import axios from 'axios';

const Signup = () => {

   const fetchDino = "https://dinoipsum.com/api/?format=html&paragraphs=1&words=1";

   const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', username: '', email: '', password: '' });
   const [validated] = useState(false);
   const [showAlert, setShowAlert] = useState(false);
   const [dinoName, setName] = useState({
   name: '',
   loading: true
   })
   const [addUser, { error }] = useMutation(ADD_USER); 
   console.log(userFormData)
   const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
   };

   const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: {
           ...userFormData
        }
      });
      console.log(data)
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
   };

   async function getName() {
      await axios.get(fetchDino)
      .then((res) => {
         console.log(res)
         return res.data
         })
   }

   async function generate(e) {
      e.preventDefault();
      e.stopPropagation();
         setName({
            name: getName(),
            loading: false
         })
   }
   




   return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={dinoName ? dinoName.name : userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

         <Button onClick={generate()}>
            Generate Username
         </Button>

        <Form.Group>
          <Form.Label htmlFor='firstName'>First name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your first name'
            name='firstName'
            onChange={handleInputChange}
            value={userFormData.firstName}
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='lastName'>Last name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your last name'
            name='lastName'
            onChange={handleInputChange}
            value={userFormData.lastName}
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
        {error && <div>Sign up failed</div>}
      </Form>
    </>
  );
};

export default Signup;
