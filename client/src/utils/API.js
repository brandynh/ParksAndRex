// const fetchDino = "https://dinoipsum.com/api/?format=html&paragraphs=1&words=1";
//    const [dinoName, setName] = useState({
//       name: '',
//       loading: true
//    })
//    const generate = async () => {
//          await axios.get(fetchDino)
//             .then((res) => {
//                setName({
//                   name: res,
//                   loading: false,
//             })})
      
//    }


// <Button onClick={generate()}>
//    <div className="mx-auto ">
//       {dinoName.loading ? '':
//          dinoName.name}
//    </div>
// </Button>

// import React from 'react';
// import { Form, Stack, Button } from 'react-bootstrap';




// const SignupForm = () => {



//   return (
//    <>
//    <Stack direction="vertical" className="mx-5" gap={3}>
//       <Form>
//          <Form.Group className="mb-3" controlId="formBasicEmail">
//            <Form.Label>Email address</Form.Label>
//            <Form.Control type="email" placeholder="Enter email" />
//            <Form.Text className="text-muted">
//              We'll never share your email with anyone else.
//            </Form.Text>
//          </Form.Group>

//          <Form.Group className="mb-3" controlId="formBasicPassword">
//            <Form.Label>Password</Form.Label>
//            <Form.Control type="password" placeholder="Password" />
//          </Form.Group>
//          <Form.Group className="mb-3" controlId="formBasicCheckbox">
//            <Form.Check type="checkbox" label="Check me out" />
//          </Form.Group>
//          <Button variant="primary" type="submit">
//            Submit
//          </Button>
//       </Form>
//    </Stack>
//  </>
//   );
// };

// export default SignupForm;

// import React from 'react';
// import { Form, Stack, Button, List } from 'react-bootstrap';
// import { useState } from 'react'
// import axios from 'axios'



// const SignupForm = () => {



//   return (
//    <>


//    <Stack direction="vertical" className="mx-auto" gap={3}>
//       <Form.Group className="mb-3">
//         <Form.Label>Disabled input</Form.Label>
//         <Form.Control />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Input</Form.Label>
//         <Form.Select>
//           <option>Select menu</option>
//         </Form.Select>
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Check type="checkbox" />
//       </Form.Group>
//    </Stack>
//  </>
//   );
// };

// export default SignupForm;
