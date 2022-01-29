import React, { useState } from 'react';
import { Form, Button, Alert, FloatingLabel } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import axios from 'axios';
import Auth from '../utils/auth';

import audio from '../assets/audio/Dino-sounds.mp3'
import '../Forms.css'


const Signup = () => {

   const fetchDino = "https://dinoipsum.com/api/?format=text&paragraphs=1&words=1";
   const roar = new Audio(audio)
   const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', username: '', email: '', password: '' });
   const [validated] = useState(false);
   const [showAlert, setShowAlert] = useState(false);
   const [addUser, { error }] = useMutation(ADD_USER); 
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
      return await axios.get(fetchDino)
      .then((res) => {
         console.log(res)
         return res.data.split('.').join("")
         })
   }

   async function generate() {
      const dino = await getName()
         setUserFormData({
            username: dino
         })
   }

   if (showAlert) {
      setTimeout(() => {
         setShowAlert(false)
      }, 3000)
   }
   


   return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group className="form-group">
          <Form.Label htmlFor='username'>DinoName</Form.Label>
          <FloatingLabel>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username ? userFormData.username : ''}
            required
          />
          </FloatingLabel>
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

         <Button id="generateBtn" onClick={async () => await generate()}>
            Generate Username
         </Button>


        <Form.Group className="form-group">
          <Form.Label htmlFor='firstName'>Human Name</Form.Label>
          <FloatingLabel>
          <Form.Control
            type='text'
            placeholder='Your first name'
            name='firstName'
            onChange={handleInputChange}
            value={userFormData.firstName}
          />
          </FloatingLabel>
          <FloatingLabel>
          <Form.Control
            type='text'
            placeholder='Your last name'
            name='lastName'
            onChange={handleInputChange}
            value={userFormData.lastName}
          />
          </FloatingLabel>
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="form-group">
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

        <Form.Group className="form-group">
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
          className="form-btn"
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
        {error && <div></div>}
      </Form>
    </>
  );
};

export default Signup;
