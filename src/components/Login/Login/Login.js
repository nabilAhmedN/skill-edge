import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  FaGoogle,
  FaGithub
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

  const {providerLogin} = useContext(AuthContext)

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  }


    return (
      <div className="w-50 mx-auto bg-light p-4 mt-5">
        <Form>
          <h2 className="text-center text-primary">Please Login</h2>
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

          <Button variant="primary">Login</Button>
          <Form.Text className="text-danger"></Form.Text>
        </Form>
        <p>
          <small>
            New to this website? Please <Link to="/register">Register</Link>
          </small>
        </p>
        {/* <ButtonGroup vertical>
          <Button
            // onClick={handleGoogleSignIn}
            className="mb-2"
            variant="outline-primary"
          >
            <FaGoogle /> Login with Google
          </Button>
          <Button variant="outline-dark">
            <FaGithub /> Login with GitHub
          </Button>
        </ButtonGroup> */}

        <div className="d-grid gap-2">
          <Button
            onClick={handleGoogleSignIn}
            variant="outline-primary"
            size="lg"
          >
            <FaGoogle />
            Login with Google
          </Button>
          <Button variant="outline-dark" size="lg">
            <FaGithub />
            Login with GitHub
          </Button>
        </div>
      </div>
    );
};

export default Login;