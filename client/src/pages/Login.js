import React, { useState } from 'react';
import { Form, Alert, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import '../Forms.css'


const Login = (props) => {
   const [userFormData, setUserFormData] = useState({email: '', password: ''});
   const [validated] = useState(false);
   const [showAlert, setShowAlert] = useState(false);
 
   const [login] = useMutation(LOGIN_USER); 
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
       email: '',
       password: '',
     });
   };

   if (showAlert) {
      setTimeout(() => {
         setShowAlert(false)
      }, 3000)
   }

  return (
     
   <Form id="login-form" className="login-signup-forms"noValidate validated={validated} onSubmit={handleFormSubmit}>
   {/* show alert if server response is bad */}
   <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
     Something went wrong with your login!
   </Alert>

   <Form.Group>
     <Form.Label htmlFor='email'>EMAIL</Form.Label>
     <Form.Control
       type='text'
       placeholder='Your email address'
       name='email'
       onChange={handleInputChange}
       value={userFormData.username}
       required
     />
     <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
   </Form.Group>


   <Form.Group>
     <Form.Label htmlFor='password'>PASSWORD</Form.Label>
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
   <Button id="login-btn"

     disabled={!(userFormData.email && userFormData.password)}
     type='submit'
     variant='success'>
      LOGIN
   </Button>
 </Form>
  );
};

export default Login;

