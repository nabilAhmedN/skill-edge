import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  FaGoogle,
  FaGithub
} from "react-icons/fa";
import { Link,  useLocation,  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import ReactTooltip from 'react-tooltip';

const Login = () => {

  const [error, setError] = useState('');

  const { googleProviderLogin, githubProviderLogin, signIn } =
    useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
  
  const googleProvider = new GoogleAuthProvider()

  const githubProvider = new GithubAuthProvider()

  const handleGoogleSignIn = () => {
    googleProviderLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  }

  const handleGithubSignIn = () => {
    githubProviderLogin (githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      });
  };

    return (
      <div className="w-50 mx-auto bg-light p-4 mt-5 logF">
        <Form onSubmit={handleSubmit}>
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

          <ReactTooltip id="tool" />
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
        <p>
          <small>
            New to this website? Please <Link to="/register">Register</Link>
          </small>
        </p>

        <div className="d-grid gap-2">
          <Button
            onClick={handleGoogleSignIn}
            variant="outline-primary"
            size="lg"
          >
            <FaGoogle className="mb-1 me-1" />
            Login with Google
          </Button>
          <Button onClick={handleGithubSignIn} variant="outline-dark" size="lg">
            <FaGithub className="mb-1 me-1" />
            Login with GitHub
          </Button>
        </div>
      </div>
    );
};

export default Login;