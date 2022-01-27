import React, { useState } from 'react';
import { Form, Alert, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
   const [userFormData, setUserFormData] = useState({username: '', password: ''});
   const [validated] = useState(false);
   const [showAlert, setShowAlert] = useState(false);
 
   const [login, { error }] = useMutation(LOGIN_USER); 
    console.log(userFormData)
   const handleInputChange = (event) => {
     const { name, value } = event.target;
     setUserFormData({ ...userFormData, [name]: value });
   };
 
   const handleFormSubmit = async (event) => {
     event.preventDefault();
 
     try {
       const { data } = await login({
         variables: {
            ...userFormData
         }
       });
       console.log(data)
       Auth.login(data.login.token);
     } catch (e) {
       console.error(e);
       setShowAlert(true);
     }
 
     setUserFormData({
       username: '',
       password: '',
     });
   };

  return (
     
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
       value={userFormData.username}
       required
     />
     <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
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
     disabled={!(userFormData.username && userFormData.password)}
     type='submit'
     variant='success'>
      Submit
   </Button>
   {error && <div>Sign in failed</div>}
 </Form>
  );
};

export default Login;

