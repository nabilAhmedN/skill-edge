import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Register = () => {

  const [error, setError] = useState('')

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setError('')
            form.reset();
            handleupdateUserProfile(name, photoURL); 
          })
          .catch((e) => {
            console.error(e)
            setError(e.message)
          });
    }


    const handleupdateUserProfile = (name, photoURL) =>{
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(() => {})
      .catch(error => console.error(error))
    }

    return (
      <div className="w-50 mx-auto bg-light p-4 mt-5">
        <Form onSubmit={handleSubmit}>
          <h2 className="text-center text-primary">Please Registration</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
        <p className="pt-2">
          <small>
            ALready have an account <Link to="/login">Login</Link>{" "}
          </small>
        </p>
      </div>
    );
};

export default Register;